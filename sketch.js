var bgImg;
var cat;
var mouse;

function preload() {
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg4=loadAnimation("images/cat4.png");
    mouseImg4=loadAnimation("images/mouse4.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(870,600);
    cat.addAnimation("catSitting",catImg1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseCheese",mouseImg1);
    mouse.scale=0.2;
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImg",catImg4);
        cat.changeAnimation("catLastImg");
        cat.x=300;
        cat.scale=0.2;

        mouse.addAnimation("mouseLastImg",mouseImg4);
        mouse.changeAnimation("mouseLastImg");
    }
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
        
        cat.velocityX = -5;
        cat.addAnimation("catMoving",catImg2);
        cat.changeAnimation("catMoving");
        cat.frameDelay = 25;
    }
    
  //For moving and changing animation write code here


}
