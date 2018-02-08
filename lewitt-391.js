// all black
for (var i = 45; i < 160; i = i+40) {
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = 170;
  strokeWeight(20);
  line(startX, startY, endX, endY);
}

for (var i = 45; i < 160; i = i+40) {
  var startX = 170;
  var startY = i;
  var endX = 320;
  var endY = i;
  line(startX, startY, endX, endY);
}

  line(0, 210, 45, 170);
  line(0, 270, 105, 170);
  line(0, 330, 170, 170);
  line(0, 390, 170, 230);
  line(0, 450, 170, 290);

  line(170, 290, 240, 360);
  line(170, 230, 300, 360);
  line(170, 170, 360, 360);
  line(230, 170, 360, 300);
  line(290, 170, 360, 240);

noFill();
stroke(0);
strokeWeight(30);
rect(0, 0, 340, 340);

strokeWeight(20);
line(170, 0, 170, 340);
line(0, 170, 340, 170);



// black top left
for (var i = 45; i < 160; i = i+40) {
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = 170;
  strokeWeight(20);
  line(startX, startY, endX, endY);
}

// yellow top right
for (var i = 45; i < 160; i = i+40) {
  var startX = 170;
  var startY = i;
  var endX = 320;
  var endY = i;
  stroke(255, 241, 56);
  strokeWeight(20);
  line(startX, startY, endX, endY);
}

// red bot left
  stroke('red');
  strokeWeight(20);
  line(0, 210, 45, 170);
  line(0, 270, 105, 170);
  line(0, 330, 170, 170);
  line(0, 390, 170, 230);
  line(0, 450, 170, 290);


// blue bot right 20, 151, 226
  stroke(20, 151, 226);
  strokeWeight(20);
  line(170, 290, 240, 360);
  line(170, 230, 300, 360);
  line(170, 170, 360, 360);
  line(230, 170, 360, 300);
  line(290, 170, 360, 240);

noFill();
stroke(0);
strokeWeight(30);
rect(0, 0, 340, 340);

strokeWeight(20);
line(170, 0, 170, 340);
line(0, 170, 340, 170);
