let myShader, img, distortTex
let width = window.innerWidth * 0.8
let height = window.innerHeight * 0.8
let rippleCenter = [0, 0]

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

  shader(myShader)

}

function draw() {

  myShader.setUniform('uResolution', [width, height])
  myShader.setUniform('uTime', frameCount * 0.01)

  rect(0, 0, width, height)
}
