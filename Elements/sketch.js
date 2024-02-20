function setup() {
  createCanvas(988, 988);
  frameRate(15)
}

function draw() { 
  background('#030637');
  setCenter(494,494);
  rotate(frameCount * 2*Math.PI/50);
  noFill();
  stroke('#16FF00');
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color('#16FF00');
  polarEllipse(90,144 , 89);
  polarEllipse(45,144 , 89);
  polarEllipse(-45,144 , 89);
  polarEllipse(180,144 , 89);

  rotate(frameCount * 2*Math.PI/100);
  noFill();
  stroke('#FFFF00');
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color('#FFFF00');
  polarEllipse(90,144 , 89);
  polarEllipse(45,144 , 89);
  polarEllipse(-45,144 , 89);
  polarEllipse(180,144 , 89);

  rotate(frameCount * 2*Math.PI/150);
  noFill();
  stroke('#7EFAFF');
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color('#7EFAFF');
  polarEllipse(90,144 , 89);
  polarEllipse(45,144 , 89);
  polarEllipse(-45,144 , 89);
  polarEllipse(180,144 , 89);

  resetMatrix();
  setCenter(494,494);
  rotate(frameCount * 2*Math.PI/50);
  setCenter(233,233);
  rotate(frameCount * 2*Math.PI/100);
  noFill();
  stroke('#FA26A0');
  strokeWeight(2.5);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color('#FA26A0');
  polarEllipse(90,21 , 13);
  polarEllipse(45,21 , 13);
  polarEllipse(-45,21 , 13);
  polarEllipse(180,21 , 13);

  resetMatrix();
  setCenter(494,494);
  rotate(frameCount * 2*Math.PI/50);
  setCenter(-233,233);
  rotate(frameCount * 2*Math.PI/100);
  noFill();
  stroke('#00FFD1');
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color('#00FFD1');
  polarEllipse(90,21 , 13);
  polarEllipse(45,21 , 13);
  polarEllipse(-45,21 , 13);
  polarEllipse(180,21 , 13);

  resetMatrix();
  setCenter(494,494);
  rotate(frameCount * 2*Math.PI/50);
  setCenter(-233,-233);
  rotate(frameCount * 2*Math.PI/100);
  noFill();
  stroke('#FF0032');
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color('#FF0032');
  polarEllipse(90,21 , 13);
  polarEllipse(45,21 , 13);
  polarEllipse(-45,21 , 13);
  polarEllipse(180,21 , 13);

  resetMatrix();
  setCenter(494,494);
  rotate(frameCount * 2*Math.PI/50);
  setCenter(233,-233);
  rotate(frameCount * 2*Math.PI/100);
  noFill();
  stroke('#F4CE14');
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color('#F4CE14');
  polarEllipse(90,21 , 13);
  polarEllipse(45,21 , 13);
  polarEllipse(-45,21 , 13);
  polarEllipse(180,21 , 13);
}

function keyPressed() {
  if (key === 's') {
    saveGif('Elements',10);
  }
}