let textureSource = 0

export default class Texture {
  public image: HTMLImageElement
  public loaded: boolean = false
  public textureSource = textureSource++

  constructor(public source: string) {
    const image = new Image()
    image.src = source
    image.onload = () => {
      this.loaded = true
    }
    this.image = image
  }

  bindTexture(gl: WebGLRenderingContext) {
    let texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR)

    gl.texImage2D(gl.TEXTURE_2D, this.textureSource, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image)
  }
}
