attribute vec4 aPosition;
attribute vec4 aColor;

uniform mat4 uMatrix;

varying vec4 vColor;

void main() {
  vColor = aColor;
  gl_Position = uMatrix * aPosition;
}