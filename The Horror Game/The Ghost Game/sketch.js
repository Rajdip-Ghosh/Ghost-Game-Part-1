var boy_1, boy_img, bg_img;
var bg;
var invisibleground;
var boyAnime;


function preload(){
  bg_img = loadImage("horror_background.png");
  boyAnime = loadAnimation("Boy_Running_1.png","Boy_Running_11.png","Boy_Running_12.png","Boy_Running_13.png","Boy_Running_2.png");
}

function setup() {
  createCanvas(800,650);

  bg = createSprite(400,300,800,600);
  bg.addImage(bg_img);
  invisibleground = createSprite(400,620,800,20);
  boy_1 = createSprite(30,570,20,50);
  boy_1.addAnimation("RunningBoy",boyAnime);
  boy_1.scale = 0.3;
  bg.velocityX = -2;
}


function draw() 
{
  background(51);
  if (bg.x<300){
    bg.x = 400;
  }
  drawSprites();
  
 
}

