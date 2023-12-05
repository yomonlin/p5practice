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

  float timer = mod(uTime, 1.0);

  float tempUVx = mod(vUV.x + uTime,1.0);

  vec4 texColor = texture2D(uTex, vec2(tempUVx, vUV.y));

  //vec4 color = vec4(tempUV.x, tempUV.y, 0.0, 1.0);

  //color = vec4(colorR, texColor.g, 1.0, texColor.a);
  // gl_FragColor.a = 1.0;
  // gl_FragColor.b = color.b;
  // gl_FragColor.r = texColor.r;
  // gl_FragColor.g = color.g;

  gl_FragColor= texColor;

}