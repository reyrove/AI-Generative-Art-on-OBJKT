class Motif {
constructor(a) {
this.a = a;

}


display() {
strokeWeight(4)
let x0, y0, x1, y1, x2, y2, x3, y3;
for (let i = 0; i < 6; i++) {
push();
rotate(i * 60);
translate(cos(30) * this.a * 2, 0);
//line one


beginShape();
x0 = this.a * cos(30);
y0 = this.a * sin(30);
vertex(x0, y0);
x1 = -1 * x0;
y1 = -1 * y0;
vertex(x1, y1);
endShape();
//line two
beginShape();
x2 = x0;
y2 = y1;
vertex(x2, y2);
x3 = x1;
y3 = y0;
vertex(x3, y3);
endShape();
pop();
}
}
}


//scale factor
let a = 28;
let motif = new Motif(a);
let nRow;
let nCol;
let dx, dy;


function setup() {
createCanvas(800, 800);
angleMode(DEGREES);
noLoop();
dx = 6 * a * cos(30);
dy = 4.5 * a;
doff = 0.5 * dx;
//approximate the nRow and nCol values
nCol = ceil(width / dx);
nRow = ceil(height / dy);
}



function draw() {
  background(255)
  drawingContext.shadowBlur = 15
  drawingContext.shadowColor = color('#30E3DF')
  drawingContext.shadowColor = color('#D61355')
  drawingContext.shadowColor = color('#F94A29')
  drawingContext.shadowColor = color('#FCE22A')
for (let c = 0; c < nCol; c++) {
for (let r = 0; r < nRow; r++) {
push();

if (c % 2 === 0 && r % 2 === 0) {
  stroke('#30E3DF'); // even column and even row
} else if (c % 2 === 1 && r % 2 === 0) {
  stroke('#D61355'); // odd column and even row
} else if (c % 2 === 0 && r % 2 === 1) {
  stroke('#F94A29'); // even column and odd row
} else {
  stroke('#FCE22A'); // odd column and odd row
}
if (r % 2 == 0) {
//columns 0,2,4
translate(doff, 0);
}
translate(c*dx,r*dy);
motif.display();
pop();
}
}
}
















/* The provided code defines a class named Motif and uses it to draw a repeating pattern on a canvas in JavaScript. Here's a breakdown:

Motif Class:

    Constructor:
        Takes a parameter a and stores it as a property of the object. This a value is likely used as the base size for the motif's elements.
    display Method:
        This method is responsible for drawing the individual motif element.
        It uses a loop to iterate six times (representing six sides of a hexagon) and performs the following for each iteration:
            push: This saves the current context state.
            rotate: Rotates the canvas by 60 degrees for each iteration, creating the overall hexagonal pattern.
            translate: Moves the origin by a specific distance based on cos(30) and a values, likely positioning the starting point of the motif.
            Line 1:
                Uses beginShape and vertex functions to define a line segment starting at (x0, y0) and ending at (x1, y1). The coordinates are calculated using trigonometric functions (cos(30), sin(30)) and a value, likely forming the first side of the motif.
            Line 2:
                Creates another line segment using beginShape and vertex with points (x2, y2) and (x3, y3). These points reuse the previously calculated values (x0, y0, x1, and y1), likely forming the second side of the motif.
            pop: Restores the context state to its previous state after drawing the element.

Main Script:

    Variables:
        a: The base size for the motif, set to 24.
        motif: An instance of the Motif class created with the a value.
        nCol, nRow: Variables to store the number of columns and rows in the pattern (calculated later).
        dx, dy: Variables to store the horizontal and vertical spacing between motifs (calculated based on a and angles).
        doff: An offset value used in positioning motifs in even rows (calculated based on dx).
    setup function:
        Creates an 800x800 canvas.
        Sets the angleMode to degrees for easier understanding of rotation angles.
        Disables stroke and fill styles (drawing hollow lines).
        Disables automatic looping of the draw function.
        Calculates dx based on a and cos(30), likely representing the horizontal distance between motifs.
        Calculates dy based on a and a constant factor (4.5), likely representing the vertical distance between motifs.
        Calculates doff as half of dx, used for adjusting positioning in even rows.
        Estimates the number of columns (nCol) and rows (nRow) by dividing the canvas width and height by the calculated spacings (dx and dy), using the ceil function to round up to the nearest whole number.
    draw function:
        Iterates through nCol and nRow to draw the motifs in a grid-like pattern.
        The inner loop iterates through rows and performs the following:
            push: Saves the current context state.
            Row offset: If the current row (r) is even (0, 2, 4, etc.), it translates the context by doff to the right, likely used to adjust the positioning for even and odd rows.
            Translate the context by c * dx and r * dy to position the motif at the current grid location (column c and row r).
            Calls the motif.display() method to draw the individual motif element at its specific location.
            pop: Restores the context state after drawing the motif.

Overall, the code utilizes the Motif class to draw a repeating hexagonal pattern on the canvas, with specific spacing and adjustments for even and odd rows.
*/