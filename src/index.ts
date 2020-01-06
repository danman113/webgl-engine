// import { ShaderTypes } from './engine/shader'
// import { mat4 } from 'gl-matrix'
import Engine from './engine'

// import * as simpleFrag from './shaders/simple.frag'

// import * as simpleVert from './shaders/simple.vert'
import Material from './engine/material'
import VertexAttribute from './engine/vertexAttribute'

// console.log(simpleFrag)

// console.log(simpleVert)

interface Entity {
  mat: Material
  attr: VertexAttribute
}

let entities: Material[] = []

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })

  engine.init = gl => {
    global.engine = engine
    let simpleMaterial = new Material(
      gl,
      `
      precision mediump float;
      attribute vec3 aPosition;
      uniform vec2 uResolution;
      varying float aColor;
      void main () {
        aColor = aPosition.z;
        vec2 pos = ((aPosition.xy / uResolution) * 2.0 - 1.0) * vec2(1, -1);
        gl_Position = vec4(pos, 0, 1);
      }`,
      `
      precision mediump float;
      varying float aColor;
      void main () {
        gl_FragColor = vec4(vec3(0.55, 0.42, 0.90) * aColor, 1);
      }
      `,
      {
        aPosition: new VertexAttribute(
          gl,
          new Float32Array([
            0, 0, 1,
            480, 0, 0.5,
            0, 430, 0.5,
            0, 430, 0.5,
            480, 0, 0.5,
            480, 430, 0,
          ]),
          {
            dimension: 3
          }
        )
      },
      ['uResolution']
    )
    // simpleMaterial.setAttribute('uResolution', gl.FLOAT_VEC2, gl.canvas.width, gl.canvas.height)
    entities.push(simpleMaterial)
  }

  engine.draw = gl => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    for (let entity of entities) {
      entity.setAttribute('uResolution', gl.FLOAT_VEC2, gl.canvas.width, gl.canvas.height)
      entity.drawUsingAttribute('aPosition')
    }
  }
  engine.start()
}
