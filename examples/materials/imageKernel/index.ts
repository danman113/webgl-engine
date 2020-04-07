import { CanvasTexture } from './../../../src/engine/texture';
import Material from '../../../src/engine/material'
import VertexAttribute from '../../../src/engine/vertexAttribute'
import { ImageTexture as Texture } from '../../../src/engine/texture'
import MaterialExample from '../materialExample'
import * as FragmentSource from './image.frag'
import * as VertexSource from './image.vert'
import * as SimpleImageFragmentShader from '../../../src/shaders/image.frag'
import * as SimpleImageVertexShader from '../../../src/shaders/image.vert'
import sheep from '../../assets/sheep.jpg'
import beach from '../../assets/beach.jpg'
import food from '../../assets/food.jpg'
import building from '../../assets/building.jpg'
import { SimpleRectangle } from '../../../src/utils/shapes'
import { makeOffscreenCanvas } from '../../../src/utils/canvas2d'

let selectedImageIndex = 0
const images = [sheep, beach, food, building].map(img => new Texture(img))

let selectedKernelIndex = 0
const kernels: { [key: string]: number[] } = {
  normal: [0, 0, 0, 0, 1, 0, 0, 0, 0],
  gaussianBlur: [0.045, 0.122, 0.045, 0.122, 0.332, 0.122, 0.045, 0.122, 0.045],
  gaussianBlur2: [1, 2, 1, 2, 4, 2, 1, 2, 1],
  gaussianBlur3: [0, 1, 0, 1, 1, 1, 0, 1, 0],
  unsharpen: [-1, -1, -1, -1, 9, -1, -1, -1, -1],
  sharpness: [0, -1, 0, -1, 5, -1, 0, -1, 0],
  sharpen: [-1, -1, -1, -1, 16, -1, -1, -1, -1],
  edgeDetect: [-0.125, -0.125, -0.125, -0.125, 1, -0.125, -0.125, -0.125, -0.125],
  edgeDetect2: [-1, -1, -1, -1, 8, -1, -1, -1, -1],
  edgeDetect3: [-5, 0, 0, 0, 0, 0, 0, 0, 5],
  edgeDetect4: [-1, -1, -1, 0, 0, 0, 1, 1, 1],
  edgeDetect5: [-1, -1, -1, 2, 2, 2, -1, -1, -1],
  edgeDetect6: [-5, -5, -5, -5, 39, -5, -5, -5, -5],
  sobelHorizontal: [1, 2, 1, 0, 0, 0, -1, -2, -1],
  sobelVertical: [1, 0, -1, 2, 0, -2, 1, 0, -1],
  previtHorizontal: [1, 1, 1, 0, 0, 0, -1, -1, -1],
  previtVertical: [1, 0, -1, 1, 0, -1, 1, 0, -1],
  boxBlur: [0.111, 0.111, 0.111, 0.111, 0.111, 0.111, 0.111, 0.111, 0.111],
  triangleBlur: [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625],
  emboss: [-2, -1, 0, -1, 1, 1, 0, 1, 2]
}
const kernelKeys = Object.keys(kernels)

// A little jank in this MaterialExample system. Ideally engine would have one of these built-in
// but I think it's a little too high overhead as not all examples need this
let canvasTexture: CanvasTexture
let UIMaterial: Material
let context: CanvasRenderingContext2D

const example = new MaterialExample(
  'Image Kernel Example',
  async gl => {
    const mat = new Material(gl, VertexSource, FragmentSource, {
      aPosition: new VertexAttribute(gl, SimpleRectangle, {
        dimension: 2
      }),
      aTextcoord: new VertexAttribute(gl, SimpleRectangle, {
        dimension: 2
      })
    })

    context = makeOffscreenCanvas(gl.canvas.width, gl.canvas.height)
    canvasTexture = new CanvasTexture(context)
    canvasTexture.setTexture(gl)

    UIMaterial = new Material(gl, SimpleImageVertexShader, SimpleImageFragmentShader, {
      aPosition: new VertexAttribute(gl, SimpleRectangle, {
        dimension: 2
      }),
      aTextcoord: new VertexAttribute(gl, SimpleRectangle, {
        dimension: 2
      })
    })

    await Promise.all(images.map(texture => texture.load))
    images.forEach(texture => texture.setTexture(gl))
    return mat
  },
  (gl, material, engine) => {
    const selectedImage = images[selectedImageIndex]
    engine.onKeyUp = (_, __, keyCode) => {
      // @TODO: Cleanup with some keycode package
      if (keyCode === 38)
        selectedKernelIndex = selectedKernelIndex ? selectedKernelIndex - 1 : kernelKeys.length - 1
      if (keyCode === 40) selectedKernelIndex = (selectedKernelIndex + 1) % kernelKeys.length
      if (keyCode === 37)
        selectedImageIndex = selectedImageIndex ? selectedImageIndex - 1 : images.length - 1
      if (keyCode === 39) selectedImageIndex = (selectedImageIndex + 1) % images.length
    }

    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const selectedKernelName = kernelKeys[selectedKernelIndex]
    const selectedKernel = kernels[selectedKernelName]
    {
      material.useProgram()
      selectedImage.bindTexture(gl)
      const weight = Math.max(
        selectedKernel.reduce((acc, val) => acc + val),
        1
      )
      material.setUniform('uImage', selectedImage.textureUnit)
      material.setUniform('uImageResolution', selectedImage.width, selectedImage.height)
      material.setUniform('uImageKernel[0]', selectedKernel)
      material.setUniform('uKernelWeight', weight)
      material.drawUsingAttribute('aPosition')
    }

    {
      const { width, height } = engine.settings
      context.canvas.width = width
      context.canvas.height = height
      context.clearRect(0, 0, width, height)

      const baseHeight = height * 0.1
      const baseWidth = width * 0.5
      const kernelInfoText = `Selected Filter: ${selectedKernelName}`
      const imageInfoText = `Selected Image: ${selectedImageIndex}`
      context.font = '24px sans-serif'
      context.fillStyle = 'white'

      context.fillText(kernelInfoText, baseWidth + 1, baseHeight + 1)
      context.fillStyle = 'black'
      context.fillText(kernelInfoText, baseWidth, baseHeight)

      context.fillStyle = 'white'
      context.fillText(imageInfoText, baseWidth + 1, baseHeight + 30 + 1)
      context.fillStyle = 'black'
      context.fillText(imageInfoText, baseWidth, baseHeight + 30)
      canvasTexture.rebindTexture(gl)

      UIMaterial.useProgram()
      UIMaterial.setUniform('uImage', canvasTexture.textureUnit)
      UIMaterial.drawUsingAttribute('aPosition')
    }
  }
)

export default example
