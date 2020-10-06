function setup() {
  createCanvas(800,400);

  movingRect = createSprite(200,200,80,30);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect.velocityX=5;
  movingRect.velocityY=0.5;
}

function draw() {
  background(255,255,255); 
 // movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green"; 
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

if(fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 && 
  movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 && 
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}

if(fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 && 
  movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 && 
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
  movingRect.velocityX =movingRect.velocityX *(-1) ;
  movingRect.velocityY =movingRect.velocityY *(-1) ;
}


  drawSprites();
}