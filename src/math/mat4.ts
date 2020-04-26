import { degToRad } from './v2'
import { v3, normalize, cross, sub } from './v3'
export interface mat4 extends Array<number> {
  position?: v3
  translate?(target: v3): mat4
  scale?(target: v3): mat4
  scaleVector?(): v3
  multiply?(target: mat4): mat4
  invert?(): mat4
}

export const identity = () => {
  const out: mat4 = <number[]>Array(16).fill(0)
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

if (!(<any>Array.prototype).translate) {
  Object.defineProperty(Array.prototype, 'position', {
    get: function() {
      const out = v3()
      out[0] = this[12]
      out[1] = this[13]
      out[2] = this[14]
      return out
    }
  })

  Object.defineProperty(Array.prototype, 'translate', {
    value: function(target: v3) {
      this[12] += target[0]
      this[13] += target[1]
      this[14] += target[2]
      return this
    }
  })
  Object.defineProperty(Array.prototype, 'scale', {
    value: function(target: v3) {
      this[0] = target[0]
      this[5] = target[1]
      this[10] = target[2]
      return this
    }
  })
  Object.defineProperty(Array.prototype, 'scaleVector', {
    value: function() {
      const out = v3()
      out[0] = this[0]
      out[1] = this[5]
      out[2] = this[10]
      return out
    }
  })

  Object.defineProperty(Array.prototype, 'multiply', {
    value: function(b: mat4) {
      const a = this
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
      const out = this
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
  })

  Object.defineProperty(Array.prototype, 'invert', {
    value: function() {
      const m = this
      const m00 = m[0 * 4 + 0]
      const m01 = m[0 * 4 + 1]
      const m02 = m[0 * 4 + 2]
      const m03 = m[0 * 4 + 3]
      const m10 = m[1 * 4 + 0]
      const m11 = m[1 * 4 + 1]
      const m12 = m[1 * 4 + 2]
      const m13 = m[1 * 4 + 3]
      const m20 = m[2 * 4 + 0]
      const m21 = m[2 * 4 + 1]
      const m22 = m[2 * 4 + 2]
      const m23 = m[2 * 4 + 3]
      const m30 = m[3 * 4 + 0]
      const m31 = m[3 * 4 + 1]
      const m32 = m[3 * 4 + 2]
      const m33 = m[3 * 4 + 3]
      const tmp_0 = m22 * m33
      const tmp_1 = m32 * m23
      const tmp_2 = m12 * m33
      const tmp_3 = m32 * m13
      const tmp_4 = m12 * m23
      const tmp_5 = m22 * m13
      const tmp_6 = m02 * m33
      const tmp_7 = m32 * m03
      const tmp_8 = m02 * m23
      const tmp_9 = m22 * m03
      const tmp_10 = m02 * m13
      const tmp_11 = m12 * m03
      const tmp_12 = m20 * m31
      const tmp_13 = m30 * m21
      const tmp_14 = m10 * m31
      const tmp_15 = m30 * m11
      const tmp_16 = m10 * m21
      const tmp_17 = m20 * m11
      const tmp_18 = m00 * m31
      const tmp_19 = m30 * m01
      const tmp_20 = m00 * m21
      const tmp_21 = m20 * m01
      const tmp_22 = m00 * m11
      const tmp_23 = m10 * m01

      const t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31)
      const t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31)
      const t2 =
        tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31)
      const t3 =
        tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21)

      const d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3)

      const out = this
      ;(out[0] = d * t0),
        (out[1] = d * t1),
        (out[2] = d * t2),
        (out[3] = d * t3),
        (out[4] =
          d *
          (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30))),
        (out[5] =
          d *
          (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30))),
        (out[6] =
          d *
          (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30))),
        (out[7] =
          d *
          (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20))),
        (out[8] =
          d *
          (tmp_12 * m13 +
            tmp_15 * m23 +
            tmp_16 * m33 -
            (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33))),
        (out[9] =
          d *
          (tmp_13 * m03 +
            tmp_18 * m23 +
            tmp_21 * m33 -
            (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33))),
        (out[10] =
          d *
          (tmp_14 * m03 +
            tmp_19 * m13 +
            tmp_22 * m33 -
            (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33))),
        (out[11] =
          d *
          (tmp_17 * m03 +
            tmp_20 * m13 +
            tmp_23 * m23 -
            (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23))),
        (out[12] =
          d *
          (tmp_14 * m22 +
            tmp_17 * m32 +
            tmp_13 * m12 -
            (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22))),
        (out[13] =
          d *
          (tmp_20 * m32 +
            tmp_12 * m02 +
            tmp_19 * m22 -
            (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02))),
        (out[14] =
          d *
          (tmp_18 * m12 +
            tmp_23 * m32 +
            tmp_15 * m02 -
            (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12))),
        (out[15] =
          d *
          (tmp_22 * m22 +
            tmp_16 * m02 +
            tmp_21 * m12 -
            (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02)))
      return out
    }
  })
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

