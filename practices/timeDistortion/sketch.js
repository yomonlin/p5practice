let myShader, img, distortTex
let width = window.innerWidth * 0.8
let height = window.innerHeight * 0.8

function preload() {
  myShader = loadShader(
    'vertexShader.vert',
    'fragmentShader.frag'
  )

  // 提前載入
  // 避免未讀取完成的情況發生
  img = loadImage('./imgs/UV_Helper.png')
  distortTex = loadImage('./imgs/LightningPerlinNoise.jpg')
}

function setup() {
  createCanvas(
    width,
    height,
    WEBGL
  )

  shader(myShader)
}

function draw() {
  // uniform 變數每一幀都要設定進去傳送給 shader
  myShader.setUniform('uTex', img)
  myShader.setUniform('uDistortTex', distortTex)
  myShader.setUniform('uTime', frameCount * 0.01)
  rect(0, 0, width, height)
}

function windowResized() {
  resizeCanvas(width, height)
}