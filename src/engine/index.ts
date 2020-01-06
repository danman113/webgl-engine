import { v2 } from './v2'

export interface EngineSettings {
  width?: number
  height?: number
  fullscreen?: boolean
}

export default class Engine {
  public gl: WebGLRenderingContext
  public mouse: v2 = v2()
  public touches: v2[] = []

  public RAF: number
  constructor(public element: HTMLCanvasElement, public settings: EngineSettings) {
    this.setCanvasSize(settings)
    const gl = (this.gl = this.element.getContext('webgl'))
    if (!gl) throw new Error('Could not find webgl context')
    window.addEventListener('resize', () => {
      this.setCanvasSize(settings)
      // Sets internal webgl viewport to be the size of the canvas
      gl.viewport(0, 0, settings.width, settings.height)
      this.onResize(gl, this)
    })

    element.addEventListener('mousemove', e => {
      if (e.offsetX) {
        this.mouse.x = e.offsetX
        this.mouse.y = e.offsetY
      }
    })

    element.addEventListener('click', e => {
      this.onClick(gl, this)
    })

    element.addEventListener('touchstart', e => {
      this.updateTouches(e)
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i]
        if (i === 0) {
          this.mouse.x = touch.pageX
          this.mouse.y = touch.pageY
        }
      }
    })

    element.addEventListener('touchend', e => {
      this.updateTouches(e)
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i]
        if (i === 0) {
          this.mouse.x = touch.pageX
          this.mouse.y = touch.pageY
        }
      }
      this.onClick(gl, this)
    })

    element.addEventListener('touchmove', e => {
      this.updateTouches(e)
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i]
        if (i === 0) {
          this.mouse.x = touch.pageX
          this.mouse.y = touch.pageY
        }
      }
    })

    element.addEventListener('contextmenu', e => e.preventDefault())
    element.addEventListener('dragenter', e => e.preventDefault())
  }

  public updateTouches = (e: TouchEvent) => {
    e.preventDefault()
    this.touches = [...(e.touches as any)].map(touch => v2(touch.pageX, touch.pageY))
  }

  render = () => {
    this.draw(this.gl, this)
    window.requestAnimationFrame(this.render)
  }

  start = () => {
    this.init(this.gl, this)
    this.RAF = requestAnimationFrame(this.render)
  }

  draw = (gl: WebGLRenderingContext, e: Engine) => {}
  init = (gl: WebGLRenderingContext, e: Engine) => {}
  onResize = (gl: WebGLRenderingContext, e: Engine) => {}
  onClick = (gl: WebGLRenderingContext, e: Engine) => {}

  private setCanvasDimensions = (maxWidth: number, maxHeight: number) => {
    const element = this.element
    element.width = maxWidth
    element.height = maxHeight
    element.style.width = `${maxWidth}`
    element.style.height = `${maxHeight}`
  }

  private setCanvasSize = (settings: EngineSettings) => {
    if (!!settings.fullscreen) {
      settings.width = window.innerWidth
      settings.height = window.innerHeight
    }
    this.setCanvasDimensions(settings.width, settings.height)
  }
}
