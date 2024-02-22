uniform sampler2D uTexture;
uniform float uNbLines;
uniform float uNbColumns;
varying vec2 vTexCoords;

float circle(vec2 uv, float border) {
  float radius = 0.5;
  float dist = radius - distance(uv, vec2(0.5));
  return smoothstep(0.0 , border, dist);
}

void main() {

  vec2 uv = gl_PointCoord;
  uv *= -1.0;
  uv /= vec2(uNbLines, uNbColumns);
  float texOffsetU = vTexCoords.x / uNbColumns;
  float texOffsetV = vTexCoords.y / uNbLines;
  uv += vec2(texOffsetU, texOffsetV);
  uv += vec2(0.5);

  vec4 texture = texture2D(uTexture, uv);

  gl_FragColor = texture;
  if(gl_FragColor.r  <  0.1){
    discard;
  }
  gl_FragColor.a *= circle(uv, 0.2);
}