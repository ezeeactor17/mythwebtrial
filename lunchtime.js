function setup() {
  createCanvas(400, 400, WEBGL);
  describe('a rotating #FFFFFF cone');
}

function draw() {
  background(200);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);
  cone(80, 140);
}