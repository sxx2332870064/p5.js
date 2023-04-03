let r1, r2, r3, r4, a,R,G,B;

function setup() {
  createCanvas(400, 400);
  r1 = 100;
  r2 = 75;
  r3 = 50;
  r4 = 25;
  a = 0;
  R = random(200);
  G = random(175);
  B = random(225);

  background(220);
  geometrics();
  geometrics();
  geometrics();

}

function geometrics(){
  x = floor(random(50,200));
  y = floor(random(50,200));
  fill(random(R-50,R+50),random(G-50,G+25),random(B-50,B+75));
  rect(x,y,random(0,400),random(0,400));
}

function circles() {
  translate(width/2, height/2);
  
  let x1 = r1 * cos(a);
  let y1 = r1 * sin(a);
  let x2 = r2 * cos(2*a);
  let y2 = r2 * sin(2*a);
  let x3 = r3 * cos(3*a);
  let y3 = r3 * sin(3*a);
  let x4 = r4 * cos(4*a);
  let y4 = r4 * sin(4*a);
  
  strokeWeight(2);
  stroke(255, 0, 0);
  noFill();
  ellipse(0, 0, r1*2, r1*2);
  ellipse(x1, y1, r2*2, r2*2);
  ellipse(x2+x1, y2+y1, r3*2, r3*2);
  ellipse(x3+x2+x1, y3+y2+y1, r4*2, r4*2);
  
  a += 0.01;
}


