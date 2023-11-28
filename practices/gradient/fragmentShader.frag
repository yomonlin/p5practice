// fragmentShader 會跑過範圍內的每一個像素
// 並且決定該像素的顏色

//設定畫面精確度為中
precision mediump float;


// 接收 javascript 傳過來的參數
// 在這邊是canvas的長寬
// 要注意這是 vec2
// 所以一次能儲存兩個點
uniform vec2 u_resolution;

void main() {
  // gl_FragCoord 是 Fragment Shader 內建的每個像素座標資料
  // 每個像素的長寬除上 canvas 長寬
  // 可以得到每個像素的單位座標 (0 ~ 1)
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  // gl_FragColor 為程式的終點
  // 我們設定 rgba 的 r 為每個像素的 x 單位座標
  // g 為每個像素的 y 單位座標
  gl_FragColor = vec4(st.xy, 0.0 , 1.0);
}