import { v3 } from './v3'
type mat4 = number[]

export const identity = () => {
  const out: mat4 = Array(16).fill(0)
  out[0] = 1
  out[5] = 1
  out[10] = 1
  out[15] = 1
  return out
}

export function translation(translation: v3) {
  const out = identity()
  out[12] = translation.x
  out[13] = translation.y
  out[14] = translation.z
  return out
}

export function scale(scaleMatrix: v3) {
  const out = identity()
  out[0] = scaleMatrix.x
  out[5] = scaleMatrix.y
  out[10] = scaleMatrix.z
  return out
}

export function rotationX(angle: number) {
  const out = identity()
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  out[5] = cos
  out[6] = sin
  out[9] = -sin
  out[10] = cos
  return out
}

export function rotationY(angle: number) {
  const out = identity()
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  out[0] = cos
  out[2] = -sin
  out[8] = sin
  out[10] = cos
  return out
}

export function rotationZ(angle: number) {
  const out = identity()
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  out[0] = cos
  out[1] = sin
  out[4] = -sin
  out[5] = cos
  return out
}

export function orthographic(
  left: number,
  right: number,
  bottom: number,
  top: number,
  near: number,
  far: number
) {
  const out = identity()
  out[0] = 2 / (right - left)
  out[5] = 2 / (top - bottom) // -2 here to flip the y axis so positve y => bottom
  out[10] = 2 / (near - far)
  out[12] = (left + right) / (left - right) // These two account for translation from -1x -> 1x => 0x -> 1x
  out[13] = (bottom + top) / (bottom - top)
  out[14] = (near + far) / (near - far)
  return out
}

export function multiplication(a: mat4, b: mat4) {
  const b00 = b[0 * 4 + 0]
  const b01 = b[0 * 4 + 1]
  const b02 = b[0 * 4 + 2]
  const b03 = b[0 * 4 + 3]
  const b10 = b[1 * 4 + 0]
  const b11 = b[1 * 4 + 1]
  const b12 = b[1 * 4 + 2]
  const b13 = b[1 * 4 + 3]
  const b20 = b[2 * 4 + 0]
  const b21 = b[2 * 4 + 1]
  const b22 = b[2 * 4 + 2]
  const b23 = b[2 * 4 + 3]
  const b30 = b[3 * 4 + 0]
  const b31 = b[3 * 4 + 1]
  const b32 = b[3 * 4 + 2]
  const b33 = b[3 * 4 + 3]
  const a00 = a[0 * 4 + 0]
  const a01 = a[0 * 4 + 1]
  const a02 = a[0 * 4 + 2]
  const a03 = a[0 * 4 + 3]
  const a10 = a[1 * 4 + 0]
  const a11 = a[1 * 4 + 1]
  const a12 = a[1 * 4 + 2]
  const a13 = a[1 * 4 + 3]
  const a20 = a[2 * 4 + 0]
  const a21 = a[2 * 4 + 1]
  const a22 = a[2 * 4 + 2]
  const a23 = a[2 * 4 + 3]
  const a30 = a[3 * 4 + 0]
  const a31 = a[3 * 4 + 1]
  const a32 = a[3 * 4 + 2]
  const a33 = a[3 * 4 + 3]
  const out = identity()
  out[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30
  out[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31
  out[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32
  out[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33
  out[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30
  out[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31
  out[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32
  out[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33
  out[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30
  out[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31
  out[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32
  out[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33
  out[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30
  out[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31
  out[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32
  out[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
  return out
}
