import Engine from './../../src/engine'
import Material from './../../src/engine/material'
import VertexAttribute from './../../src/engine/vertexAttribute'
import { CanvasTexture } from './../../src/engine/texture'
import { makeOffscreenCanvas } from '../../src/utils/canvas2d'
import { SimpleRectangle } from '../../src/utils/shapes'
import mouseGradient from '../materials/mouseGradientExample'
import * as fragmentShader from './image.frag'
import * as vertexShader from './image.vert'

let entities: Material[] = []

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })
  let c: CanvasRenderingContext2D, texture: CanvasTexture
  engine.init = async gl => {
    c = makeOffscreenCanvas(engine.settings.width, engine.settings.height)
    texture = new CanvasTexture(c)
    texture.setTexture(gl)

    let textureMaterial = new Material(gl, vertexShader, fragmentShader, {
      aPosition: new VertexAttribute(
        gl,
        // prettier-ignore
        SimpleRectangle,
        {
          dimension: 2
        }
      ),
      aTextcoord: new VertexAttribute(gl, SimpleRectangle, {
        dimension: 2
      })
    })
    await mouseGradient.onload(gl)
    entities.push(mouseGradient.material)
    entities.push(textureMaterial)
  }
  let x = 0
  const resolutionScale = 1
  engine.draw = (gl, engine, dt) => {
    {
      c.canvas.width = engine.settings.width * resolutionScale
      c.canvas.height = engine.settings.height * resolutionScale
      // c.clearRect(0, 0, engine.settings.width * resolutionScale, engine.settings.height * resolutionScale)
      // c.fillStyle = 'black'
      // c.fillRect(0, 0, engine.settings.width * resolutionScale, engine.settings.height * resolutionScale)
      c.fillStyle = 'red'
      x += 0.25
      // c.fillRect(engine.mouse.x * resolutionScale, engine.mouse.y * resolutionScale, 40, 90)
      c.font = '32px sans-serif'
      c.fillText('Hello Canvas', 100 + x, 32)
      c.fillText(String(dt), 0, 32)
      c.fillText(
        String(engine.mouse.x * resolutionScale) + ', ' + String(engine.mouse.y * resolutionScale),
        engine.mouse.x * resolutionScale,
        engine.mouse.y * resolutionScale
      )
      c.beginPath()
      const segments = Math.floor((engine.mouse.x / engine.settings.width) * 50) + 3
      const radius = 400
      const z = (engine.mouse.y / engine.settings.height) * Math.PI
      const points: number[][] = []
      for (let i = 0; i < segments; i++) {
        const x = Math.cos((Math.PI * 2 * i) / segments) * radius * Math.sin(z)
        const y = Math.sin((Math.PI * 2 * i) / segments) * radius * Math.sin(z)
        points.push([x, y])
      }
      const offsetX = radius
      const offsetY = radius
      for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i]
        if (i === 0) {
          c.moveTo(x + offsetX, y + offsetY)
        } else {
          c.lineTo(x + offsetX, y + offsetY)
        }
      }
      c.lineTo(points[0][0] + offsetX, points[0][1] + offsetY)
      c.stroke()
      texture.rebindTexture(gl)
    }
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    for (let entity of entities) {
      entity.useProgram()
      if (entity.uniformLocations['uColor'])
        entity.setUniform(
          'uColor',
          engine.mouse[0] / engine.settings.width,
          0.42,
          engine.mouse[1] / engine.settings.height
        )
      entity.drawUsingAttribute('aPosition')
    }
  }
  engine.start()
}
