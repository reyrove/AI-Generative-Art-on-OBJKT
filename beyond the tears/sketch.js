var acceleration = 0.01;
var nDrops = 500;
var rain = [];
var speed = 0.02;

function setup() {
  createCanvas(600, 600);

  frameRate(15);

 	for (i = 0; i < nDrops; i++) {
    rain.push(new Drop());
  }
}


function draw() {
  background(0);

  rain.forEach(function(d) {
    d.drawAndDrop();
  });


  scale(0.75);
  translate(100, -100);
  fill(255);
  stroke(0);
  arc(300, 300, 300, 300, 0, PI);

  fill(0);
  noStroke();
  arc(300, 300, 200, 200, 0, PI);

  fill('red');
  noStroke();
  arc(300, 300, 300, 300, PI, 0);

  fill('orange');
  noStroke();
  arc(300, 300, 250, 250, PI, 0);


  fill('yellow');
  noStroke();
  arc(300, 300, 200, 200, PI, 0);

  fill('green');
  noStroke();
  arc(300, 300, 150, 150, PI, 0);

  fill('blue');
  noStroke();
  arc(300, 300, 100, 100, PI, 0);

  fill('indigo');
  noStroke();
  arc(300, 300, 50, 50, PI, 0);
}

function Drop() {
  this.initX = function() {
    this.x = random() * width/3+width/3;
  };

  this.initY = function() {
    this.y = -random() * height/3+height/2; 
  };

  this.initX();
  this.y = random() * height+height/2;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
    stroke(random(255),random(255), random(255));
    strokeWeight(4);
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
    
  }
    
}

function keyPressed() {
  if (key === 's') {
    saveGif('beyond the tears', 10);
  }
}