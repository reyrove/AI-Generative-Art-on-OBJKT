function preload(){
  bg = loadImage('img.png')
}

function setup() {
  createCanvas(600, 600)
  frameRate(30)
  

  createLoop({
      gif: {fileName: "whispers of the world.gif" },
      noiseRadius: 0.3
  })
}

function draw() {
  background(bg)
  fill(171, 48, 48)
  stroke(171, 48, 48)
  strokeWeight(0.2);
  translate(0, height / 2)
  const distributionFrequency1 = 0.02
  for (let x = 0; x < width; x++) {
      const y = animLoop.noise1D(x * distributionFrequency1) * height / 2
      ellipse(x, y, 5)
  }

  fill('#218C8D')
  stroke(122, 191, 240)
  strokeWeight(0.2);
  translate(0, height/5 )
  const distributionFrequency2 = 0.08
  for (let x = 0; x < width; x++) {
      const y = animLoop.noise1D(x * distributionFrequency2) * height / 2
     rect(x, y/2, 5)
  }

  fill(232, 5, 213)
  stroke(232, 5, 213)
  strokeWeight(0.2);
  translate(0, height/5 )
  const distributionFrequency3 = 0.3
  for (let x = 0; x < width; x++) {
      const y = animLoop.noise1D(x * distributionFrequency3) * height / 2
     ellipse(x, y/4, 7)
  }
}


