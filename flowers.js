
function setup(){
    createCanvas(1000,1000);
    background(200,225,255);
    
    }
    
    function flower(x,y,d,r,g,b){
        noStroke();
        fill(250,225,75);
        ellipse(x,y,d,d);
        fill(r,g,b);
        ellipse(x-50,y,d,d);
        ellipse(x+50,y,d,d);
        ellipse(x-25,y+43,d,d);
        ellipse(x+25,y+43,d,d);
        ellipse(x-25,y-43,d,d);
        ellipse(x+25,y-43,d,d);
    
    }
    
    function mousePressed(){
        if((mouseX>300)&&(mouseX<700)){
            if((mouseY>300)&&(mouseY<700)){
        flower(mouseX,mouseY,random(40,70),
        random(150,230),random(75,150),random(150,200));
    
    }
    }
    }
    