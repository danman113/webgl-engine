import Material from '../../../src/engine/material'
import VertexAttribute from '../../../src/engine/vertexAttribute'
import { ImageTexture as Texture } from '../../../src/engine/texture'
import MaterialExample from '../materialExample'
import * as FragmentSource from './image.frag'
import * as VertexSource from './image.vert'
import image from './img.jpg'

const texture = new Texture(image)

const example = new MaterialExample(
  'Texture Example',
  gl => {
    const mat = new Material(
      gl,
      VertexSource,
      FragmentSource,
      {
        aPosition: new VertexAttribute(
          gl,
          // prettier-ignore
          new Float32Array([
            0, 0,
            1, 0,
            0, 1, // Left Triangle
            0, 1,
            1, 0,
            1, 1, // Right Triangles
          ]),
          {
            dimension: 2
          }
        ),
        aTextcoord: new VertexAttribute(
          gl,
          new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
          {
            dimension: 2
          }
        )
      },
      ['uColor']
    )
    texture.bindTexture(gl)
    return mat
  },
  (gl, material, engine) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    material.useProgram()
    material.setAttribute(
      'uColor',
      gl.FLOAT_VEC3,
      engine.mouse[0] / engine.settings.width, // Percentage of mouse to last x coord
      0.42,
      engine.mouse[1] / engine.settings.height // Percentage of mouse to last y coord
    )
    material.drawUsingAttribute('aPosition')
  }
)

export default example
