var canvas, backgroundImage;

var gameState = 0;
var player;
var enemy;
var wall1;

function preload(){
  maze = loadImage("maze.jpg");
  playerImg = loadImage("player.png");
  enemy = loadImage("enemy.jpg");
}
  function setup(){
  canvas = createCanvas(displayWidth - 100, displayHeight-30);
player = createSprite(450, 270, 50, 50);
 player.addImage(playerImg);
 player.scale = 0.25;
 maze.scale = 1.5;
 wall1= createSprite(600,20,1000,20);
 wall2 = createSprite(1045,310,20,515);
 wall3 = createSprite(600,625,1000,20);
 wall4 = createSprite(190,360,20,515);
 wall5 = createSprite(225,85,120,20);
 wall6 = createSprite(450,60,20,70);
 wall7 = createSprite(620,90,20,120);
 wall8 = createSprite(795,90,20,120);
 wall9 = createSprite(410,85,120,20);
 wall10 = createSprite(1010,140,120,20);
 wall11= createSprite(700,205,700,20);
 wall12 = createSprite(705,130,20,110);
 wall13 = createSprite(1010,260,120,20); 
 wall14 = createSprite(920,80,120,20); 
 wall15 = createSprite(880,190,20,230);
 wall16 = createSprite(875,325,200,20); 
 wall17 = createSprite(745,265,120,20); 
 wall18 = createSprite(705,320,20,110);
 wall19 = createSprite(890,385,400,20); 
 wall20 = createSprite(530,110,20,70);
 wall21 = createSprite(410,145,200,20);
 wall22 = createSprite(275,200,20,130);
 wall23 = createSprite(455,265,290,20);
 wall24 = createSprite(620,300,20,70); 
 wall25 = createSprite(415,325,370,20);
 wall26 = createSprite(320,385,120,20);
 wall27 = createSprite(365,500,20,200);
 wall28 = createSprite(455,445,180,20);
 wall29 = createSprite(315,505,110,20);
 wall30 = createSprite(495,565,270,20);
 wall31 = createSprite(225,445,120,20);
 wall32 = createSprite(225,565,120,20);
 wall33 = createSprite(540,385,190,20);
 wall34 = createSprite(795,445,360,20);
 wall35 = createSprite(620,505,340,20);
 wall36 = createSprite(705,565,20,110);
 wall37 = createSprite(875,500,20,130);
 wall38 = createSprite(1010,505,250,20);
 wall39 = createSprite(960,585,20,60);
 wall40 = createSprite(835,565,100,20);
 wall41 = createSprite(620,420,20,70);  
 }

  function draw() {

  background("orange");
  image(maze,20,-100,1200,900);
  if(keyDown("UP_ARROW")){
    player.y =1.25;
  }  
  if(keyDown("DOWN_ARROW")){
    player.y =-1.25;
  }  
  if(keyDown("RIGHT_ARROW")){
    player.x =1.25;
  }  
  if(keyDown("LEFT_ARROW")){
    player.x =-1.25;
  }  
  drawSprites();
}