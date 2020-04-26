import { v3 } from './../math/v3'
// prettier-ignore
export const SimpleRectangle = new Float32Array([
  0, 0,
  1, 0,
  0, 1, // Left Triangle
  0, 1,
  1, 0,
  1, 1, // Right Triangles
])

export const generateSphere = (width = 10, height = 10, radius = 10) => {
  let vertices: v3[] = []
  const t = (1.0 + Math.sqrt(5.0)) / 2.0
  vertices.push(v3(-1, t, 0))
  vertices.push(v3(1, t, 0))
  vertices.push(v3(-1, -t, 0))
  vertices.push(v3(1, -t, 0))

  vertices.push(v3(0, -1, t))
  vertices.push(v3(0, 1, t))
  vertices.push(v3(0, -1, -t))
  vertices.push(v3(0, 1, -t))

  vertices.push(v3(t, 0, -1))
  vertices.push(v3(t, 0, 1))
  vertices.push(v3(-t, 0, -1))
  vertices.push(v3(-t, 0, 1))
  let faces = []

  // 5 faces around point 0
  faces.push(0, 11, 5)
  faces.push(0, 5, 1)
  faces.push(0, 1, 7)
  faces.push(0, 7, 10)
  faces.push(0, 10, 11)

  // 5 adjacent faces
  faces.push(1, 5, 9)
  faces.push(5, 11, 4)
  faces.push(11, 10, 2)
  faces.push(10, 7, 6)
  faces.push(7, 1, 8)

  // 5 faces around point 3
  faces.push(3, 9, 4)
  faces.push(3, 4, 2)
  faces.push(3, 2, 6)
  faces.push(3, 6, 8)
  faces.push(3, 8, 9)

  // 5 adjacent faces
  faces.push(4, 9, 5)
  faces.push(2, 4, 11)
  faces.push(6, 2, 10)
  faces.push(8, 6, 7)
  faces.push(9, 8, 1)
  faces = faces.map(i => vertices[i]).reduce((prev, vert) => [...prev, ...vert], [])
  return new Float32Array(faces.map(val => val * radius))
}
