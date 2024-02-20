function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);


  setCenter(300, 300);

  polarHeptagons( 20, 200, 300)

  fill(7, 205, 219,120);
  polarEllipses( 80, 200, 200, 50)

  fill(217, 176, 179, 120);
  polarSquares(30, 60, 120)

  fill(219, 7, 177, 120);
  polarTriangles( 80, 100, 50 )

  fill(11, 219, 67, 120)
  polarPentagons(100 ,50, 0)


}
 
