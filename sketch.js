var gameState = "PLAY";
var car;
var road;
var obstacle;
var carImg;
var roadImg;

function preload(){
  carImg = loadImage("carImg.png");
  roadImg = loadImage("roadImg.jpg")
  obstacleImg = loadImage("garbage.png")
}



function setup() {
  createCanvas(800,400);
  road = createSprite(400,200,10,800);
  road.addImage(roadImg);
  road.scale = 1.5;
  car = createSprite(100,200,10,10)
  car.addImage(carImg)
  car.scale = 0.3;
  obstacleGroup = new Group();
}

function draw() {
  background(255,255,255);
  if(gameState === "PLAY"){
    road.velocityX = -25;
    if(road.x < 300){
      road.x = 600
    }
    if(keyDown("W")){
      car.y = car.y-10
    }
    if(keyDown("S")){
      car.y = car.y+10
    }
    spawnObstacle();
    if(obstacleGroup.isTouching(car)){
			gameState = "END"
		}
  }  
  if(gameState === "END"){
    road.velocityX = 0;
    obstacleGroup.velocityX = 0;
  }
  drawSprites();
}
function spawnObstacle(){
  if(frameCount%20 ===0){
    obstacle = createSprite(780,(Math.round(random(50,350))),10,10)
    obstacle.velocityX = -10
    obstacle.addImage(obstacleImg)
    obstacle.scale = 0.40
    obstacle.lifeTime = 700
    obstacleGroup.add(obstacle)
  }
}