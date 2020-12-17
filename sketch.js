
var monkey , monkey_running;
var banana ,bananaimg, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;
var time=0;
var bgrp;
var ogrp;
var PLAY=1;
var END=0;
var state=PLAY;
var jungle;
var m1img;
var lives=5;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");  
  
  bananaimg = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  jungleimg=loadImage("jungle.jpg");
  m1img=loadAnimation("sprite_0.png");
 
}



function setup() {
 createCanvas(500,400);
  jungle=createSprite(250,200,1000,400);
  jungle.addAnimation("jungle",jungleimg);
  jungle.velocityX=-5;
 
  
  
  monkey=createSprite(80,310,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.addAnimation("stop",m1img);
  monkey.scale=0.15;
  
  
  ground=createSprite(400,370,1000,20);
  ground.velocityX=-10;
  ground.visible=false;
 
 bgrp = new Group();
 ogrp = new Group();
 
}


function draw() {
  background("white");
  time=time+1;
  rand=Math.round(random(200,100));
   
  

  
  if (jungle.x<0){
    jungle.x = jungle.width/2;
  }
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  
  if(state==PLAY){
 spawnbananas();
 spawnobstacles();
  move();
    sizes();
 
 
   monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
 drawSprites() ;
        stroke("white");
  textSize(20);
  fill("black");
  text("BANANAS:"+score,200,20);
     stroke("white");
  textSize(20);
  fill("black");
  text("LIVES LEFT:"+lives,200,40);
  
  
  
  }
  
if(monkey.isTouching(bgrp)){
  score=score+2;
  bgrp.destroyEach();
}
  
  if(monkey.isTouching(ogrp)){

 
    ogrp.destroyEach();
    score=score-1;
    lives=lives-1;
    monkey.scale=0.12;
    
    
  }
  
  if(lives==0){
   state=END;
    
  }
  if(state==END){
     ogrp.velocityX=0;
    bgrp.velocityX=0;
    ground.velocityX=0;
    monkey.changeAnimation("stop");
  score="GAME OVER";
    lives=0;
    textSize(20);
    fill("red");
    stroke("yellow")
    text("GAME OVER!!YOUR LIVES ARE OVER!!",50,200);
    score=0;
  }
  
  
}



function spawnbananas(){
    if(frameCount%46==0){
     banana = createSprite(600,rand,20,20);
     banana.velocityX=-10;
     banana.addImage(bananaimg); 
     banana.scale=0.15;
    banana.lifetime=-(600/banana.velocityX);
       bgrp.add(banana);
    } 
   // bgrp.add(banana);
}

function spawnobstacles(){
  if(frameCount%70==0){
     obstacle = createSprite(400,320,20,20);
     obstacle .velocityX=-10;
     obstacle .addImage(obstaceImage); 
     obstacle .scale=0.2;
    obstacle .lifetime=-(600/obstacle .velocityX);
    ogrp.add(obstacle);
    } 
   
}
function move(){
   
  if(keyDown("space")&&(monkey.y<330)&&(monkey.y>260)&&(monkey.scale=0.15)) {
    monkey.velocityY = -18;
  
    
  }  
}

function sizes(){
  switch(score){
    case 5 : monkey.scale=0.17;
      break;
      case 10 : monkey.scale=0.18;
    break;
    case 15 : monkey.scale=0.19;
      break;
      case 20 :monkey.scale=0.2;
  }
}







