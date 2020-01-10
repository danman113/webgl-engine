import Engine from './engine'

// import * as simpleFrag from './shaders/simple.frag'

// import * as simpleVert from './shaders/simple.vert'
import Texture from './engine/texture'
import Material from './engine/material'
import VertexAttribute from './engine/vertexAttribute'

// console.log(simpleFrag)

// console.log(simpleVert)

import img from './assets/bridge.jpg'

let entities: Material[] = []
const tex = new Texture(img)

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
      attribute vec2 aTextcoord;
      varying float vColor;
      varying vec2 vTextcoord;
      void main () {
        vColor = aPosition.z;
        vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);
        vTextcoord = aTextcoord;
        gl_Position = vec4(pos, 0, 1);
      }`,
      `
      precision mediump float;
      varying float vColor;
      varying vec2 vTextcoord;
      uniform vec3 uColor;
      uniform sampler2D uImage;
      void main () {
        // gl_FragColor = vec4(uColor * vColor, 1);
        vec4 tex = texture2D(uImage, vTextcoord);
        gl_FragColor = vec4(tex.r * max(uColor.r, 0.5), tex.g, tex.b * max(uColor.b, 0.5), tex.a);
      }
      `,
      {
        aPosition: new VertexAttribute(
          gl,
          new Float32Array([0, 0, 1, 1, 0, 0.5, 0, 1, 0.5, 0, 1, 0.5, 1, 0, 0.5, 1, 1, 0]),
          {
            dimension: 3
          }
        ),
        aTextcoord: new VertexAttribute(
          gl,
          new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            0, 1,
            1, 0,
            1, 1
          ]),
          {
            dimension: 2
          }
        )
      },
      ['uResolution', 'uColor']
    )
    tex.bindTexture(gl)
    entities.push(simpleMaterial)
  }

  engine.draw = (gl, engine) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    for (let entity of entities) {
      entity.useProgram()
      entity.setAttribute(
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
