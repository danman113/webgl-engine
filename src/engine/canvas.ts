import { debounce } from 'lodash'

export interface CanvasSettings {
  width?: number;
  height?: number;
  fullscreen?: boolean;
}

const setCanvasDimensions = (element: HTMLCanvasElement, maxWidth: number, maxHeight: number) => {
  element.width = maxWidth
  element.height = maxHeight
  element.style.width = `${maxWidth}`
  element.style.height = `${maxHeight}`
}

const setCanvasSize = (element: HTMLCanvasElement, settings: CanvasSettings) => {
  if (!!settings.fullscreen) {
    const maxWidth = window.innerWidth
    const maxHeight = window.innerHeight
    setCanvasDimensions(element, maxWidth, maxHeight)
    window.addEventListener('resize', debounce(() => {
      setCanvasSize(element, settings)
    }, 500))
  } else {
    setCanvasDimensions(element, settings.width, settings.height)
  }
}

const getWebglContext = (element: HTMLCanvasElement): WebGLRenderingContext => {
  const gl = element.getContext('webgl')
  if (!gl) {
    throw new Error('Could not get webgl context')
    return null
  }
  return gl
}

const setupWebglCanvas = (element: HTMLCanvasElement, settings: CanvasSettings): WebGLRenderingContext => {
  setCanvasSize(element, settings)
  return getWebglContext(element)
}

export default setupWebglCanvas