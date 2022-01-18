var climber,door,ghost,tower,spooky;
var climberImg,doorImg,ghostjumping,ghoststanding,towerImg,spooky;
var score;
var PLAY=1;
var END=0;
var gameState=1;
var climber1;
var Path;
var souly;

function preload(){
  
climberImg = loadImage("climber.png");
  
doorImg = loadImage("door.png");
  
ghostjumping = loadImage("ghost-jumping.png");
  
ghoststanding = loadImage("ghost-standing.png");
  
towerImg = loadImage("tower.png");
  
spooky = loadSound("spooky.wav")

SoulImg = loadAnimation(" Soul1.png","Soul2.png");
  
gameOverImg = loadImage("gameOver.png");
  
jewelsImg = loadImage("jewels.jpg");
  
weaponImg = loadImage("weapon.jpeg");

 
}

function setup(){
  
createCanvas(559,600);

tower = createSprite(width/2);
tower.addImage(towerImg);
tower.velocityY = 4;
   
ghost = createSprite(300,150);
ghost.addImage(ghoststanding);
ghost.scale=0.4;
ghost.setCollider("rectangle",0,0,ghost.width/2,ghost.height/2);
ghost.debug = false;


score=0;

climberGroup = new Group();
PatherGroup = new Group(); 
doorGroup = new Group();
soulerGroup = new Group();
casherGroup = new Group();
jewelsGroup = new Group();
necklaceGroup = new Group();
weaponGroup = new Group();
  

  
  
}
  
function draw(){
background(0);
drawSprites();
textSize(20);
fill(255);
text("Score: "+ score, 350,50);                            

if(gameState === PLAY){
ghost.x=World.mouseX;
}
  
if(ghost.isTouching(soulerGroup)){
soulerGroup.destroyEach();
score=score+1 
}  

if(ghost.isTouching(jewelsGroup)){
jewelsGroup.destroyEach();
score=score+2
}  

if(ghost.isTouching(weaponGroup)){
weaponGroup.destroyEach();
score=score-2
} 
  
if(ghost.bounceOff(PatherGroup)){
ghost.velocityY=0; 
  
}
  
  
if(ghost.y > 600){
tower.addImage(gameOverImg);
tower.velocityY=0;
ghost.x=450;
ghost.velocityY = 0;

textSize(18);
fill(255);
text("𝒾 𝓅𝓇𝑒𝒹𝒾𝒸𝓉𝑒𝒹 𝒾𝓉...𝒫𝓇𝑒𝓈𝓈 *𝑅* 𝒻𝑜𝓇 𝒶 𝒻𝑒𝓌 𝓈𝑒𝒸𝑜𝓃𝒹𝓈 𝓉𝑜 𝓇𝑒𝓈𝓉𝒶𝓇𝓉",20,200); 
PatherGroup.destroyEach();
climberGroup.destroyEach();
doorGroup.destroyEach();
jewelsGroup.destroyEach();
weaponGroup.destroyEach();
soulerGroup.destroyEach();

jewelsGroup.setVelocityXEach(0);
weaponGroup.setVelocityXEach(0);
soulerGroup.setVelocityXEach(0);

  

}  

if(score<-20){
tower.addImage(gameOverImg);
tower.velocityY=0;
ghost.x=450;
ghost.velocityY = 0;

textSize(18);
fill(255);
text("𝒾 𝓅𝓇𝑒𝒹𝒾𝒸𝓉𝑒𝒹 𝒾𝓉...𝒫𝓇𝑒𝓈𝓈 *𝑅* 𝒻𝑜𝓇 𝒶 𝒻𝑒𝓌 𝓈𝑒𝒸𝑜𝓃𝒹𝓈 𝓉𝑜 𝓇𝑒𝓈𝓉𝒶𝓇𝓉",20,200); 
PatherGroup.destroyEach();
climberGroup.destroyEach();
doorGroup.destroyEach();
jewelsGroup.destroyEach();
weaponGroup.destroyEach();
soulerGroup.destroyEach();

jewelsGroup.setVelocityXEach(0);
weaponGroup.setVelocityXEach(0);
soulerGroup.setVelocityXEach(0);

  

}  
 
 
climberdoor();  
soul();
restart();
//restaurar fondo (fondo infinito)

if(tower.y > height){
tower.y = height/2 
}
  
if(keyDown("space")){       
ghost.velocityY = -2;
ghost.addImage(ghoststanding);
}
ghost.velocityY = ghost.velocityY + 0.1;
  
if(keyWentDown("space")){
ghost.addImage(ghostjumping);
}}
  

  
function climberdoor(){
 if (frameCount % 60 === 0){  

door = createSprite(300,0,20,15)
door.addImage(doorImg);
door.x = Math.round(random(75,475));
door.velocityY=4
doorGroup.add(door);
climber1 = createSprite(300, 50,20,15)  
climber1.addImage(climberImg);
climber1.x = door.x;    
climber1.velocityY=4
climberGroup.add(climber1)

Path = createSprite(300,60,80,5)
Path.x = climber1.x;
Path.velocityY=4
PatherGroup.add(Path)



 }    
}


function soul(){
if(frameCount%140===0){
souly=createSprite(23,67,35,48);
souly.addAnimation("soulmates",SoulImg);
souly.x = Math.round(random(75,475));
souly.velocityY=4 
soulerGroup.add(souly);
} 

if(frameCount%140===0){
jewels=createSprite(23,67,35,48);
jewels.addImage(jewelsImg);
jewels.x = Math.round(random(75,475));
jewels.velocityY=4 ;
jewelsGroup.add(jewels);
jewels.scale = 0.05;
}

if(frameCount%140===0){
weapon=createSprite(23,67,35,48);
weapon.addImage(weaponImg);
weapon.x = Math.round(random(75,475));
weapon.velocityY=4 ;
weaponGroup.add(weapon);
weapon.scale = 0.05;
}
  
}
function restart(){
if(keyDown("R")){
gameState=PLAY;
tower.addImage(towerImg);
score=0
ghost.velocityY=-2;
ghost.y=550;
if(tower.y > height){
tower.y = height/2 
}
} 
}


