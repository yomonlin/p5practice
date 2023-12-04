// fragmentShader 會跑過範圍內的每一個像素
// 並且決定該像素的顏色

precision mediump float;

varying vec2 vUV;


// 圖片
uniform sampler2D uTex;
uniform sampler2D uDistortTex;

// 每幀時間
uniform float uTime;

// 整體寬高
uniform vec2 uResolution;

void main() {

  float disortValue = texture2D(uDistortTex, vUV).r ;

  vec4 texColor = texture2D(uTex, vUV + vec2(disortValue * 0.04, 0.0));
  gl_FragColor = texColor;
}