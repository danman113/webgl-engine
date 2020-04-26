import { UP } from '../../src/math/v3'
import * as keycode from 'keycode'
import { scalarMultiply, sum } from '../../src/math/v2'
import { v3 } from '../../src/math/v3'
import {
  translation,
  scale,
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
        new Float32Array([
          // left column front
          0,   0,  0,
          0, 150,  0,
          30,   0,  0,
          0, 150,  0,
          30, 150,  0,
          30,   0,  0,

          // top rung front
          30,   0,  0,
          30,  30,  0,
          100,   0,  0,
          30,  30,  0,
          100,  30,  0,
          100,   0,  0,

          // middle rung front
          30,  60,  0,
          30,  90,  0,
          67,  60,  0,
          30,  90,  0,
          67,  90,  0,
          67,  60,  0,

          // left column back
            0,   0,  30,
           30,   0,  30,
            0, 150,  30,
            0, 150,  30,
           30,   0,  30,
           30, 150,  30,

          // top rung back
           30,   0,  30,
          100,   0,  30,
           30,  30,  30,
           30,  30,  30,
          100,   0,  30,
          100,  30,  30,

          // middle rung back
           30,  60,  30,
           67,  60,  30,
           30,  90,  30,
           30,  90,  30,
           67,  60,  30,
           67,  90,  30,

          // top
            0,   0,   0,
          100,   0,   0,
          100,   0,  30,
            0,   0,   0,
          100,   0,  30,
            0,   0,  30,

          // top rung right
          100,   0,   0,
          100,  30,   0,
          100,  30,  30,
          100,   0,   0,
          100,  30,  30,
          100,   0,  30,

          // under top rung
          30,   30,   0,
          30,   30,  30,
          100,  30,  30,
          30,   30,   0,
          100,  30,  30,
          100,  30,   0,

          // between top rung and middle
          30,   30,   0,
          30,   60,  30,
          30,   30,  30,
          30,   30,   0,
          30,   60,   0,
          30,   60,  30,

          // top of middle rung
          30,   60,   0,
          67,   60,  30,
          30,   60,  30,
          30,   60,   0,
          67,   60,   0,
          67,   60,  30,

          // right of middle rung
          67,   60,   0,
          67,   90,  30,
          67,   60,  30,
          67,   60,   0,
          67,   90,   0,
          67,   90,  30,

          // bottom of middle rung.
          30,   90,   0,
          30,   90,  30,
          67,   90,  30,
          30,   90,   0,
          67,   90,  30,
          67,   90,   0,

          // right of bottom
          30,   90,   0,
          30,  150,  30,
          30,   90,  30,
          30,   90,   0,
          30,  150,   0,
          30,  150,  30,

          // bottom
          0,   150,   0,
          0,   150,  30,
          30,  150,  30,
          0,   150,   0,
          30,  150,  30,
          30,  150,   0,

          // left side
          0,   0,   0,
          0,   0,  30,
          0, 150,  30,
          0,   0,   0,
          0, 150,  30,
          0, 150,   0]),
        {
          dimension: 3
        }
      ),
      aColor: new VertexAttribute(
        gl,
        // prettier-ignore
        new Uint8Array([
          // left column front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // top rung front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // middle rung front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // left column back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // top rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // middle rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // top
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,

          // top rung right
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,

          // under top rung
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,

          // between top rung and middle
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,

          // top of middle rung
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,

          // right of middle rung
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,

          // bottom of middle rung.
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,

          // right of bottom
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,

          // bottom
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,

          // left side
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220]),
        {
          dimension: 3,
          type: gl.UNSIGNED_BYTE,
          normalize: true
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

  let cameraMatrix = translation(v3(0, -50, 250))

  let FCount = 5
  let selectedF = 0

  engine.onClick = e => {
    ;(<HTMLCanvasElement>e.canvas).requestPointerLock()
  }

  engine.draw = (gl, engine) => {
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
      const isLookAt = i === 0 && engine.keys.has(keycode('y'))

      // It's upside down yo
      if (isLookAt) {
        const rotation = (selectedF * (Math.PI * 2)) / FCount
        const yOffset = Math.sin(rotation) * radius
        const xOffset = Math.cos(rotation) * radius
        matrix = lookAt(pos, v3(xOffset, 0, yOffset), UP)
      }
      matrix = multiplication(projectionViewMatrix, matrix)
      matrix.multiply(rotationX(Math.PI))
      if (!isLookAt) {
        matrix.multiply(translation(pos))
      }
      material.setUniform('uMatrix', false, matrix)
      material.drawUsingAttribute('aPosition')
    }
  }
  engine.start()
}
