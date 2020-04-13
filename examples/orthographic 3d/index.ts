import * as keycode from 'keycode'
import { v3 } from '../../src/math/v3'
import {
  translation,
  scale,
  rotationX,
  rotationY,
  rotationZ,
  multiplication,
  orthographic
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

  const color = v3(Math.random(), Math.random(), Math.random())
  let scaleVector = v3(1, 1, 1)
  let rotationVector = v3(Math.PI * 0.1, 0, (Math.PI * 5) / 3)
  let selectedVector = scaleVector

  const left = 0
  const right = engine.settings.width
  const top = 0
  const bottom = engine.settings.height
  const near = 400
  const far = -400
  const leftRightTop: v3 = v3(left, right, bottom)
  const bottomNearFar: v3 = v3(top, near, far)

  engine.draw = (gl, engine) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.enable(gl.CULL_FACE)
    gl.enable(gl.DEPTH_TEST)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    let speed = 0.01

    const translationVector = v3(engine.mouse.x, engine.mouse.y, 0)
    {
      if (engine.keys.has(keycode('shift'))) {
        speed = 2
      }
      if (engine.keys.has(keycode('ctrl'))) {
        speed = 0.025
      }
      if (engine.keys.has(keycode('-'))) {
        selectedVector = leftRightTop
      }
      if (engine.keys.has(keycode('='))) {
        selectedVector = bottomNearFar
      }
      if (engine.keys.has(keycode('4'))) {
        selectedVector = color
      }
      if (engine.keys.has(keycode('5'))) {
        selectedVector = scaleVector
      }
      if (engine.keys.has(keycode('6'))) {
        selectedVector = rotationVector
      }
    }

    {
      if (engine.keys.has(keycode('7'))) {
        selectedVector.x += speed
      }
      if (engine.keys.has(keycode('1'))) {
        selectedVector.x -= speed
      }
      if (engine.keys.has(keycode('8'))) {
        selectedVector.y += speed
      }
      if (engine.keys.has(keycode('2'))) {
        selectedVector.y -= speed
      }
      if (engine.keys.has(keycode('9'))) {
        selectedVector.z += speed
      }
      if (engine.keys.has(keycode('3'))) {
        selectedVector.z -= speed
      }
    }

    let matrix = orthographic(
      leftRightTop.x,
      leftRightTop.y,
      leftRightTop.z,
      bottomNearFar.x,
      bottomNearFar.y,
      bottomNearFar.z
    )
    matrix = multiplication(matrix, translation(translationVector))
    matrix = multiplication(matrix, rotationX(rotationVector.x))
    matrix = multiplication(matrix, rotationY(rotationVector.y))
    matrix = multiplication(matrix, rotationZ(rotationVector.z))
    matrix = multiplication(matrix, scale(scaleVector))

    material.useProgram()
    material.setUniform('uMatrix', false, matrix)
    // material.setUniform('uColor', ...color)

    material.drawUsingAttribute('aPosition')
  }
  engine.start()
}
