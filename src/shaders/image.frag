precision mediump float;
varying vec2 vTextcoord;
uniform sampler2D uImage;

void main () {
  gl_FragColor = texture2D(uImage, vTextcoord);
}
