import VertexAttribute from './vertexAttribute'
export enum ShaderTypes {
  Fragment = 'FRAGMENT',
  Vertex = 'VERTEX'
}

interface UniformLocationMap {
  [name: string]: WebGLUniformLocation
}

interface AttributeLocationMap {
  [name: string]: number
}

export default class Material {
  public vertexShader: WebGLShader
  public fragmentShader: WebGLShader
  public program: WebGLProgram
  public uniformsMap: UniformLocationMap = {}
  public attributesMap: AttributeLocationMap = {}

  constructor(
    public gl: WebGLRenderingContext,
    public vertexSource: string,
    public fragmentSource: string,
    attributeNames: string[],
    uniformNames: string[] = []
  ) {
    this.vertexShader = this.compileShader(vertexSource, ShaderTypes.Vertex)
    this.fragmentShader = this.compileShader(fragmentSource, ShaderTypes.Fragment)
    this.program = this.initShaderProgram(this.vertexShader, this.fragmentShader)
    for (let attr of attributeNames) {
      const location = this.gl.getAttribLocation(this.program, attr)
      this.attributesMap[attr] = location
    }

    for (let uniform of uniformNames) {
      const location = this.gl.getAttribLocation(this.program, uniform)
      this.uniformsMap[uniform] = location
    }
  }

  private getAttribLocation = (name: string) => {
    const { attributesMap } = this
    if (attributesMap[name] >= 0) {
      return attributesMap[name]
    } else {
      throw Error(`Attribute Location ${name} has not been initialized`)
    }
  }

  bindAttribute = (attrName: string, attr: VertexAttribute) => {
    const attrLocation = this.getAttribLocation(attrName)
    console.log(`Binding attribute ${attrName}`)
    this.gl.enableVertexAttribArray(attrLocation)
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
    this.gl.vertexAttribPointer(
      attrLocation,
      attr.vertexAttributeMetadata.dimension,
      attr.vertexAttributeMetadata.type,
      attr.vertexAttributeMetadata.normalize,
      attr.vertexAttributeMetadata.stride,
      attr.vertexAttributeMetadata.offset
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
