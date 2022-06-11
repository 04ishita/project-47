var girl , girlAn ,backGround ,coin , coinAn,score,obstacle1,snake,bullet


function preload() {
girlAn = loadAnimation("assets/girl1.png","assets/girl2.png","assets/girl3.png","assets/girl4.png","assets/girl5.png",
"assets/girl6.png","assets/girl7.png","assets/girl8.png","assets/girl9.png","assets/girl10.png")
backImg = loadImage("assets/backGround1.jpg")
coinAn = loadAnimation("assets/coin1.png","assets/coin2.png","assets/coin3.png","assets/coin4.png","assets/coin5.png",
"assets/coin6.png")
bulletImg = loadImage("assets/bullet.png")
}

function setup (){


createCanvas(windowWidth,windowHeight)
backGround=createSprite(width/2,height/2-200)
backGround.addImage(backImg)
backGround.scale = 1.6
girl= createSprite(200,670)
girl.addAnimation("girlRunning",girlAn)
girl.scale= 0.2
//girl.velocityX = 2

}

function draw(){
background(0);

backGround.velocityX = -2

if(backGround.x < width/2-40){
    backGround.x = width/2
}
   
text("your score:", 100,20)

spawnCoin()
spawnBullets()


drawSprites()
}

function spawnCoin(){

if(frameCount%60===0){
coin= createSprite(width,440)
coin.addAnimation("movingCoins ",coinAn)
coin.scale= 0.1
coin.velocityX = -2
}

}

function spawnBullets(){

if(keyDown("space")){
bullet =createSprite(200,670)
bullet.addImage(bulletImg)
bullet.velocityX = 4
bullet.scale=0.1
}





}
