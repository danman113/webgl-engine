precision mediump float;
varying vec2 vTextcoord;
uniform sampler2D uImage;

void main () {
  vec4 tex = texture2D(uImage, vTextcoord);
  gl_FragColor = tex;
}