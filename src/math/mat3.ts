import { v2 } from './v2'
type mat3 = number[]

export const identity = () => {
  const out: mat3 = Array(9).fill(0)
  out[0] = 1
  out[4] = 1
  out[8] = 1
  return out
}

export function translation(translation: v2) {
  const out = identity()
  out[6] = translation.x
  out[7] = translation.y
  return out
}

export function scale(scaleMatrix: v2) {
  const out = identity()
  out[0] = scaleMatrix.x
  out[4] = scaleMatrix.y
  return out
}

export function rotation(angle: number) {
  const out = identity()
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  out[0] = cos
  out[1] = -sin
  out[3] = sin
  out[4] = cos
  return out
}

export function multiplication(a: mat3, b: mat3) {
  const a00 = a[0 * 3 + 0]
  const a01 = a[0 * 3 + 1]
  const a02 = a[0 * 3 + 2]
  const a10 = a[1 * 3 + 0]
  const a11 = a[1 * 3 + 1]
  const a12 = a[1 * 3 + 2]
  const a20 = a[2 * 3 + 0]
  const a21 = a[2 * 3 + 1]
  const a22 = a[2 * 3 + 2]
  const b00 = b[0 * 3 + 0]
  const b01 = b[0 * 3 + 1]
  const b02 = b[0 * 3 + 2]
  const b10 = b[1 * 3 + 0]
  const b11 = b[1 * 3 + 1]
  const b12 = b[1 * 3 + 2]
  const b20 = b[2 * 3 + 0]
  const b21 = b[2 * 3 + 1]
  const b22 = b[2 * 3 + 2]

  // prettier-disable
  return [
    b00 * a00 + b01 * a10 + b02 * a20,
    b00 * a01 + b01 * a11 + b02 * a21,
    b00 * a02 + b01 * a12 + b02 * a22,
    b10 * a00 + b11 * a10 + b12 * a20,
    b10 * a01 + b11 * a11 + b12 * a21,
    b10 * a02 + b11 * a12 + b12 * a22,
    b20 * a00 + b21 * a10 + b22 * a20,
    b20 * a01 + b21 * a11 + b22 * a21,
    b20 * a02 + b21 * a12 + b22 * a22
  ]
}
