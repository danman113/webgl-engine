precision mediump float;
attribute vec2 aPosition;
attribute vec2 aTextcoord;
varying vec2 vTextcoord;

void main () {
  vTextcoord = aTextcoord;
  // Moving from a -1 => 1 to 0 => 1
  vec2 pos = (aPosition * 2.0 - 1.0) * vec2(1, -1);
  gl_Position = vec4(pos, 0, 1);
}