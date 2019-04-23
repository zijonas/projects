var balls = [];
window.onload = function() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", keyPress);
  setInterval(game, 1000 / 1);
  for(i = 0; i < 1; i++)
    balls[i] = new Ball();
};

cx = cy = 500;
mouseVectorx = 1;
mouseVectory = 0;
vel = 10;
apple = new Apple();

function Apple() {
  this.xPos = Math.trunc(Math.random() * 10) * 50;
  this.yPos = Math.trunc(Math.random() * 10) * 50;
  this.xSize = 10;
  this.ySize = 10;

  this.draw = () => {
    ctx.fillStyle = "green";
    ctx.fillRect(this.xPos, this.yPos, this.xSize, this.ySize);
  }
}


function Ball() {
  this.xPos = 250;
  this.yPos = 250;
  this.xSize = 10;
  this.ySize = 10;

  this.draw = () => {
    ctx.fillStyle = "red";
    ctx.lineTo(this.xPos, this.yPos);
  }
}

function game() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  balls.forEach((ball, i) => {
    ball.xPos -= mouseVectorx * vel;
    ball.yPos -= mouseVectory * vel;

    for(let j = i + 1; j < balls.length; j++){
      if(balls[j].xPos == ball.xPos && balls[j].yPos == ball.yPos && i != j) {
        ctx.fill();
        console.log("HIT!");
      }
    }
//    console.log(ball);
    ball.draw();
  });
  balls.push(new Ball());
  ctx.lineWidth = vel;
  ctx.strokeStyle = 'red';
  ctx.stroke();
}

function keyPress(evt) {
  switch(evt.keyCode) {
    case 37 :
      mouseVectorx = -1;
      mouseVectory = 0;
      break;
    case 38 :
      mouseVectorx = 0;
      mouseVectory = -1;
      break;
    case 39 :
      mouseVectorx = 1;
      mouseVectory = 0;
      break;
    case 40 :
      mouseVectorx = 0;
      mouseVectory = 1;
      break;
  }
}
