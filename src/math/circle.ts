import { v2, distanceSquared } from './v2'
export default class Circle {
  position: v2 = v2()
  radius: number
  radiusSquared: number = this.radius * this.radius

  intersectsCircle(circle: Circle) {
    const cr = circle.radius
    return distanceSquared(this.position, circle.position) < this.radiusSquared + cr * cr
  }

  intersectsPoint(pt: v2) {
    return distanceSquared(this.position, pt) < this.radiusSquared
  }
}
