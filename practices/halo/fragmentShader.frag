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

  // 計算長寬比
  vec2 screenRatio = vec2(u_resolution.x/u_resolution.y,1.0);

  // 把 st 乘上 screenRatio
  // 這樣就可以把長寬比還原
  st *= screenRatio;

  // 把原點轉成畫布中心
  // 取得與畫布邊邊的距離
  // 避免中間的圓因為長寬比而變形
  // 再乘上 screenRatio 來還原
  float length = length(st - (vec2(0.5,0.5) * screenRatio));

  // gl_FragColor 為程式的終點
  // 我們設定 rgba 為與畫布邊邊距離的倒數
  float color = 1.0 / length * 0.1;
  gl_FragColor = vec4(
    color,
    color,
    color ,
    1.0
  );
}