import Material from '../../../src/engine/material'
import VertexAttribute from '../../../src/engine/vertexAttribute'
import MaterialExample from '../materialExample'
import * as FragmentSource from './mouseGradient.frag'
import * as VertexSource from './mouseGradient.vert'

const example = new MaterialExample(
  'Mouse Gradient',
  gl =>
    new Material(gl, VertexSource, FragmentSource, {
      aPosition: new VertexAttribute(
        gl,
        new Float32Array([0, 0, 1, 1, 0, 0.5, 0, 1, 0.5, 0, 1, 0.5, 1, 0, 0.5, 1, 1, 0]),
        {
          dimension: 3
        }
      )
    }),
  (gl, material, engine) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    material.useProgram()
    material.setUniform(
      'uColor',
      gl.FLOAT_VEC3,
      engine.mouse.x / engine.settings.width,
      0.42,
      engine.mouse.y / engine.settings.height
    )
    material.drawUsingAttribute('aPosition')
  }
)

export default example
