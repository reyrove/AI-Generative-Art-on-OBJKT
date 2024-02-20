function setup(){ 
  createCanvas(600, 600); 
  noLoop(); 
} 

function draw(){ 
  background(0);    
  strokeWeight(2); 
  translate(0,height-10); 
  branch1(1); 
  branch2(2); 
  branch3(3);
  branch4(4);
} 

function branch1(depth){ 
  stroke('red');
  if (depth < 20) { 
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
  stroke('cyan');
  if (depth < 15) { 
    line(0,0,0,-height/10);
    { 
      translate(0,-height/10);
      rotate(random(-0.5,0.5));  

      if (random(1.0) < 0.3){ 
        rotate(0.6); 
        scale(0.8); 
        
        push();
        branch2(depth + 1);
        pop(); 
        
        rotate(-0.6); 
        
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

function branch3(depth){ 
  stroke('magenta');
  if (depth < 15) { 
    line(0,0,0,-height/10); 
    { 
      translate(0,-height/10); 
      rotate(random(-0.5,0.5));  

      if (random(1.0) < 0.4){  
        rotate(0.6); 
        scale(0.8); 
        
        push(); 
        branch3(depth + 1); 
        pop();
        
        rotate(-0.6); 
        
        push(); 
        branch3(depth + 1);  
        pop();        
     } 
      else {   
        branch3(depth);
      } 
    } 
  }
} 

function branch4(depth){ 
  stroke('yellow');
  if (depth < 15) { 
    line(0,0,0,-height/10); 
    { 
      translate(0,-height/10); 
      rotate(random(-0.5,0.5));  

      if (random(1.0) < 0.6){   
        rotate(0.6); 
        scale(0.8);
        
        push(); 
        branch4(depth + 1); 
        pop();
        
        rotate(-0.6);
        push(); 
        branch4(depth + 1); 
        pop();        
     } 
      else {   
        branch4(depth);
      } 
    } 
  }
}

