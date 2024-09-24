function setup() {
createCanvas(500, 800);
  background("rgb(172,65,189)");
  }
function draw() { 
  stroke("#2D24AF");
  fill(0);
if (mouseIsPressed) {
  triangle(100,300,200);
    triangle(mouseX, mouseY, 10, 15);
  }
  
}
