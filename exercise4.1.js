size = 30;
widthMult = 4;
heightMult = 4;

function setup(){
    createCanvas(700,700);
    angleMode(DEGREES);
    strokeWeight(3);
    R = random(200);
    G = random(175);
    B = random(225);

    x = 0;
    y = 0;
    countX = 700;
    countY = 700;
   
    puzzle();
        }

function puzzle(){
    background(R-25,G-100,B-50);
    x = width;
    if(countX > 0){
        y = height;
        if(countY > 0){
            currentW = size*floor(random(1,widthMult));
            currentH = size*floor(random(1,heightMult));
            fill(random(R,R+50),random(G,G+25),random(B,B+75));
            rect(x,y,currentW,currentH);
            countY -= currentH;
            countX -= currentW;
        }
        
    }

    /*
    for(x=width;x>-size*widthMult;x-=size){
        for(y=height;y>-size*heightMult;y-=size){
            fill(random(R,R+50),random(G,G+25),random(B,B+75));
            rect(x,y,size*floor(random(1,widthMult)),size*floor(random(1,heightMult)));
        }
    }
    */
}
    

