size = 30;
widthMult = 4;
heightMult = 4;

function setup(){
    createCanvas(1000,1000);
    angleMode(DEGREES);
    strokeWeight(3);
    R = random(200);
    G = random(175);
    B = random(225);
    x = 0;
    y = 0;

    background(R-25,G-100,B-50);
    
    for(x=width;x>-size*widthMult;x-=size){
        for(y=height;y>-size*heightMult;y-=size){
            
            fill(random(R,R+50),random(G,G+25),random(B,B+75),random(30,100));
            rect(x,y,size*floor(random(1,widthMult)),size*floor(random(1,heightMult)));
        }
    }
        }
    

