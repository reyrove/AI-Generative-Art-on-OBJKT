function setup(){
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  strokeWeight(1);
}

function draw(){
  background(211, 240, 237);

  rotateX(-90);
  rotateY(-90);

  for(let r = 0; r <= 1.02; r += 0.02){

  fill(5, 54, 110)
  stroke(10, 255, 27);

    
    beginShape(LINES);   
    for(let theta = -2*180; theta <= 180*15; theta += 0.2){
      let phi = (180/2)*Math.exp(-theta/(8*180));
      let petalCut = 1 - (1/3) * pow((7/4)*pow(1-((3.6*theta%360)/180), 2)-1/4, 2);
      let hangDown = 2*pow(r, 2)*pow(1.3*r-1, 2)*sin(phi);

      if(0 < petalCut * (r * sin(phi)+hangDown*cos(phi))){
        let pX = 250 * petalCut * (r * sin(phi)+hangDown*cos(phi)) * sin(theta);
        let pY = -260 * petalCut * (r * cos(phi)-hangDown*sin(phi));
        let pZ = 260 * petalCut * (r * sin(phi)+hangDown*cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
}
}