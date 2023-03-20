function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 360, 10, 100, 1);
    noLoop();
  }
  
  function draw() {
    background(random(250, 360),random(0, 10),random(0,100));
    noStroke();
    drawShape(0, 0, width, height, 100, 4);
  }
  
  function drawShape(x, y, w, h, s, depth) {
    if (depth <= 0) return;
    let hue = random(250, 360);
    let saturation = random(0, 10);
    fill(hue, saturation, s);
    let shapeType = floor(random(4));
    if(shapeType == 1){
        ellipse(x + w / 2, y + h / 2, w, h);
    }
    else if(shapeType == 2){
        rect(x, y, w, h);
    }
    else if(shapeType == 3){
        triangle(x, y + h, x + w / 2, y, x + w, y + h);
    }
    else if(shapeType == 4){
        quad(x, y + h / 2, x + w / 2, y, x + w, y + h / 2, x + w / 2, y + h);
    }

    let numShapes = floor(random(1, 4));
    let shapeWidth = w / numShapes;
    let shapeHeight = h / numShapes;
    for (let i = 0; i < numShapes; i++) {
      let shapeX = x + i * shapeWidth;
      let shapeY = y + i * shapeHeight;
      drawShape(shapeX, shapeY, shapeWidth, shapeHeight, s - 10, depth - 1);
    }
  }
  