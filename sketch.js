var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(600, 200, 50, 30);
  movingRect = createSprite(200,200,40,80);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

  movingRect.velocityX = 2
}

function draw() {
  background("black");  

// movingRect.x = mouseX;
// movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor  ="red"
    movingRect.velocityX = movingRect.velocityX*(-1)
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";   
  }

  drawSprites();
}
