var barco, movimientoB
var mar, marImage
var sol 
var pajaros
function preload(){
  movimientoB = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  marImage = loadImage("sea.png")
  solImage = loadImage("sol.png")
  pajarosImage = loadImage("pajaros.png")

}

function setup(){
  createCanvas(400,400);

  mar = createSprite(170,200,400,10);
  mar.addImage("oceano",marImage);
  mar.scale=(0.3)

  barco = createSprite(160,198,100,100);
  barco.addAnimation("movement", movimientoB);
  barco.scale=(0.3);

  sol = createSprite(350,40,100,100);
  sol.addImage("solpng",solImage)
  sol.scale=(1)

  pajaros = createSprite(150,40,100,100)
  pajaros.addImage("pajaritos",pajarosImage)
  pajaros.scale=(1.3)
 
  mar.velocityX = -4;

}

function draw() {
  background("white");
  console.log(mar.x)
 if (mar.x < 0){
  mar.x = mar.width / 8;

}
  drawSprites();
}