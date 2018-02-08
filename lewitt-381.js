// gray top left
for (var i = 20; i <= 170; i = i+5) {
  var startX = 20;
  var startY = i;
  var endX = 170;
  var endY = i;
  stroke(190);
  strokeWeight(5);
  line(startX, startY, endX, endY);
}

// yellow top right
for (var i = 20; i <= 170; i = i+5) {
  var startX = 170;
  var startY = i;
  var endX = 320;
  var endY = i;
  stroke(255, 241, 56);
  strokeWeight(5);
  line(startX, startY, endX, endY);
}

// pink bot left 237, 26, 117
for (var i = 170; i <= 320; i = i+5) {
  var startX = 20;
  var startY = i;
  var endX = 170;
  var endY = i;
  stroke(237, 26, 117);
  strokeWeight(5);
  line(startX, startY, endX, endY);
}

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
