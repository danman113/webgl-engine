export const makeOffscreenCanvas = (width: number, height: number) => {
  const c = document.createElement('canvas').getContext('2d')
  c.canvas.width = width
  c.canvas.height = height
  return c
}
