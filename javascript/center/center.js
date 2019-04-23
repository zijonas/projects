var balls = [];
window.onload = function() {
  canvas = document.getElementById('can');
velx = 10;
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", keyPress);
  setInterval(game, 1000 / velx);
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
    ctx.fillRect(this.xPos, this.yPos, this.xSize, this.ySize);
  }
}

function game() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  apple.xPos -= mouseVectorx * vel;
  apple.yPos -= mouseVectory * vel;

  ax = 250;
  ay = 250;
  tx = 0;
  ty = 0;
  balls.forEach((ball, i) => {
    if(i > 0) {
    tx = ball.xPos;
    ty = ball.yPos;
      ball.xPos =ax- mouseVectorx * vel;
      ball.yPos =ay- mouseVectory * vel;
      ax = tx;
      ay = ty;
    }
    ball.draw();
  });
  if(balls[0].xPos == apple.xPos && balls[0].yPos == apple.yPos) {
    let bau = new Ball();
    bau.xPos = balls[balls.length - 1].xPos - mouseVectorx * vel;
    bau.yPos = balls[balls.length - 1].yPos - mouseVectory * vel;
    balls.push(bau);
    apple = new Apple();
  }
  apple.draw();
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
    case 8 :
      vel *= 2;
      break;
   case 13 :
      vel /= 2;
      break;
  }
}
