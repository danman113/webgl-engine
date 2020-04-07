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
  li.appendChild(a)
  return li
})
listElements.forEach(elem => list.appendChild(elem))

window.onload = () => {
  document.body.appendChild(list)
  const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
    fullscreen: true
  })

  engine.init = async gl => {
    global.engine = engine
    await Promise.all(entities.map(ent => ent.onload(gl)))
  }

  engine.draw = (gl, engine) => {
    if (selectedEntity) {
      selectedEntity.draw(gl, selectedEntity.material, engine)
    }
  }
  engine.start()
}
