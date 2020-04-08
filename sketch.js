var rainGroup;
var playerBlock;
var rainBlocks;
var enemyGroup;
var enemyBlocks;
var score=0


function setup() {
  createCanvas(800,800);
  playerBlock=createSprite(100,750,60,20);
  rainGroup= createGroup();
  enemyGroup= createGroup();
}

function draw() {
  background(255,255,255);  
  playerBlock.x=World.mouseX;
  text("Score:"+score,50,50);
  text("Only Catch The Blue",50,60);
  
//good block
  if(World.frameCount%100===0){
    var rand = Math.round(random(800,800));
    rainBlocks= createSprite(rand,rand,10,10)
    rainGroup.add(rainBlocks);
    rainBlocks.velocityY=8;
    rainBlocks.shapeColor= "blue";
}
//enemy blocks
if(World.frameCount%70===0){
  var rand = Math.round(random(800,800));
 enemyBlocks= createSprite(rand,rand,10,10)
 enemyGroup.add(enemyBlocks);
  enemyBlocks.velocityY=6;
  enemyBlocks.shapeColor= "red";

}
if(rainGroup.collide(playerBlock)){
  score=score+1;
  rainGroup.destroyEach();
  background(0,255,0);
}
else if(enemyGroup.collide(playerBlock)){
score=score-1
enemyGroup.destroyEach();
   background(255,0,0);

}
  drawSprites();
}

