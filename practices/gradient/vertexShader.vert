// vertexShader 會跑過每一個頂點
// 決定形狀

//設定畫面精確度為高
precision highp float;

// 接收 P5.js 傳入的形狀參數
// attribute是一種變數
// 每一幀有多少個錨點 Vertex Shader就要跑多少次
// 而每一次 attribute 變數的數值分別代表每個錨點的位置
attribute vec3 aPosition;

void main() {
  // 建立一個能儲存四個值的錨點
  // 將 aPosition 的三個值當做 positionVec4 的前三個值
  // 第四個值為 1.0
  vec4 positionVec4 = vec4(aPosition, 1.0);

  // shader 坐標系是從 -1 到 1 的系統
  // (0,0)為中
  // (-1,-1)為左下 (1,1)為右上 (-1,1)為左上 (1,-1)為右下
  // 而p5.js 坐標系是從 0 到 1 的系統
  // 這邊把他轉換成 (0,0) 為 左上的座標系
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // gl_Position 是終點
  // 代表每個錨點應該要在哪個位置呈現
  gl_Position = positionVec4;
}