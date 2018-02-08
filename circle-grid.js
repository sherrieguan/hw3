for (var x = 20; x <= 340; x = x+30) {
  var startX = 20;
  var startY = x;
  var endX = 20;
  var endY = 20;
  ellipse(startX, startY, endX, endY);
  
  for (var y = 20; y <= 340; y = y+30) {
  var startX = y;
  var startY = x;
  var endX = 20;
  var endY = 20;
  ellipse(startX, startY, endX, endY);
  }
}
