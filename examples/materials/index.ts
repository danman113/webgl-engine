import Engine from './../../src/engine'
import MaterialExample from './materialExample'
import MouseGradientExample from './mouseGradientExample'
import ImageExample from './imageExample'
import ImageKernel from './imageKernel'

let entities: MaterialExample[] = [MouseGradientExample, ImageExample, ImageKernel]
let selectedEntity = entities[0]

const list = document.createElement('ul')
const listElements = entities.map((entity, i) => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.textContent = entity.name
  a.addEventListener('click', e => {
    e.preventDefault()
    selectedEntity = entities[i]
  })
  li.append(a)
  return li
})
list.append(...listElements)

window.onload = () => {
  document.body.append(list)
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })

  engine.init = gl => {
    global.engine = engine
    entities.forEach(ent => ent.onload(gl))
  }

  engine.draw = (gl, engine) => {
    if (selectedEntity) {
      selectedEntity.draw(gl, selectedEntity.material, engine)
    }
  }
  engine.start()
}
