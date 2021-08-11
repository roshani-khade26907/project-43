var bg,issImg,scImg;
var scImg1,scImg2,scImg3;
var iss,spacecraft,hasDocked=false;

function preload(){
  bg=loadImage("assets/spacebg.jpg");
  issImg=loadImage("assets/iss.png");
  scImg=loadImage("assets/spacecraft1.png");
  scImg1=loadImage("assets/spacecraft2.png");
  scImg2=loadImage("assets/spacecraft3.png");
  scImg3=loadImage("assets/spacecraft4.png");

}



function setup() {
  createCanvas(1000,700);
  iss=createSprite(500, 350, 50, 50);
  iss.addImage(issImg);

  spacecraft=createSprite(450,500,50,50);
  spacecraft.addImage(scImg);
  spacecraft.scale=0.25
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.x=random(420,450);
    if(keyDown(UP_ARROW)){
      spacecraft.y-=2;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(scImg3);
      spacecraft.x+=2;
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(scImg2);
      spacecraft.x-=2;
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(scImg1)
    }
  }

  if(spacecraft.x<=iss.x-60 && spacecraft.y<=iss.y+90){
    hasDocked=true;
    fill("white")
    textSize(50);
    text("DOCKING SUCCESSFUL",300,100);

  }

  drawSprites();
}