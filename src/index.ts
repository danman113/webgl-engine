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

let entities: Entity[] = []

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
      varying float aColor;
      void main () {
        aColor = aPosition.z;
        gl_Position = vec4(aPosition.x, aPosition.y, 0, 1);
      }`,
      `
      precision mediump float;
      varying float aColor;
      void main () {
        gl_FragColor = vec4(vec3(0.55, 0.42, 0.90) * aColor, 1);
      }
      `,
      ['aPosition']
    )
    let aPosition = new VertexAttribute(
      gl,
      new Float32Array([0, 0.5, 0.5, 0.5, -0.5, 0, -0.5, -0.5, 1]),
      {
        dimension: 3
      }
    )
    entities.push({ mat: simpleMaterial, attr: aPosition })
  }

  engine.draw = gl => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    for (let entity of entities) {
      gl.useProgram(entity.mat.program)
      entity.mat.bindAttribute('aPosition', entity.attr)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
  }
  engine.start()
}
