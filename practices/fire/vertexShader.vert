// vertexShader 會跑過每一個頂點
// 決定形狀

//設定畫面精確度為高
precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vUV;

void main() {
  vUV = aTexCoord;

  // ㄚ憲救援
  // 配合 texture2D 的座標方向
  // Y 軸坐標需要做轉換
  vUV.y = abs(vUV.y - 1.0);

  vec4 position = vec4(aPosition, 1.0);
  position.xy = position.xy * 2.0 - 1.0;

  gl_Position = position;
}