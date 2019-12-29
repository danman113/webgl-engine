export enum ShaderTypes {
  Fragment = 'FRAGMENT',
  Vertex = 'VERTEX'
}

interface UnifromLocationMap {
  [name: string]: WebGLUniformLocation
}


interface AttributeLocationMap {
  [name: string]: number
}

export default class ShaderProgram {
  public shaderProgram: WebGLProgram
  public gl: WebGLRenderingContext
  public attribLocations: AttributeLocationMap = {}
  public uniformLocations: UnifromLocationMap = {}
  constructor (shaderProgram: WebGLProgram, gl: WebGLRenderingContext) {
    this.shaderProgram = shaderProgram
    this.gl = gl
  }

  initAttribLocation = (name: string) => {
    const { attribLocations, gl, shaderProgram } = this
    if (attribLocations[name] >= 0) {
      throw Error (`Attribute Location has already been set for attribute ${name}`)
    } else {
      console.log(`Set attribute for ${name}`)
      attribLocations[name] = gl.getAttribLocation(shaderProgram, name)
    }
  }

  getAttribLocation  = (name: string) => {
    const { attribLocations } = this
    if (attribLocations[name] >= 0) {
      return attribLocations[name]
    } else {
      throw Error (`Attribute Location ${name} has not been initialized`)
    }
  }

  initUniformLocation = (name: string) => {
    const { uniformLocations, gl, shaderProgram } = this
    if (uniformLocations[name] >= 0) {
      throw Error (`Uniform Location has already been set for Uniform ${name}`)
    } else {
      uniformLocations[name] = gl.getUniformLocation(shaderProgram, name)
    }
  }

  getUniformLocation  = (name: string) => {
    const { uniformLocations, gl } = this
    if (uniformLocations[name] >= 0) {
      return uniformLocations[name]
    } else {
      throw Error (`Uniform Location ${name} has not been initialized`)
    }
  }
}