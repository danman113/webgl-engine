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

if (!(<any>Array.prototype).x) {
  Object.defineProperty(Array.prototype, 'x', xProperty)
  Object.defineProperty(Array.prototype, 'y', yProperty)
}

export const v2 = (x = 0, y = 0): v2 => [x, y]
export const ZERO = v2()
// Euclidean distance between two points
export const distance = (pt1: v2, pt2: v2): number =>
  Math.sqrt((pt2.x - pt1.x) * (pt2.x - pt1.x) + (pt2.y - pt1.y) * (pt2.y - pt1.y))
// Faster than distance
export const distanceSquared = (pt1: v2, pt2: v2): number =>
  (pt2.x - pt1.x) * (pt2.x - pt1.x) + (pt2.y - pt1.y) * (pt2.y - pt1.y)

// Magnitude
export const magnitude = (v: v2): number => distance(v, ZERO)

// Given the three points, are they counter clockwise?
export const ccw = (a: v2, b: v2, c: v2): number =>
  (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)

// Angle between two points in radians
export const angle2 = (a: v2, b: v2): number => Math.atan2(b.y - a.y, b.x - a.x)

// Angle between three points in radians
export const angle3 = (a: v2, b: v2, c: v2): number =>
  Math.atan2(a.y - b.y, a.x - b.x) - Math.atan2(c.y - b.y, c.x - b.x)

export const piNum: number = Math.PI / 180
export const numPi: number = 180 / Math.PI
export const degToRad = (deg: number): number => deg * piNum
export const radToDeg = (rad: number): number => rad * numPi

export const dot = (a: v2, b: v2): number => a.x * b.x + a.y * b.y

export const sum = (a: v2, b: v2): v2 => v2(a.x + b.x, a.y + b.y)
export const sub = (a: v2, b: v2): v2 => v2(a.x - b.x, a.y - b.y)

export const unit = (a: v2): v2 => {
  const dist = distance(ZERO, a)
  return v2(a.x / dist, a.y / dist)
}

export const normal = (p0: v2, p1: v2): v2 => {
  // if we define dx=x2-x1 and dy=y2-y1, then the normals are (-dy, dx) and (dy, -dx).
  let dx = p1.x - p0.x
  let dy = p1.y - p0.y
  // orthoginal(sub(p1, p0))
  return v2(-dy, dx)
}

export const orthogonal = (v: v2): v2 => v2(-v.y, v.x)

export const scalarMultiply = (a: v2, c: number): v2 => v2(a.x * c, a.y * c)
export const scalarSum = (a: v2, c: number): v2 => v2(a.x + c, a.y + c)
