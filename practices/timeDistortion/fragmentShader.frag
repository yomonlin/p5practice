// fragmentShader 會跑過範圍內的每一個像素
// 並且決定該像素的顏色

precision mediump float;

varying vec2 vUV;

// 底圖
uniform sampler2D uTex;

// 擾動材料圖
uniform sampler2D uDistortTex;

// 每幀時間
uniform float uTime;

void main() {
  float tmpY = fract(vUV.y + uTime*0.1);
  float distortValue = texture2D(uDistortTex, vec2(vUV.x, tmpY)).r;
  vec4 texColor = texture2D(uTex, vUV + vec2(distortValue * 0.04, 0.0));

  gl_FragColor = texColor;
}
