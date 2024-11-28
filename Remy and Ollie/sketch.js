function setup(){ 
  createCanvas(600, 600); 
  noLoop(); 
} 

function draw(){ 
  background('#1B4242');    
  strokeWeight(2); 
  translate(0,height-10); 
  branch2(1); 
  branch1(1); 
} 

function branch1(depth){ 
  for (var i = 100; i > 0; i-=3) {
    noStroke();
    fill(150 + i, 0, 0, 20);
    ellipse(100, 100, i, i);
  }
  if (depth < 10) { 
    line(0,0,0,-height/10); 
    { 
      translate(0,-height/10);
      rotate(random(-0.3,0.3));  

      if (random(1.0) < 0.2){  
        rotate(0.6);
        scale(0.8); 
        
        push(); 
        branch1(depth + 1);
        pop(); 
        
        rotate(-0.6);
        
        push();
        branch1(depth + 1);   
        pop();      
     } 
      else {
        branch1(depth);
      } 
    } 
  }
}
  function branch2(depth){ 
    for (var i = 100; i > 0; i-=3) {
      noStroke();
      fill(150 + i, 100, 0, 20);
      ellipse(100, 100, i, i);
    }
  if (depth < 10) { 
    line(0,0,0,-height/10); 
    { 
      translate(0,-height/10);
      rotate(random(-0.3,0.3));  

      if (random(1.0) < 0.2){  
        rotate(0.7);
        scale(0.8); 
        
        push(); 
        branch2(depth + 1);
        pop(); 
        
        rotate(-0.7);
        
        push();
        branch2(depth + 1);   
        pop();      
     } 
      else {
        branch2(depth);
      } 
    } 
  }
}
