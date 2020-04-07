import Engine from './engine'
import Material from './engine/material'
import VertexAttribute from './engine/vertexAttribute'

let entities: Material[] = []

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })

  engine.init = async gl => {
    global.engine = engine
    let simpleMaterial = new Material(
      gl,
      `
      precision mediump float;
      attribute vec3 aPosition;
      varying float vColor;
      void main () {
        vColor = aPosition.z;
        vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);
        gl_Position = vec4(pos, 0, 1);
      }`,
      `
      precision mediump float;
      varying float vColor;
      uniform vec3 uColor;
      void main () {
        gl_FragColor = vec4(uColor * vColor, 1);
      }
      `,
      {
        aPosition: new VertexAttribute(
          gl,
          new Float32Array([0, 0, 1, 1, 0, 0.5, 0, 1, 0.5, 0, 1, 0.5, 1, 0, 0.5, 1, 1, 0]),
          {
            dimension: 3
          }
        )
      }
    )
    entities.push(simpleMaterial)
  }

  engine.draw = (gl, engine) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    for (let entity of entities) {
      entity.useProgram()
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
