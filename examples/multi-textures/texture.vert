precision mediump float;
attribute vec2 aPosition;
attribute vec2 aTextcoord;
uniform vec2 uTranslation;
uniform vec2 uScale;
uniform vec2 uRotation;
varying vec2 vTextcoord;

void main () {
  vTextcoord = aTextcoord;
  vec2 scaledPosition = aPosition * uScale;
  vec2 rotatedPosition = vec2(
    scaledPosition.x * uRotation.y + scaledPosition.y * uRotation.x,
    scaledPosition.y * uRotation.y - scaledPosition.x * uRotation.x
  );
  vec2 translatedPosition = rotatedPosition + uTranslation;
  vec2 clipspacePosition = (translatedPosition * 2.0 - 1.0) * vec2(1, -1);
  gl_Position = vec4(clipspacePosition, 0, 1);
}