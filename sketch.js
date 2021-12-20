var box;

function setup() {
  createCanvas(800,400);
  box = createSprite(200,200,50,80);
  box.shapeColor = "green";

  

}

function draw() {
  background(255,255,255); 
  
  drawSprites();
}