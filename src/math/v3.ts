export interface v3 extends Array<number> {
  x?: number
  y?: number
  z?: number
}

function getx(): number {
  return this[0]
}

function setx(val: number) {
  this[0] = val
  return val
}

function gety(): number {
  return this[1]
}

function sety(val: number) {
  this[1] = val
  return val
}

function getz(): number {
  return this[2]
}

function setz(val: number) {
  this[2] = val
  return val
}

const xProperty = { get: getx, set: setx }
const yProperty = { get: gety, set: sety }
const zProperty = { get: getz, set: setz }

export const v3 = (x = 0, y = 0, z = 0): v3 => {
  const out = [x, y, z]
  Object.defineProperty(out, 'x', xProperty)
  Object.defineProperty(out, 'y', yProperty)
  Object.defineProperty(out, 'z', zProperty)
  return out
}
