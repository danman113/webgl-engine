interface VertexAttributeMetadata {
  dimension: number
  type?: GLenum
  normalize?: boolean
  stride?: number // Offset of array to move every iteration of the vertex shader 0 in this case means size * sizeof(type).
  offset?: number
}

export default class VertexAttribute {
  public buffer: WebGLBuffer
  public vertexAttributeMetadata: VertexAttributeMetadata
  constructor(
    gl: WebGLRenderingContext,
    data: Float32Array,
    {
      dimension,
      type = gl.FLOAT,
      normalize = false,
      stride = 0,
      offset = 0
    }: VertexAttributeMetadata,
    usage: GLenum = gl.STATIC_DRAW
  ) {
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, data, usage)
    this.buffer = buffer
    this.vertexAttributeMetadata = { dimension, type, normalize, stride, offset }
  }
}
