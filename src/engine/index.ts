import setupWebglCanvas, { CanvasSettings } from './canvas'
import ShaderProgram, { ShaderTypes } from './shader'

interface EngineSettings extends CanvasSettings {

}

interface ShaderMap {
  [name: string]: WebGLShader
}

interface ShaderProgramMap {
  [name: string]: ShaderProgram
}

interface BufferMap {
  [name: string]: WebGLBuffer
}

interface VertexAttribute {
  dimension: number, // How many of the buffer to consume at a time, maps to float, vec2, vec3, vec4...
  type: number, // The dataType of the float
  normalize: boolean, // Normalize the vertices
  stride: number, // how many bytes to get from one set of values to the next. Get by multipying size(type) * (matSize - dimension)
  offset: number, // how many bytes inside the buffer to start from. Get by multipying size(type) * offsetElements
  attributeName: string // Name of attribute to to bind the vertexes too
}

export default class Engine {
  public gl: WebGLRenderingContext
  public shaders: ShaderMap = {}
  public shaderPrograms: ShaderProgramMap = {}
  public buffers: BufferMap = {}

  public canvasSettings: CanvasSettings

  private RAF: number
  constructor (element: HTMLCanvasElement, settings: EngineSettings) {
    this.gl = setupWebglCanvas(element, settings)
  }

  compileShader = (name: string, src: string, shaderType: ShaderTypes): WebGLShader => {
    const { gl, shaders } = this
    const compiledShader: WebGLShader = gl.createShader(shaderType === ShaderTypes.Fragment ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER)
    gl.shaderSource(compiledShader, src)
    gl.compileShader(compiledShader)
    if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(compiledShader))
      gl.deleteShader(compiledShader)
      return null
    }
    shaders[name] = compiledShader
    return shaders[name]
  }

  initShaderProgram = (name: string, vertexShader: WebGLProgram, fragmentShader: WebGLProgram): ShaderProgram => {
    const { gl, shaderPrograms } = this
    const shaderProgram: WebGLProgram = gl.createProgram()
    gl.attachShader(shaderProgram, vertexShader)
    gl.attachShader(shaderProgram, fragmentShader)
    gl.linkProgram(shaderProgram)

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(shaderProgram))
      return null
    }

    shaderPrograms[name] = new ShaderProgram(shaderProgram, gl)
    return shaderPrograms[name]
  }

  loadBuffer = (buffer: WebGLBuffer) => {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer)
  }

  bindVertexAttrib = (attr: VertexAttribute, shader: ShaderProgram) => {
    const { gl } = this
    const {
      dimension,
      type,
      normalize,
      stride,
      offset,
      attributeName
    } = attr
    const attribLocation = shader.getAttribLocation(attributeName)
    // Tells opengl how to populate the shader attribute, then enables it
    gl.vertexAttribPointer(
      attribLocation,
      dimension,
      type,
      normalize,
      stride,
      offset
    )
    gl.enableVertexAttribArray(
      attribLocation
    )
  }

  createBuffer = (name: string, data: number[]) => {
    const { gl, buffers } = this
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
    buffers[name] = buffer
    return buffers[name]
  }

  render = () => {
    this.draw(this.gl)
    window.requestAnimationFrame(this.render)
  }

  start = () => {
    this.init(this.gl)
    this.RAF = requestAnimationFrame(this.render)
  }

  draw = (gl: WebGLRenderingContext) => {}
  init = (gl: WebGLRenderingContext) => {}
}