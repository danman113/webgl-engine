precision mediump float;
attribute vec2 aPosition;
attribute vec2 aTextcoord;
uniform mat3 uMatrix;
varying vec2 vTextcoord;

void main () {
  vTextcoord = aTextcoord;
  vec2 position = (uMatrix * vec3(aPosition, 1.0)).xy;
  vec2 clipspacePosition = (position * 2.0 - 1.0) * vec2(1, -1);
  gl_Position = vec4(clipspacePosition, 0, 1);
}