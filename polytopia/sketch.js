let gridTopX;
let gridTopY;
const sideLength = 50;

const cubes = [];

function setup() {
  createCanvas(600, 600);
  gridTopX = width / 2;
  gridTopY = height / 2;

  noStroke();

  cubes.push(new Cube(0, 0, 0));

  while (cubes.length < 60) {
    addRandomCube();
  }
}



function draw() {
  background(this.red * .75, this.green * .75, this.blue * .75);

  for (const cube of cubes) {
    cube.draw();
  }
}



function addRandomCube() {

  let cubeAdded = false;

  while (!cubeAdded) {
    const randomCube = random(cubes);

    let newCubeC = randomCube.c;
    let newCubeR = randomCube.r;
    let newCubeZ = randomCube.z;

    const r = random(1);
    if (r < .3) {
      newCubeC++;
    } else if (r < .6) {
      newCubeR++;
    } else {
      newCubeZ++;
    }

    const spotTaken = cubes.some((cube) => {
      return cube.c == newCubeC &&
        cube.r == newCubeR &&
        cube.z == newCubeZ;
    });

    if (!spotTaken) {
      cubes.push(new Cube(newCubeC, newCubeR, newCubeZ));
      cubeAdded = true;
    }
  }
}

class Cube {

  constructor(c, r, z) {
    this.c = c;
    this.r = r;
    this.z = z;
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  draw() {
    const x = gridTopX + (this.c - this.r) * sideLength *
      sqrt(3) / 2;
    const y = gridTopY + (this.c + this.r) * sideLength / 2 -
      (sideLength * this.z);

    const points = [];
    for (let angle = PI / 6; angle < PI * 2; angle += PI / 3) {
      points.push(
        createVector(x + cos(angle) * sideLength,
          y + sin(angle) * sideLength));
    }

    fill(this.red * .75, this.green * .75, this.blue * .75);
    triangle(x, y,x,
      points[5].x, points[5].y,
      points[0].x, points[0].y,
      points[1].x, points[1].y);

    fill(this.red * .9, this.green * .9, this.blue * .9);
    triangle(x, y,y,
      points[1].x, points[1].y,
      points[2].x, points[2].y,
      points[3].x, points[3].y);

    fill(this.red, this.green, this.blue);
    quad(x, y,
      points[3].x, points[3].y,
      points[2].x, points[2].y,
      points[5].x, points[5].y);

      fill(this.red, this.green, this.blue);
    rect(x, y,
      points[3].x, y
      );
  }

  getSortString() {
    return this.z + '.' + this.r + '.' + this.c;
  }
}
