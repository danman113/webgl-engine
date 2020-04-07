let textureSource = 0
let MAX_TEXTURES = -Infinity

export default interface Texture {
  loaded: boolean
  texture: TexImageSource
  _texture: WebGLTexture
  textureSource: number
  width: number
  height: number
  setTexture(gl: WebGLRenderingContext): WebGLTexture
}

export default class Texture {
  public textureSource = textureSource++
  get textureUnit() {
    return this.textureSource % MAX_TEXTURES
  }
  public loaded = true
  public _texture: WebGLTexture
  // Allocates a buffer for the texture and sets it's texture unit
  setTexture(gl: WebGLRenderingContext): WebGLTexture {
    if (MAX_TEXTURES < 0) MAX_TEXTURES = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
    if (!this.loaded)
      throw new Error(
        'Attempted to bind image to texture before it loads. Make sure the image is loaded by the time you call bindTexture'
      )

    // Allocates a new texture* object on the GPU
    let texture = gl.createTexture()
    this._texture = texture
    // Sets the current texture unit to point to this texture
    this.bindTexture(gl)

    // Sets some texture parameters to use linear scaling and wrapping. May want to make this configurable
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

    // Copies the buffer inside this.texture to the texture unit on the GPU
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.texture)
    return texture
  }

  bindTexture(gl: WebGLRenderingContext) {
    gl.activeTexture(gl.TEXTURE0 + this.textureUnit)
    gl.bindTexture(gl.TEXTURE_2D, this._texture)
  }

  delete(gl: WebGLRenderingContext) {
    gl.deleteTexture(this._texture)
    this.loaded = false
  }
}

export class CanvasTexture extends Texture {
  constructor(context: CanvasRenderingContext2D) {
    super()
    this.texture = context.canvas
    this.height = context.canvas.height
    this.width = context.canvas.width
  }

  rebindTexture(gl: WebGLRenderingContext) {
    this.bindTexture(gl)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.texture)
  }
}

export class ImageTexture extends Texture {
  public image: HTMLImageElement
  public loaded: boolean = false
  public texture: TexImageSource
  public load: Promise<ImageTexture>
  constructor(public source: string) {
    super()
    const image = new Image()
    image.src = source
    this.width = image.width
    this.height = image.height
    this.load = new Promise((resolve, reject) => {
      image.onload = () => {
        this.loaded = true
        this.width = image.width
        this.height = image.height
        resolve(this)
      }
      image.onerror = e => {
        this.loaded = false
        this.width = image.width
        this.height = image.height
        reject(e)
      }
    })
    this.texture = image
  }
}
