var size = 30;
var widthMult = 4;
var heightMult = 4;
var mx = 0;
var my = 0;

function setup(){
    createCanvas(1000,1000);
        }

function draw(){
    let R = random(100,200);
    let G = random(30,175);
    var B = random(150,225);
    background(R-25,G-100,B-50);
    mosaic();
    shape();
    eyes();
 

}

 

function mosaic(){
    
     R = random(100,200);
     G = random(30,175);
     B = random(150,225);

    strokeWeight(3);
    for(mx=width;mx>-size*widthMult;mx-=size){
        for(my=height;my>-size*heightMult;my-=size){
            fill(random(R,R+50),random(G,G+25),random(B,B+75),random(30,100));
            rect(mx,my,size*floor(random(1,widthMult)),size*floor(random(1,heightMult)));

        }
    }
}

 

function shape(offX,offY){
    var lines = 50;
    var innerRad = 200;
    var outerRad = 500;

    R = random(100,200);
    G = random(30,175);
    B = random(150,225);

    fill(R+100,G+100,B+100,150);
    noStroke();
    beginShape();

    for(var i =0; i<lines;i++){
        var x = sin(TWO_PI/lines*i)*innerRad+offX/2;
        var y = cos(TWO_PI/lines*i)*innerRad+offY/2;
        var newRad = map(noise(i/6,millis()/3000,millis()/2000),0,1,innerRad,outerRad);
        var x2 = sin(TWO_PI/lines*i)*newRad+width/2;
        var y2 = cos(TWO_PI/lines*i)*newRad+height/2;

        line(x,y,x2,y2);
        curveVertex(x2,y2);
        }
        endShape(CLOSE);

}

function eyes(){
        fill(255); 
        ellipse(400,400,100,200);
        ellipse(600,400,100,200);
        fill(0); 
        ellipse(400,400,50,100);
        ellipse(600,400,50,100);

}