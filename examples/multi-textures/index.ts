import { v2, sum, sub, mult, divide } from './../../src/engine/v2'
import Engine from '../../src/engine'
import Material from '../../src/engine/material'
import VertexAttribute from '../../src/engine/vertexAttribute'
import { CanvasTexture } from '../../src/engine/texture'
import { makeOffscreenCanvas } from '../../src/engine/canvas2d'
import * as fragmentShader from './texture.frag'
import * as vertexShader from './texture.vert'
import Rectangle from '../../src/engine/rectangle'

const w = 200
const h = 100
let alphabet = ''
for (let i = 0; i < 26; i++) {
  alphabet += String.fromCharCode(65 + i)
}

let c = makeOffscreenCanvas(w, h)
const makeRandomTextureEntity = (i: number) => {
  const randomString = Array(Math.floor(Math.random() * 20 + 5))
    .fill(0)
    .map(_ => alphabet[Math.floor(Math.random() * alphabet.length)])
    .join('')
  const text = `${randomString}: ${i}`

  c.font = '14px sans-serif'
  const { width } = c.measureText(text)
  c.canvas.width = width
  // We need to do this twice because resetting the canvas width resets fillStyle?
  c.clearRect(0, 0, Math.ceil(c.canvas.width), Math.ceil(c.canvas.height))
  c.fillStyle = `rgba(0, ${(Math.random() * 156 + 100) | 0}, ${(Math.random() * 156 + 100) |
    0}, 0.6)`
  c.fillRect(0, 0, Math.ceil(c.canvas.width), Math.ceil(c.canvas.height))
  c.fillStyle = 'red'
  c.font = '14px sans-serif'
  c.fillText(text, 0, 14)
  const texture = new CanvasTexture(c)
  const textureEntity = new TextureEntity(texture, v2(Math.random(), Math.random()), text)
  return textureEntity
}

class TextureEntity {
  constructor(public texture: CanvasTexture, public position: v2, public id: string = 'hi') {}
}

let textureEntities: TextureEntity[] = []
let textureMaterial: Material

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })
  ;(<any>window).textureEntities = textureEntities

  engine.init = gl => {
    for (let i = 0; i < 20; i++) {
      const textureEntity = makeRandomTextureEntity(i)
      textureEntity.texture.setTexture(gl)
      textureEntities.push(textureEntity)
    }

    textureMaterial = new Material(gl, vertexShader, fragmentShader, {
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
  }
  let selectedTexture = -1
  let anchorPoint = v2(0, 0)
  engine.onMouseDown = (_, e) => {
    const sizeVector = v2(engine.settings.width, engine.settings.height)
    for (let i = textureEntities.length - 1; i >= 0; i--) {
      const textureEntity = textureEntities[i]
      const pos = mult(textureEntity.position, sizeVector)
      const box = new Rectangle(
        pos,
        sum(pos, v2(textureEntity.texture.width, textureEntity.texture.height))
      )
      const mouse = new Rectangle(engine.mouse, sum(engine.mouse, v2(-2, -2)))
      if (box.intersectsBox(mouse)) {
        selectedTexture = i
        anchorPoint = engine.mouse.slice()
        break
      }
    }
  }
  engine.onMouseUp = (_, e) => {
    if (selectedTexture > -1) {
      const sizeVector = v2(engine.settings.width, engine.settings.height)
      const offset = divide(sub(engine.mouse, anchorPoint), sizeVector) // normalize from (0, 0) -> (width, height) => (0, 0) -> (1, 1)
      textureEntities[selectedTexture].position = sum(
        textureEntities[selectedTexture].position,
        offset
      )
      selectedTexture = -1
    }
  }

  engine.draw = (gl, engine) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const sizeVector = v2(engine.settings.width, engine.settings.height)
    const offset = divide(sub(engine.mouse, anchorPoint), sizeVector) // normalize from (0, 0) -> (width, height) => (0, 0) -> (1, 1)
    for (let i = 0; i < textureEntities.length; i++) {
      const textureEntity = textureEntities[i]
      textureEntity.texture.bindTexture(gl)
      textureMaterial.useProgram()
      textureMaterial.setUniform('uImage', textureEntity.texture.textureUnit)
      textureMaterial.setUniform(
        'uScale',
        textureEntity.texture.width / engine.settings.width,
        textureEntity.texture.height / engine.settings.height
      )
      if (selectedTexture === i) {
        const pos = sum(textureEntity.position, offset)
        textureMaterial.setUniform('uTranslation', pos.x, pos.y)
      } else {
        textureMaterial.setUniform(
          'uTranslation',
          textureEntity.position.x,
          textureEntity.position.y
        )
      }
      textureMaterial.drawUsingAttribute('aPosition')
    }
  }
  engine.start()
}
