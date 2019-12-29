export interface CanvasSettings {
  width?: number;
  height?: number;
  fullscreen?: boolean;
}

export const setCanvasDimensions = (element: HTMLCanvasElement, { height, width } : CanvasSettings) => {
  console.log(width, height)
  element.width = width
  element.height = height
  element.style.width = `${width}`
  element.style.height = `${height}`
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
  setCanvasDimensions(element, settings)
  return getWebglContext(element)
}

export default setupWebglCanvas