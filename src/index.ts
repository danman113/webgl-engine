import { ShaderTypes } from './engine/shader'
import { mat4 } from 'gl-matrix'
import Engine from './engine'

import * as simpleFrag from './shaders/simple.frag'

import * as simpleVert from './shaders/simple.vert'

import * as simpleGLSL from './shaders/toon.glsl'

console.log(simpleFrag)

console.log(simpleVert)

console.log(simpleGLSL)

let squares: any[] = []

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })

  engine.init = (gl) => {
    global.engine = engine
    const vert = engine.compileShader('simpleVert', simpleVert, ShaderTypes.Vertex)
    const frag = engine.compileShader('simpleFrag', simpleFrag, ShaderTypes.Fragment)
    engine.initShaderProgram('simple', vert, frag)
    engine.shaderPrograms['simple'].initAttribLocation('aVertexPosition')
    engine.shaderPrograms['simple'].initAttribLocation('aVertexColor')
    engine.shaderPrograms['simple'].initUniformLocation('uProjectionMatrix')
    engine.shaderPrograms['simple'].initUniformLocation('uModelViewMatrix')
    engine.createBuffer('position', [
      1, 1,
      -1, 1,
      1, -1,
      -1, -1
    ])
    engine.createBuffer('secondSquare', [
      1, 1,
      -1, 1,
      1, -1,
      -1, -1
    ].map(elem => elem + 5))

    for (let i = 0; i < 20; i ++) {
      const offset = (Math.random() - 0.5) * 40
      engine.createBuffer(`square_${i}`, [
        1, 1,
        -1, 1,
        1, -1,
        -1, -1
      ].map(elem => elem + offset + (Math.random() / 4)))
    }

    engine.createBuffer('colors', [
      1, 0, 0, 1,
      0, 1, 0, 1,
      0, 0, 1, 1,
      1, 0, 1, 0.5
    ])
    gl.clear(engine.gl.COLOR_BUFFER_BIT)
  }

  let a = 0.1

  engine.draw = (gl) => {
    const { shaderPrograms, buffers } = engine
    const { attribLocations, uniformLocations } = shaderPrograms['simple']
    a += 0.01
    // Clear to black
    gl.clearColor(0, 0, 0, 1)
    gl.clearDepth(1)
    gl.enable(gl.DEPTH_TEST)
    // Near things obscure far things
    gl.depthFunc(gl.LEQUAL)

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    // Create a perspective matrix, a special matrix that is
    // used to simulate the distortion of perspective in a camera.
    // Our field of view is 45 degrees, with a width/height
    // ratio that matches the display size of the canvas
    // and we only want to see objects between 0.1 units
    // and 100 units away from the camera.

    const fieldOfView = 90 * Math.PI / 180   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight
    const zNear = 0.1
    const zFar = 100.0
    const projectionMatrix = mat4.create()

    // note: glmatrix.js always has the first argument
    // as the destination to receive the result.
    mat4.perspective(
      projectionMatrix,
      fieldOfView,
      aspect,
      zNear,
      zFar
    )

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    const modelViewMatrix = mat4.create()

    // Now move the drawing position a bit to where we want to
    // start drawing the square.

    mat4.translate(
      modelViewMatrix, // destination matrix
      modelViewMatrix, // matrix to translate
      [-0.0, 0.0, -6.0 - a] // amount to translate
    )

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute.
    engine.loadBuffer(buffers['position'])

    engine.bindVertexAttrib({
      dimension: 2,
      type: engine.gl.FLOAT,
      normalize: false,
      stride: 0,
      offset: 0,
      attributeName: 'aVertexPosition'
    }, shaderPrograms.simple)

    engine.loadBuffer(buffers['colors'])

    engine.bindVertexAttrib({
      dimension: 4,
      type: engine.gl.FLOAT,
      normalize: false,
      stride: 0,
      offset: 0,
      attributeName: 'aVertexColor'
    }, shaderPrograms.simple)

    // Tell WebGL to use our program when drawing

    gl.useProgram(shaderPrograms.simple.shaderProgram)

    // Set the shader uniforms

    gl.uniformMatrix4fv(
      uniformLocations.uProjectionMatrix,
      false,
      projectionMatrix
    )
    gl.uniformMatrix4fv(
      uniformLocations.uModelViewMatrix,
      false,
      modelViewMatrix
    )

    {
      const offset = 0
      const vertexCount = 4
      gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount)

      engine.loadBuffer(buffers['secondSquare'])

      engine.bindVertexAttrib({
        dimension: 2,
        type: engine.gl.FLOAT,
        normalize: false,
        stride: 0,
        offset: 0,
        attributeName: 'aVertexPosition'
      }, shaderPrograms.simple)

      gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount)

      for (let i = 0; i < 20; i++) {
        engine.loadBuffer(buffers[`square_${i}`])
        engine.bindVertexAttrib({
          dimension: 2,
          type: engine.gl.FLOAT,
          normalize: false,
          stride: 0,
          offset: 0,
          attributeName: 'aVertexPosition'
        }, shaderPrograms.simple)
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount)
      }


    }
  }

  engine.start()
}