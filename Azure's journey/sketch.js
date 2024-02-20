let colors = ["#FFB84C","#F266AB","#A459D1","#81B214","#C5E898"];
let gridSize=40


function setup() {
  createCanvas(1080, 1080);
  seed=random(500)
  blendMode(MULTIPLY)
}

function draw() {
  noStroke()
  randomSeed(seed)
  clear();
  background('#EC53B0')

   
  for(let x=gridSize; x<=width-gridSize; x+=gridSize){
    for(let y=gridSize; y<=height-gridSize; y+=gridSize){
 
   for(let i=0; i<150; i++){  
      let picker= int(random(1, 8))

      
if(picker==1){
  let xsize= gridSize+ random(gridSize*.25, -gridSize*0.25)
  let ysize= xsize + random(-5, 5)
  
  let filler=color(random(colors))
      let fade= color(255, 0)
      coloring= drawingContext.createRadialGradient(x, y, 0.1, x, y, xsize)
	  coloring.addColorStop(0, filler)
		coloring.addColorStop(1, fade)
		drawingContext.fillStyle= coloring
    
     rect(x, y, xsize, ysize)
  
}
      
if(picker==2){
  let xsize=gridSize+ random(gridSize*.2, -gridSize*0.8)
  let ysize= xsize
  
  let filler=color(random(colors))
      let fade= color(255, 50)
      coloring= drawingContext.createRadialGradient(x, y, 0.1, x, y, xsize)
	  coloring.addColorStop(0, filler)
		coloring.addColorStop(1, fade)
		drawingContext.fillStyle= coloring
  
  push()
  rectMode(CENTER)
  rotate(random(0,2*Math.PI))
  rect(x, y, xsize*2, ysize*4)  
  pop()
}      
  
      
if(picker==3){ 
  let xsize= gridSize+random(-gridSize*0.25,gridSize*0.5)
  let ysize= gridSize+random(-gridSize*0.25,gridSize*0.75)
  
  let filler=color(random(colors))
      let fade= color(255, 30)
      coloring= drawingContext.createRadialGradient(x-xsize/2, y-ysize/2, 0.1, x-xsize/2, y-ysize/2, xsize)
	  coloring.addColorStop(0, filler)
		coloring.addColorStop(1, fade)
		drawingContext.fillStyle= coloring
  
  arc(x-xsize/2, y-ysize/2, xsize, ysize, 0, HALF_PI) 
  
  
}      
  if(picker==4){ 
  let xsize= gridSize+random(-gridSize*0.25,gridSize*0.5)
  let ysize= gridSize+random(-gridSize*0.25,gridSize*0.65)
  
  let filler=color(random(colors))
      let fade= color(255, 50)
      coloring= drawingContext.createRadialGradient(x+xsize/2, y-ysize/2, 0.1, x+xsize/2, y-ysize/2, xsize)
	  coloring.addColorStop(0, filler)
		coloring.addColorStop(1, fade)
		drawingContext.fillStyle= coloring
  
  arc(x+xsize/2, y-ysize/2, xsize, ysize, HALF_PI , PI) 
  
  
}      
  
     
  if(picker==5){ 
  let xsize= gridSize+random(-gridSize*0.25,gridSize*0.75)
  let ysize= gridSize+random(-gridSize*0.25,gridSize*0.5)
  
  let filler=color(random(colors))
      let fade= color(255, 20)
      coloring= drawingContext.createRadialGradient(x-xsize/2, y+ysize/2, 0.1, x-xsize/2, y+ysize/2, xsize)
	  coloring.addColorStop(0, filler)
		coloring.addColorStop(1, fade)
		drawingContext.fillStyle= coloring
  
  arc(x-xsize/2, y+ysize/2, xsize, ysize,  -HALF_PI, 0)   
}           
     
  if(picker==6){ 
  let xsize= gridSize+random(-gridSize*0.25,gridSize*0.65)
  let ysize= gridSize+random(-gridSize*0.25,gridSize*0.75)
  
  let filler=color(random(colors))
      let fade= color(255, 50)
      coloring= drawingContext.createRadialGradient(x+xsize/2, y+ysize/2, 0.1, x+xsize/2, y+ysize/2, xsize)
	  coloring.addColorStop(0, filler)
		coloring.addColorStop(1, fade)
		drawingContext.fillStyle= coloring
  
  arc(x+xsize/2, y+ysize/2, xsize, ysize, PI , PI+HALF_PI)   
}      
     
  
   }     

    }

}     

}
