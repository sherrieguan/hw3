function sherriePatch(x, y) {
  fill(221, 175, 202);
  stroke(238);
  rect(x, y, 100, 100);
  
  // circles
  fill(244, 193, 225);
  for (var i = 90; i >= 10; i = i-10) {
  var startX = x+50;
  var startY = x+50;
  var endX = i;
  var endY = i;
  ellipse(startX, startY, endX, endY);
}
  
  // S drop shadow
  fill(220);
  noStroke();
  rect(x+35, y+20, 40, 10);
  rect(x+65, y+30, 10, 10);
  rect(x+35, y+30, 10, 20);
  rect(x+35, y+50, 40, 10);
  rect(x+65, y+50, 10, 30);
  rect(x+35, y+80, 40, 10);
  rect(x+35, y+70, 10, 10);
    
  // S initial
  fill(197, 180, 227);
  noStroke();
  rect(x+30, y+15, 40, 10);
  rect(x+60, y+25, 10, 10);
  rect(x+30, y+25, 10, 20);
  rect(x+30, y+45, 40, 10);
  rect(x+60, y+45, 10, 30);
  rect(x+30, y+75, 40, 10);
  rect(x+30, y+65, 10, 10);
  
  
  fill(245, 227, 226);
  noStroke();
  ellipse (x+15, y+15, 15, 15);
  ellipse (x+85, y+85, 15, 15);
  ellipse (x+15, y+85, 15, 15);
  ellipse (x+85, y+15, 15, 15);
    
    
}

background(255);
sherriePatch(0,0); // draw patch at upper-left


background(255);
sherriePatch(width-100, height-100); // draw patch at lower-right
