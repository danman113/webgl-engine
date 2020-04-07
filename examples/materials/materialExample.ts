import Material from '../../src/engine/material'
import Engine from '../../src/engine'
export default class MaterialExample {
  material: Material
  constructor(
    public name: string,
    public setup: (gl: WebGLRenderingContext) => Promise<Material>,
    public draw: (gl: WebGLRenderingContext, material: Material, engine: Engine) => void
  ) {}
  async onload(gl: WebGLRenderingContext) {
    this.material = await this.setup(gl)
  }
}
