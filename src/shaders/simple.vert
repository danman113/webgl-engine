attribute vec4 aVertexPosition;
attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying lowp vec4 color;

void main () {
  color = aVertexColor;
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}