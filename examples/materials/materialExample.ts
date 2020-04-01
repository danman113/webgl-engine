import Material from '../../src/engine/material'
import Engine from '../../src/engine'
export default class MaterialExample {
  material: Material
  constructor(
    public name: string,
    public setup: (gl: WebGLRenderingContext) => Material,
    public draw: (gl: WebGLRenderingContext, material: Material, engine: Engine) => void
  ) {}
  onload(gl: WebGLRenderingContext) {
    this.material = this.setup(gl)
  }
}
