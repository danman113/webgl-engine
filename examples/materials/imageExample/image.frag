precision mediump float;
varying vec2 vTextcoord;
uniform vec3 uColor;
uniform sampler2D uImage;

void main () {
  vec4 tex = texture2D(uImage, vTextcoord);
  gl_FragColor = vec4(
    tex.r * max(uColor.r, 0.5), // Half the red depending on the mouse
    tex.g,
    tex.b * max(uColor.b, 0.5), // Half the blue depending on the mouse
    tex.a // Will probably always be one, but in the case that we get a PNG
  );
}