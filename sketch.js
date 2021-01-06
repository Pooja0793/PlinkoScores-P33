const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var particles = [];
  var plinkos = [];
  var divisions =[];
  var particle;
  var score=0;
  var count=0;
  var gameState="start";


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(width/2,height,width,20);

  for(var k = 0;k<=width;k=k+80){
divisions.push(new Divisions(k,height-100,10,200));
  }

  for(var j=10;j<=width;j=j+40){
  plinkos.push(new Plinko(j,65));
  }

  for(var j=50;j<=width-10;j=j+40){
   plinkos.push(new Plinko(j,165));
  }

  for(var j=10;j<=width;j=j+40){
    plinkos.push(new Plinko(j,265));
   }

   for(var j=50;j<=width-10;j=j+40){
    plinkos.push(new Plinko(j,365));
   }

   for(var j=10;j<=width;j=j+40){
    plinkos.push(new Plinko(j,465));
   }
}

function draw() {
  background("black");  
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 650);
  text(" 500 ", 80, 650);
  text(" 500 ", 160, 650);
  text(" 500 ", 240, 650);
  text(" 100 ", 320, 650);
  text(" 100 ", 400, 650);
  text(" 100 ", 480, 650);
  text(" 200 ", 560, 650);
  text(" 200 ", 640, 650);
  text(" 200 ", 720, 650);
  ground.display();


  for(var k =0;k<divisions.length;k++){
  divisions[k].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
 }

 if ( gameState ==="end") {
    
  textSize(100);
  text("GameOver", 150, 250);
  //return
}

 if(particle!=null){
  particle.display();
  if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 360) 
              {
                  score=score+500;      
                  particle=null;
                  count++;
                  if ( count>= 5) 
                  gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 360 ) 
              {
                    score = score + 100;
                    particle=null;
                    count++;
                    if ( count>= 5) 
                    gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    count++
                    if ( count>= 5)  
                    gameState ="end";

              }      
              
        }
 
}

}

function mouseClicked(){
 
  if(gameState!="end"){
    particle = new Particle(mouseX,10,10);
    console.log("hello")
  }
}