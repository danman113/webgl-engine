import { debounce } from 'lodash'

export interface CanvasSettings {
  width?: number
  height?: number
  fullscreen?: boolean
}

const setCanvasDimensions = (element: HTMLCanvasElement, maxWidth: number, maxHeight: number) => {
  element.width = maxWidth
  element.height = maxHeight
  element.style.width = `${maxWidth}`
  element.style.height = `${maxHeight}`
}

const setCanvasSize = (element: HTMLCanvasElement, settings: CanvasSettings) => {
  if (!!settings.fullscreen) {
    settings.width = window.innerWidth
    settings.height = window.innerHeight
  }
  setCanvasDimensions(element, settings.width, settings.height)
}

const getWebglContext = (element: HTMLCanvasElement): WebGLRenderingContext => {
  const gl = element.getContext('webgl')
  if (!gl) {
    throw new Error('Could not get webgl context')
    return null
  }
  return gl
}

const setupWebglCanvas = (
  element: HTMLCanvasElement,
  settings: CanvasSettings,
  onResize: Function
): WebGLRenderingContext => {
  setCanvasSize(element, settings)
  const gl = getWebglContext(element)
  window.addEventListener(
    'resize',
    debounce(() => {
      setCanvasSize(element, settings)
      // Sets internal webgl viewport to be the size of the canvas
      gl.viewport(0, 0, settings.width, settings.height)
      onResize(settings)
    }, 500)
  )
  return gl
}

export default setupWebglCanvas
