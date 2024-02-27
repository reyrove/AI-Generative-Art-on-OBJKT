function setup() {
  let c = createCanvas(600, 600)
  p5bezier.initBezier(c)
  noFill()
}

function draw() {
  background(24, 8, 69)

 owl(290, 454);
 owl(360, 450);
  strokeWeight(5)
  stroke('#45FFCA')
  p5bezier.newBezier([
    [0, 10],
    [100, 700],
    [500, -800],
    [800, 1000],
    [10, 300],
  ])
  strokeWeight(5)
  stroke('#FEFFAC')
  p5bezier.newBezier([
    [20, 20],
    [200, 800],
    [600, -900],
    [800, 1000],
    [20, 500],
  ])
  strokeWeight(5)
  stroke('#FFB6D9')
  p5bezier.newBezier([
    [0, 0],
    [900, 1000],
    [500, -800],
    [100, 700],
    [10, 10],
  ])
  strokeWeight(5)
  stroke('#D67BFF')
  p5bezier.newBezier([
    [-100, 0],
    [900, 400],
    [500, -800],
    [200, 700],
    [10, 100],
  ])

  strokeWeight(5)
  stroke();
  p5bezier.newBezier([
    [800, 50],
    [900, 200],
    [200, -600],
    [200, 700],
    [100, 100],
  ])

}

function owl(x, y) {
  push();
  translate(x, y);
  stroke(150, 18, 150);
  strokeWeight(70);
  line(0, -35, 0, -65);
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35);
  ellipse(17.5, -65, 35, 35); 
  arc(0, -65, 70, 70, 0, PI); 
  fill(0);
  ellipse(-14, -65, 8, 8); 
  ellipse(14, -65, 8, 8); 
  quad(0, -58, 4, -51, 0, -44, -4, -51); 
  pop();
 }
 