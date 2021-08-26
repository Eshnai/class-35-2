var ball, database;
var position;


function setup(){
 database=firebase.database();
  createCanvas(500,500);

  ball = createSprite(250,250,10,10);
 ball.shapeColor = "red";
var ballP=database.ref("ball/position");
ballP.on("value",readPositions,showError);


}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}
function readPositions(data){
position=data.val();
ball.x=position.x;
ball.y=postion.y;
}

function showError(){
  console.log("data not recived from the database");
}

function writePosition(x,y){
  database.ref("ball/position").set({
    'x':position.x+x,
    'y':position.y+y
  })

}


