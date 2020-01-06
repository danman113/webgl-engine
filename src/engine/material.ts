import VertexAttribute from './vertexAttribute'
export enum ShaderTypes {
  Fragment = 'FRAGMENT',
  Vertex = 'VERTEX'
}

const UniformTypeToLocation: (gl: WebGLRenderingContext) => { [type: number]: string } = gl => ({
  [gl.FLOAT]: 'uniform1f',
  [gl.FLOAT_VEC2]: 'uniform2f',
  [gl.FLOAT_VEC3]: 'uniform3f'
})

interface UniformLocationMap {
  [name: string]: WebGLUniformLocation
}

interface AttributeMap {
  [name: string]: VertexAttribute
}

export default class Material {
  public vertexShader: WebGLShader
  public fragmentShader: WebGLShader
  public program: WebGLProgram
  public uniformLocations: UniformLocationMap = {}

  constructor(
    public gl: WebGLRenderingContext,
    public vertexSource: string,
    public fragmentSource: string,
    public attributes: AttributeMap,
    uniformNames: string[] = []
  ) {
    this.vertexShader = this.compileShader(vertexSource, ShaderTypes.Vertex)
    this.fragmentShader = this.compileShader(fragmentSource, ShaderTypes.Fragment)
    this.program = this.initShaderProgram(this.vertexShader, this.fragmentShader)
    for (let attr in attributes) {
      const location = this.gl.getAttribLocation(this.program, attr)
      attributes[attr].location = location
    }

    for (let uniform of uniformNames) {
      const location = this.gl.getUniformLocation(this.program, uniform)
      this.uniformLocations[uniform] = location
    }
  }

  bindAttributes = () => {
    for (let attrName in this.attributes) {
      const attr = this.attributes[attrName]
      this.gl.enableVertexAttribArray(attr.location)
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
      this.gl.vertexAttribPointer(
        attr.location,
        attr.vertexAttributeMetadata.dimension,
        attr.vertexAttributeMetadata.type,
        attr.vertexAttributeMetadata.normalize,
        attr.vertexAttributeMetadata.stride,
        attr.vertexAttributeMetadata.offset
      )
    }
  }

  setAttribute = (attrName: string, attrType: GLenum, ...rest: any[]) => {
    const uniformLocation = this.uniformLocations[attrName]
    ;(this.gl as any)[UniformTypeToLocation(this.gl)[attrType]](uniformLocation, ...rest)
  }

  useProgram = () => this.gl.useProgram(this.program)

  drawUsingAttribute = (
    attrName: string,
    drawType: GLenum = this.gl.TRIANGLES,
    offset: number = 0
  ) => {
    const attr = this.attributes[attrName]
    this.bindAttributes()
    this.gl.drawArrays(
      this.gl.TRIANGLES,
      offset,
      attr.data.length / attr.vertexAttributeMetadata.dimension
    )
  }

  private compileShader = (src: string, shaderType: ShaderTypes): WebGLShader => {
    const { gl } = this
    const compiledShader: WebGLShader = gl.createShader(
      shaderType === ShaderTypes.Fragment ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER
    )
    gl.shaderSource(compiledShader, src)
    gl.compileShader(compiledShader)
    if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
      const error = new Error(gl.getShaderInfoLog(compiledShader))
      gl.deleteShader(compiledShader)
      throw error
    }
    return compiledShader
  }

  private initShaderProgram = (
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader
  ): WebGLProgram => {
    const { gl } = this
    const shaderProgram: WebGLProgram = gl.createProgram()
    gl.attachShader(shaderProgram, vertexShader)
    gl.attachShader(shaderProgram, fragmentShader)
    gl.linkProgram(shaderProgram)
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      const error = new Error(gl.getProgramInfoLog(shaderProgram))
      gl.deleteProgram(shaderProgram)
      throw error
    }
    return shaderProgram
  }
}
