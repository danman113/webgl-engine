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

export const UP = v3(0, 1)

export const ZERO = v3()
// Euclidean distance between two points
export const distance = (pt1: v3, pt2: v3): number =>
  Math.sqrt(
    (pt2.x - pt1.x) * (pt2.x - pt1.x) +
      (pt2.y - pt1.y) * (pt2.y - pt1.y) +
      (pt2.z - pt1.z) * (pt2.z - pt1.z)
  )
// Faster than distance
export const distanceSquared = (pt1: v3, pt2: v3): number =>
  (pt2.x - pt1.x) * (pt2.x - pt1.x) +
  (pt2.y - pt1.y) * (pt2.y - pt1.y) +
  (pt2.z - pt1.z) * (pt2.z - pt1.z)

export const dot = (a: v3, b: v3): number => a.x * b.x + a.y * b.y + a.z + b.z

export const sum = (a: v3, b: v3): v3 => v3(a.x + b.x, a.y + b.y, a.z + b.z)
export const sub = (a: v3, b: v3): v3 => v3(a.x - b.x, a.y - b.y, a.z - b.z)
export const mult = (a: v3, b: v3): v3 => v3(a.x * b.x, a.y * b.y, a.z * b.z)
export const divide = (a: v3, b: v3): v3 => v3(a.x / b.x, a.y / b.y, a.z / b.z)

// Note: This messes up when a is the zero vector (divide by 0)
export const normalize = (a: v3): v3 => {
  const dist = distance(ZERO, a)
  return v3(a.x / dist, a.y / dist, a.z / dist)
}

export const normal = (a: v3, b: v3): v3 => {
  return v3(a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0])
}

export const cross = normal

// export const orthogonal = (v: v3): v3 => v3(-v.y, v.x)
