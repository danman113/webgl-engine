precision mediump float;
varying float vColor;
uniform vec3 uColor;
void main () {
  gl_FragColor = vec4(uColor * vColor, 1);
}