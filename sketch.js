let myShader
let width = window.innerWidth * 0.8
let height = window.innerHeight * 0.8

function preload() {
  myShader = loadShader(
    'vertexShader.vert',
    'fragmentShader.frag'
  )
}

function setup() {
  createCanvas(
    width,
    height,
    WEBGL
  )
}

function draw() {
  shader(myShader)
  rect(0, 0, width, height)

  // 傳給 shader 的參數
  myShader.setUniform("u_resolution", [windowWidth, windowHeight])
}