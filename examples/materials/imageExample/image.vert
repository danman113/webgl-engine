precision mediump float;
attribute vec2 aPosition;
attribute vec2 aTextcoord;
varying vec2 vTextcoord;

void main () {
  vTextcoord = aTextcoord;
  vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);
  gl_Position = vec4(pos, 0, 1);
}
