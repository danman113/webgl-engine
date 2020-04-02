import Engine from './../../src/engine'
import Material from './../../src/engine/material'
import VertexAttribute from './../../src/engine/vertexAttribute'
import { CanvasTexture } from './../../src/engine/texture'
import { makeOffscreenCanvas } from './../../src/engine/canvas2d'
import mouseGradient from '../materials/mouseGradientExample'
import * as fragmentShader from './image.frag'
import * as vertexShader from './image.vert'

let entities: Material[] = []

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })
  let c: CanvasRenderingContext2D, texture: CanvasTexture
  engine.init = gl => {
    c = makeOffscreenCanvas(engine.settings.width, engine.settings.height)
    texture = new CanvasTexture(c)
    texture.bindTexture(gl)
    // global.c = c
    // global.engine = engine

    let textureMaterial = new Material(gl, vertexShader, fragmentShader, {
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
      aTextcoord: new VertexAttribute(gl, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), {
        dimension: 2
      })
    })
    mouseGradient.onload(gl)
    entities.push(mouseGradient.material)
    entities.push(textureMaterial)
  }
  let x = 0
  const resolutionScale = 1
  engine.draw = (gl, engine) => {
    {
      c.canvas.width = engine.settings.width * resolutionScale
      c.canvas.height = engine.settings.height * resolutionScale
      // c.clearRect(0, 0, engine.settings.width * resolutionScale, engine.settings.height * resolutionScale)
      // c.fillStyle = 'black'
      // c.fillRect(0, 0, engine.settings.width * resolutionScale, engine.settings.height * resolutionScale)
      c.fillStyle = 'red'
      x += 0.25
      c.fillRect(engine.mouse.x * resolutionScale, engine.mouse.y * resolutionScale, 40, 90)
      c.font = '32px sans-serif'
      c.fillText('Hello Canvas', 100 + x, 32)
      texture.rebindTexture(gl)
    }
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    for (let entity of entities) {
      entity.useProgram()
      entity.setUniform(
        'uColor',
        gl.FLOAT_VEC3,
        engine.mouse[0] / engine.settings.width,
        0.42,
        engine.mouse[1] / engine.settings.height
      )
      entity.drawUsingAttribute('aPosition')
    }
  }
  engine.start()
}
