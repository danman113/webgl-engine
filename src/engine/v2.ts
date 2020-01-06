export interface v2 extends Array<number> {
  x?: number
  y?: number
}

function getx() {
  return this[0]
}

function setx(val: number) {
  this[0] = val
  return val
}

function gety() {
  return this[1]
}

function sety(val: number) {
  this[1] = val
  return val
}

const xProperty = { get: getx, set: setx }
const yProperty = { get: gety, set: sety }

export const v2 = (x = 0, y = 0): v2 => {
  const out = [x, y]
  Object.defineProperty(out, 'x', xProperty)
  Object.defineProperty(out, 'y', yProperty)
  return out
}