export function perspective(fov: number, aspect: number, near: number, far: number) {
  const f = Math.tan(Math.PI * 0.5 - 0.5 * degToRad(fov))
  const rangeInverse = 1 / (near - far)
  const out = identity()
  out[0] = f / aspect
  out[5] = f
  out[10] = (near + far) * rangeInverse
  out[11] = -1
  out[14] = near * far * rangeInverse * 2
  out[15] = 0
  return out
}

export function inverse(m: mat4) {
  const m00 = m[0 * 4 + 0]
  const m01 = m[0 * 4 + 1]
  const m02 = m[0 * 4 + 2]
  const m03 = m[0 * 4 + 3]
  const m10 = m[1 * 4 + 0]
  const m11 = m[1 * 4 + 1]
  const m12 = m[1 * 4 + 2]
  const m13 = m[1 * 4 + 3]
  const m20 = m[2 * 4 + 0]
  const m21 = m[2 * 4 + 1]
  const m22 = m[2 * 4 + 2]
  const m23 = m[2 * 4 + 3]
  const m30 = m[3 * 4 + 0]
  const m31 = m[3 * 4 + 1]
  const m32 = m[3 * 4 + 2]
  const m33 = m[3 * 4 + 3]
  const tmp_0 = m22 * m33
  const tmp_1 = m32 * m23
  const tmp_2 = m12 * m33
  const tmp_3 = m32 * m13
  const tmp_4 = m12 * m23
  const tmp_5 = m22 * m13
  const tmp_6 = m02 * m33
  const tmp_7 = m32 * m03
  const tmp_8 = m02 * m23
  const tmp_9 = m22 * m03
  const tmp_10 = m02 * m13
  const tmp_11 = m12 * m03
  const tmp_12 = m20 * m31
  const tmp_13 = m30 * m21
  const tmp_14 = m10 * m31
  const tmp_15 = m30 * m11
  const tmp_16 = m10 * m21
  const tmp_17 = m20 * m11
  const tmp_18 = m00 * m31
  const tmp_19 = m30 * m01
  const tmp_20 = m00 * m21
  const tmp_21 = m20 * m01
  const tmp_22 = m00 * m11
  const tmp_23 = m10 * m01

  const t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31)
  const t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31)
  const t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31)
  const t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21)

  const d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3)

  const out = identity()
  ;(out[0] = d * t0),
    (out[1] = d * t1),
    (out[2] = d * t2),
    (out[3] = d * t3),
    (out[4] =
      d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30))),
    (out[5] =
      d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30))),
    (out[6] =
      d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30))),
    (out[7] =
      d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20))),
    (out[8] =
      d *
      (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33))),
    (out[9] =
      d *
      (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33))),
    (out[10] =
      d *
      (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33))),
    (out[11] =
      d *
      (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23))),
    (out[12] =
      d *
      (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22))),
    (out[13] =
      d *
      (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02))),
    (out[14] =
      d *
      (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12))),
    (out[15] =
      d *
      (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02)))
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

export const lookAt = (cameraPosition: v3, target: v3, up: v3) => {
  const zAxis = normalize(sub(cameraPosition, target))
  const xAxis = normalize(cross(up, zAxis))
  const yAxis = normalize(cross(zAxis, xAxis))
  const out = identity()

  out[0] = xAxis[0]
  out[1] = xAxis[1]
  out[2] = xAxis[2]

  out[4] = yAxis[0]
  out[5] = yAxis[1]
  out[6] = yAxis[2]

  out[8] = zAxis[0]
  out[9] = zAxis[1]
  out[10] = zAxis[2]

  out[12] = cameraPosition[0]
  out[13] = cameraPosition[1]
  out[14] = cameraPosition[2]
  return out
}
