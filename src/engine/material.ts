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

class Material {
	public vertexShader: WebGLShader
	public fragmentShader: WebGLShader
	public program: WebGLProgram

	private compileShader = (src: string, shaderType: ShaderTypes): WebGLShader => {
		const { gl } = this
		const compiledShader: WebGLShader = gl.createShader(shaderType === ShaderTypes.Fragment ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER)
		gl.shaderSource(compiledShader, src)
		gl.compileShader(compiledShader)
		if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
			const error = new Error(gl.getShaderInfoLog(compiledShader))
			gl.deleteShader(compiledShader)
			throw error
		}
		return compiledShader
	}
	
	private initShaderProgram = (vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram => {
		const { gl } = this
		const shaderProgram: WebGLProgram = gl.createProgram()
		gl.attachShader(shaderProgram, vertexShader)
		gl.attachShader(shaderProgram, fragmentShader)
		gl.linkProgram(shaderProgram)

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			const error = new Error(gl.getProgramInfoLog(shaderProgram))
			gl.deleteProgram(shaderProgram)
			throw error
		}

		return shaderProgram
	}
	constructor(public gl: WebGLRenderingContext,  public vertexSource: string, public fragmentSource: string, attributes: string[], uniform: string[]) {
		this.vertexShader = this.compileShader(vertexSource, ShaderTypes.Vertex)
		this.fragmentShader = this.compileShader(fragmentSource, ShaderTypes.Fragment)
		this.program = this.initShaderProgram(this.vertexShader, this.fragmentShader)
	}
}