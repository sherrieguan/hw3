strokeWeight(20);
rect(0, 0, 340, 340);

// black top left
for (var i = 40; i <= 170; i = i+40) {
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = 170;
  strokeWeight(20);
  line(startX, startY, endX, endY);
}

// yellow top right
for (var i = 20; i <= 170; i = i+40) {
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
  line(0, 210, 40, 170);
  line(0, 270, 100, 170);
  line(0, 330, 160, 170);
  line(0, 390, 160, 230);


// blue bot right 20, 151, 226
for (var i = 170; i <= 320; i = i+5) {
  var startX = 170;
  var startY = i;
  var endX = 320;
  var endY = i;
  stroke(20, 151, 226);
  strokeWeight(5);
  line(startX, startY, endX, endY);
}
