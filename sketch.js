//crie as variaveis dos seus personagens aqui
var box;


function preload(){
  //carregue as imagens dos personagens aqui
}

function setup() {
  createCanvas(800,400);
  //crie os sprites aqui
  box = createSprite(200,200,50,80);
  box.shapeColor = "green";

  

}

function draw() {
  background(255,255,255); 
  
  drawSprites();
}
