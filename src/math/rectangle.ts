import { v2 } from './v2'

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
}
