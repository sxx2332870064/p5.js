let diameter = 50;


function setup(){
//happens only once
createCanvas(720,400);
}

function draw(){
    //happens for every frame refresh of the browser(-68/s)
    background(200,200,250);

    
    fill(180,150,200);
    rect(430, 20, 155, 155, 10);
    ellipse(256, 246, 155, 55);
    triangle(350, 375, 378, 20, 400, 375);
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
    
    circle(width/2,height/2,diameter);

    diameter+=1;

    helpCoord();                        
}

function helpCoord(){
    fill(0);
    text(
        '('+floor(mouseX)+','+floor(mouseY)+')', mouseX,mouseY
        );
}