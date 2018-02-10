function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}

function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  } else if (key == '1') {
    ellipse(mouseX, mouseY, diameter+10, diameter+10); 
  } else if (key == '2') {
    ellipse(mouseX, mouseY, diameter+20, diameter+20); 
  } if (key == '3') {
    ellipse(mouseX, mouseY, diameter+30, diameter+30); 
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(251, 99, 126);
  } else if (key == 'G') {
    fill(167, 225, 99);
  } else if (key == 'B') {
    fill(72, 159, 223); 
  } else if (key == 'A') {
    fill(248, 190, 214); 
  } else if (key == 'S') {
    fill(185, 153, 214); 
  } else if (key == 'D') {
    fill(255, 228, 149); 
  } 
}
		
