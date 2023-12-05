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

  vec4 color = vec4(vUV.x, vUV.y, abs(sin(uTime)), 1.0);

  gl_FragColor = color;
}