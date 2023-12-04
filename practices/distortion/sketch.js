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

  // 把圖片當作參數傳給 shader
  shader(myShader)

  myShader.setUniform('uTex', img)
  myShader.setUniform('uDistortTex', distortTex)
  myShader.setUniform('uResolution', [width, height])
}

function draw() {
  myShader.setUniform('uTime', frameCount * 0.01)


  rect(0, 0, width, height)
}