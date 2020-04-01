precision mediump float;
attribute vec3 aPosition;
varying float vColor;
void main () {
  vColor = aPosition.z;
  vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);
  gl_Position = vec4(pos, 0, 1);
}