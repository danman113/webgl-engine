precision mediump float;
varying vec2 vTextcoord;
uniform sampler2D uImage;
uniform vec2 uImageResolution;
uniform float uImageKernel[9];
uniform float uKernelWeight;

void main () {
  vec2 pixel = vec2(1.0, 1.0) / uImageResolution;
  vec4 colorSum = (
    texture2D(uImage, vTextcoord + pixel * vec2(-1.0, -1.0)) * uImageKernel[0] +
    texture2D(uImage, vTextcoord + pixel * vec2(-1.0, 0.0)) * uImageKernel[1] +
    texture2D(uImage, vTextcoord + pixel * vec2(-1.0, 1.0)) * uImageKernel[2] +
    texture2D(uImage, vTextcoord + pixel * vec2(0.0, -1.0)) * uImageKernel[3] +
    texture2D(uImage, vTextcoord + pixel * vec2(0.0, 0.0)) * uImageKernel[4] +
    texture2D(uImage, vTextcoord + pixel * vec2(0.0, 1.0)) * uImageKernel[5] +
    texture2D(uImage, vTextcoord + pixel * vec2(1.0, -1.0)) * uImageKernel[6] +
    texture2D(uImage, vTextcoord + pixel * vec2(1.0, 0.0)) * uImageKernel[7] +
    texture2D(uImage, vTextcoord + pixel * vec2(1.0, 1.0)) * uImageKernel[8]
  );
  gl_FragColor = vec4((colorSum / uKernelWeight).rgb, 1.0);
}