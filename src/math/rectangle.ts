import { v2, sum, sub, scalarMultiply } from './v2'

// A simple AABB
export default class Rectangle {
  constructor(public min: v2, public max: v2) {}
  intersectsBox(that: Rectangle) {
    return !(
      this.max[0] < that.min[0] ||
      this.min[0] > that.max[0] ||
      this.max[1] < that.min[1] ||
      this.min[1] > that.max[1]
    )
  }

  intersectsPoint(point: v2) {
    return !(
      this.max[0] < point[0] ||
      this.min[0] > point[0] ||
      this.max[1] < point[1] ||
      this.min[1] > point[1]
    )
  }
}

class QuadTree {
  // Arbitrary constant to indicate how many elements can be stored in this quad tree node
  static QT_NODE_CAPACITY: number = 4

  // Axis-aligned bounding box stored as a center with half-dimensions
  // to represent the boundaries of this quad tree

  // Points in this quad tree node
  public points: v2[] = []
  private northWest: QuadTree = null
  private northEast: QuadTree = null
  private southWest: QuadTree = null
  private southEast: QuadTree = null
  constructor(public boundary: Rectangle) {}
  insert(point: v2) {
    if (!this.boundary.intersectsPoint(point)) return false // object cannot be added

    // If there is space in this quad tree and if doesn't have subdivisions, add the object here
    if (this.points.length < QuadTree.QT_NODE_CAPACITY && this.northWest == null) {
      this.points.push(point)
      return true
    }

    // Otherwise, subdivide and then add the point to whichever node will accept it
    if (this.northWest == null) this.subdivide()
    //We have to add the points/data contained into this quad array to the new quads if we only want
    //the last node to hold the data

    if (this.northWest.insert(point)) return true
    if (this.northEast.insert(point)) return true
    if (this.southWest.insert(point)) return true
    if (this.southEast.insert(point)) return true

    // Otherwise, the point cannot be inserted for some unknown reason (this should never happen)
    return false
  }
  subdivide() {
    const halfSize = scalarMultiply(sub(this.boundary.max, this.boundary.min), 0.5)
    this.northWest = new QuadTree(
      new Rectangle(this.boundary.min, sum(this.boundary.min, halfSize))
    )
    this.northEast = new QuadTree(
      new Rectangle(
        v2(this.boundary.min.x + halfSize.x, this.boundary.min.y),
        v2(this.boundary.max.x, this.boundary.max.y - halfSize.y)
      )
    )

    this.southEast = new QuadTree(
      new Rectangle(sum(this.boundary.min, halfSize), this.boundary.max)
    )

    this.southWest = new QuadTree(
      new Rectangle(
        v2(this.boundary.min.x, this.boundary.min.y + halfSize.y),
        v2(this.boundary.max.x - halfSize.x, this.boundary.max.y)
      )
    )

    for (let point of this.points) {
      if (this.northWest.insert(point)) continue
      if (this.northEast.insert(point)) continue
      if (this.southWest.insert(point)) continue
      if (this.southEast.insert(point)) continue
    }

    this.points = []
  }

  queryRange(range: Rectangle) {
    let pointsInRange: v2[] = []

    // Automatically abort if the range does not intersect this quad
    if (!this.boundary.intersectsBox(range)) return pointsInRange // empty list

    // Check objects at this quad level
    for (let p = 0; p < this.points.length; p++) {
      if (range.intersectsPoint(this.points[p])) pointsInRange.push(this.points[p])
    }

    // Terminate here, if there are no children
    if (this.northWest === null) return pointsInRange

    // Otherwise, add the points from the children
    pointsInRange = pointsInRange.concat(
      this.northWest.queryRange(range),
      this.northEast.queryRange(range),
      this.southWest.queryRange(range),
      this.southEast.queryRange(range)
    )

    return pointsInRange
  }
}

const a = new QuadTree(new Rectangle(v2(0, 0), v2(50, 50)))
a.insert(v2(1, 1))
a.insert(v2(30, 30))
a.insert(v2(4, 2))
a.insert(v2(30, 0))
a.insert(v2(0, 30))
console.log(a)
console.log(a.queryRange(new Rectangle(v2(0, 0), v2(25, 25))))
