function setup(){ 
  createCanvas(600,600); 
  noLoop(); 
} 

function preload(){
bg = loadImage('image.png')  
}

function draw(){ 
  background(bg,190); 
  strokeWeight(5); 
  translate(width/2,height-5);  
  branch(2); 
} 

function branch(depth){ 
  if (depth < 10) { 
    line(0,0,0,-height/10); 
    { 
      translate(0,-height/10); 
      rotate(random(-0.05,0.05));

      if (random(1.0) < 0.9){   
        rotate(0.2); 
        scale(0.8); 
        
        push(); 
        branch(depth + 1);
        pop(); 
        
        rotate(-0.6); 
        
        push(); 
        branch(depth + 1);  
        pop();       
     } 
      else {
      branch(depth);
      } 
    } 
  }
} 




