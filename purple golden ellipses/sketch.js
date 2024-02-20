
function setup(){
  createCanvas(1080,1080);
  frameRate(10);
}

// the parameter at which x and y depends is usually taken as either t or symbol of theta
let t = 0;
function draw(){
  background([33, 38, 30]);
  translate(width/2,height/2);
  strokeWeight(5);
  //loop for adding 100 lines
  for(let i = 0;i<150;i++){
    
    color1=[random(1)*100+100,random(1)*20+50,random(1)*55+200];
    drawingContext.shadowBlur=5;
    drawingContext.shadowColor=color(color1);
    
    stroke(color1);
    line(x1(t+i),y1(t+i),x2(t+i)+50,y2(t+i)+20);
  }
  t+=0.1;
}
// function to change initial x co-ordinate of the line
function x1(t){
  return sin(2*Math.PI*t/10)*125+sin(2*Math.PI*t/5)*50+sin(2*Math.PI*t/5)*125+sin(2*Math.PI*t/2.5)*200;
}

// function to change initial y co-ordinate of the line
function y1(t){
  return cos(2*Math.PI*t/10)*125+cos(2*Math.PI*t/5)*50+cos(2*Math.PI*t/5)*125+cos(2*Math.PI*t/2.5)*200;
}

// function to change final x co-ordinate of the line
function x2(t){
  return sin(2*Math.PI*t/10)*100+sin(2*Math.PI*t/2.5)*125+sin(2*Math.PI*t/1)*125;
}

// function to change final y co-ordinate of the line
function y2(t){
  return cos(2*Math.PI*t/10)*100+cos(2*Math.PI*t/2.5)*125+cos(2*Math.PI*t/1)*125;
}


function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}