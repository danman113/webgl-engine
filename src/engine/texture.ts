let textureSource = 0

export default interface Texture {
  loaded: boolean
  texture: TexImageSource
  _texture: WebGLTexture
  textureSource: number
  bindTexture(gl: WebGLRenderingContext): WebGLTexture
}

export default class Texture {
  public textureSource = textureSource++
  public loaded = true
  public _texture: WebGLTexture
  bindTexture(gl: WebGLRenderingContext): WebGLTexture {
    if (!this.loaded)
      throw new Error(
        'Attempted to bind image to texture before it loads. Make sure the image is loaded by the time you call bindTexture'
      )
    let texture = gl.createTexture()
    this._texture = texture
    gl.bindTexture(gl.TEXTURE_2D, texture)

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR)

    gl.texImage2D(
      gl.TEXTURE_2D,
      this.textureSource,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      this.texture
    )
    return texture
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
  }

  rebindTexture(gl: WebGLRenderingContext) {
    gl.texImage2D(
      gl.TEXTURE_2D,
      this.textureSource,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      this.texture
    )
  }
}

export class ImageTexture extends Texture {
  public image: HTMLImageElement
  public loaded: boolean = false
  public texture: TexImageSource
  constructor(public source: string) {
    super()
    const image = new Image()
    image.src = source
    image.onload = () => {
      this.loaded = true
    }
    this.texture = image
  }
}
