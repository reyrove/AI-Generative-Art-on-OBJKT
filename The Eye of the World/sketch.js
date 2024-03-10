function setup() {
  createCanvas(600, 600);
  strokeWeight(0.1)
}

function draw() {
  background('#EEF5FF');
  setCenter(300,300)

  fill('#FFF78A');
  polarHexagons( 10, 70, 190);

  fill('#FFE382');
  polarHexagons( 10, 60, 190);

  fill('#FFC47E');
  polarHexagons( 10,50, 190);

  fill('#FFAD84');
  polarHexagons( 10,40, 190);

  fill('#FFF78A');
  polarHexagons( 10, 30, 190);

  fill('#FFE382');
  polarHexagons( 10, 20, 190);

  fill('#FFC47E');
  polarHexagons( 10, 10, 190);

  fill(255);
  circle(0,0,90);

  fill(0);
  circle(0,0,50);

  fill('#D6D46D');
  polarPolygons(60, 6, 60, 100);

  fill('#F4DFB6');
  polarPolygons(30, 9, 50, 100);

  fill('#DE8F5F');
  polarPolygons(30, 9, 40, 100);

  fill('#9A4444');
  polarPolygons(30, 9, 30, 100);

  fill('#860A35');
  polarPolygons(30, 9, 20, 100);

  fill('#F3B664');
  polarPolygons(30, 9, 10, 100);



}
