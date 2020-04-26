import { generateSphere } from './../../src/utils/shapes'
import * as keycode from 'keycode'
import { v3, UP } from '../../src/math/v3'
import {
  translation,
  rotationX,
  rotationY,
  rotationZ,
  multiplication,
  perspective,
  lookAt,
  inverse
} from '../../src/math/mat4'
import Engine from '../../src/engine'
import Material from '../../src/engine/material'
import VertexAttribute from '../../src/engine/vertexAttribute'
import * as fragmentShader from './3d.frag'
import * as vertexShader from './3d.vert'

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })
  ;(<any>window).engine = engine
  let material: Material

  engine.init = async gl => {
    material = new Material(gl, vertexShader, fragmentShader, {
      aPosition: new VertexAttribute(
        gl,
        // prettier-ignore
        generateSphere(2, 2, 20),
        {
          dimension: 3
        }
      ),
      aColor: new VertexAttribute(
        gl,
        // prettier-ignore
        generateSphere().map(_ => Math.random()),
        {
          dimension: 3
        }
      )
    })
    ;(<any>window).material = material
  }

  const fov = 60
  const vNear = 1
  const vFar = 2000
  const radius = 200

  const projectionMatrix = perspective(
    fov,
    engine.settings.width / engine.settings.height,
    vNear,
    vFar
  )

  let cameraMatrix = translation(v3(0, -10, 340))

  let FCount = 7
  let selectedF = 0

  engine.onClick = e => {
    ;(<HTMLCanvasElement>e.canvas).requestPointerLock()
  }

  let frames = 0
  engine.draw = (gl, engine, dt) => {
    frames++
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.enable(gl.CULL_FACE)
    gl.enable(gl.DEPTH_TEST)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    let speed = 3

    {
      if (engine.keys.has(keycode('shift'))) {
        speed = 5
      }
      if (engine.keys.has(keycode('ctrl'))) {
        speed = 0.5
      }
    }

    {
      if (engine.keys.has(keycode('right')) || engine.keys.has(keycode('d'))) {
        cameraMatrix.multiply(translation(v3(speed)))
      }
      if (engine.keys.has(keycode('left')) || engine.keys.has(keycode('a'))) {
        cameraMatrix.multiply(translation(v3(-speed)))
      }
      if (engine.keys.has(keycode('up'))) {
        cameraMatrix.translate(v3(0, speed))
      }
      if (engine.keys.has(keycode('down'))) {
        cameraMatrix.translate(v3(0, -speed))
      }
      if (engine.keys.has(keycode('s'))) {
        cameraMatrix.multiply(translation(v3(0, 0, speed)))
      }
      if (engine.keys.has(keycode('w'))) {
        cameraMatrix.multiply(translation(v3(0, 0, -speed)))
      }

      if (engine.keys.has(keycode('q'))) {
        cameraMatrix.multiply(rotationZ(Math.PI * 0.01))
      }

      if (engine.keys.has(keycode('e'))) {
        cameraMatrix.multiply(rotationZ(Math.PI * -0.01))
      }

      if (engine.keys.has(keycode('f'))) {
        const rotation = (selectedF * (Math.PI * 2)) / FCount
        const yOffset = Math.sin(rotation) * radius
        const xOffset = Math.cos(rotation) * radius
        cameraMatrix = lookAt(cameraMatrix.position, v3(xOffset, 0, yOffset), UP)
      }
      Array(FCount)
        .fill(0)
        .forEach((_, i) => {
          if (engine.keys.has(keycode(String(i)))) {
            selectedF = i
          }
        })
    }

    if (engine.mouseMovement.y) {
      cameraMatrix.multiply(rotationX(engine.mouseMovement.y * -0.01))
    }

    if (engine.mouseMovement.x) {
      cameraMatrix.multiply(rotationY(engine.mouseMovement.x * -0.01))
    }

    material.useProgram()

    const viewMatrix = inverse(cameraMatrix)

    const projectionViewMatrix = multiplication(projectionMatrix, viewMatrix)

    for (let i = 0; i < FCount; i++) {
      const rotation = (i * (Math.PI * 2)) / FCount
      const yOffset = Math.sin(rotation) * radius
      const xOffset = Math.cos(rotation) * radius
      const pos = v3(xOffset, 0, yOffset)

      let matrix = translation(v3())
      matrix = multiplication(projectionViewMatrix, matrix)
      matrix.multiply(rotationX(Math.PI))
      matrix.multiply(rotationY(Math.PI * frames * 0.004))
      matrix.multiply(translation(pos))
      material.setUniform('uMatrix', false, matrix)
      material.drawUsingAttribute('aPosition')
    }
  }
  engine.start()
}
