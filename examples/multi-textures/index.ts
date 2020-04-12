import * as keycode from 'keycode'
import { v2, sum, sub, mult, divide, scalarMultiply } from './../../src/math/v2'
import { identity, translation, scale, rotation, multiplication } from './../../src/math/mat3'
import Engine from '../../src/engine'
import Material from '../../src/engine/material'
import VertexAttribute from '../../src/engine/vertexAttribute'
import { CanvasTexture } from '../../src/engine/texture'
import { makeOffscreenCanvas } from '../../src/utils/canvas2d'
import * as fragmentShader from './texture.frag'
import * as vertexShader from './texture.vert'
import Rectangle from '../../src/math/rectangle'
import { SimpleRectangle } from '../../src/utils/shapes'

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
  const textHeight = 14

  c.font = `${textHeight}px sans-serif`
  const { width } = c.measureText(text)
  c.canvas.width = width
  // We need to do this twice because resetting the canvas width resets fillStyle?
  c.clearRect(0, 0, Math.ceil(c.canvas.width), Math.ceil(c.canvas.height))
  c.fillStyle = `rgba(0, ${(Math.random() * 156 + 100) | 0}, ${(Math.random() * 156 + 100) |
    0}, 0.6)`
  c.fillRect(0, 0, Math.ceil(c.canvas.width), Math.ceil(c.canvas.height))
  c.fillStyle = 'red'
  c.font = `${textHeight}px sans-serif`
  c.fillText(text, 0, textHeight)
  const texture = new CanvasTexture(c)
  const rotation = Math.random() * 2
  const textureEntity = new TextureEntity(
    texture,
    v2(Math.random(), Math.random()),
    v2(Math.sin(rotation), Math.cos(rotation)),
    text
  )
  return textureEntity
}

class TextureEntity {
  constructor(
    public texture: CanvasTexture,
    public position: v2,
    public rotation: v2,
    public id: string
  ) {}
}

let textureEntities: TextureEntity[] = []
let textureMaterial: Material

window.onload = () => {
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })
  ;(<any>window).engine = engine
  ;(<any>window).textureEntities = textureEntities
  ;(<any>window).keycode = keycode

  engine.init = async gl => {
    for (let i = 0; i < 500; i++) {
      const textureEntity = makeRandomTextureEntity(i)
      textureEntity.texture.setTexture(gl)
      textureEntities.push(textureEntity)
    }

    textureMaterial = new Material(gl, vertexShader, fragmentShader, {
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

  let rotated = 0
  let rotationAnchorPoint = v2(-0.5, -0.5)
  engine.draw = (gl, engine) => {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    if (engine.keys.has(keycode('left'))) {
      rotated += 0.02
    }

    if (engine.keys.has(keycode('right'))) {
      rotated -= 0.02
    }

    for (let i = 1; i < 10; i++) {
      if (engine.keys.has(keycode(String(i)))) {
        const zeroBased = i - 1
        const anchorX = Math.floor(zeroBased % 3) / 2
        const anchorY = Math.floor(zeroBased / 3) / 2
        rotationAnchorPoint = v2(-anchorX, anchorY - 1)
      }
    }

    const sizeVector = v2(engine.settings.width, engine.settings.height)
    const offset = divide(sub(engine.mouse, anchorPoint), sizeVector) // normalize from (0, 0) -> (width, height) => (0, 0) -> (1, 1)
    textureMaterial.useProgram()
    for (let i = 0; i < textureEntities.length; i++) {
      const textureEntity = textureEntities[i]
      textureEntity.texture.bindTexture(gl)
      textureMaterial.setUniform('uImage', textureEntity.texture.textureUnit)

      let translationMatrix
      if (selectedTexture === i) {
        const pos = sum(textureEntity.position, offset)
        translationMatrix = translation(pos)
      } else {
        translationMatrix = translation(textureEntity.position)
      }
      const rotationMatrix = rotation(rotated)
      const scaleMatrix = scale(
        v2(
          textureEntity.texture.width / engine.settings.width,
          textureEntity.texture.height / engine.settings.height
        )
      )

      let matrix = translationMatrix
      matrix = multiplication(matrix, translation(mult(rotationAnchorPoint, v2(-scaleMatrix[0], -scaleMatrix[4]))))
      matrix = multiplication(matrix, rotationMatrix)
      matrix = multiplication(matrix, scaleMatrix)
      matrix = multiplication(matrix, translation(rotationAnchorPoint)) //

      textureMaterial.setUniform('uMatrix', false, matrix)

      textureMaterial.drawUsingAttribute('aPosition')
    }
  }
  engine.start()
}
