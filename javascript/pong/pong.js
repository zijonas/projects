var balls = [];

window.onload = function() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", keyPress);
  document.onmousemove = mouseMove;
  maxBounces = document.getElementById('maxbounces');
  bounces = document.getElementById('bounces');
  setInterval(game, 1000 / 100);
  for(i = 0; i < 1; i++)
    balls[i] = new Ball();

  raquet = new Raquet();
};

cx = cy = 500;
mouseVector = new Vector2d();

maxBounce = 0;
bounce = 0;

function writePlacar() {
  maxBounces.textContent = maxBounce;
  bounces.textContent = bounce;
}

function Ball() {
  this.vel = Math.random() * 3;
  this.xPos = Math.random() * cx;
  this.yPos = 0;
  this.xSize = 5;
  this.ySize = 5;
  this.vector;

  this.vector.newValues(() => { return mouseVector });

  this.draw = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(this.xPos, this.yPos, this.xSize, this.ySize);
  }

  this.position = () => {
    this.xPos += this.vector.getX * vel;
    this.yPos += this.vector.getY * vel;
  }
}

function Raquet() {
  this.xVel = 1;
  this.yVel = 0;
  this.xPos = Math.random() * cx;
  this.yPos = 450;
  this.xSize = 50;
  this.ySize = 5;

  this.draw = () => {
    ctx.fillStyle = "green";
    ctx.fillRect(this.xPos, this.yPos, this.xSize, this.ySize);
  }

  this.position = () => {
    this.xPos += this.xVel;
    this.yPos += this.yVel;
  }
}

function game() {
  let newPos = mouseVector.x > 500 - raquet.xSize / 2 ? 500 - raquet.xSize / 2 : mouseVector.x
  newPos = newPos < raquet.xSize / 2 ? raquet.xSize / 2 : newPos;
  raquet.xPos = newPos - raquet.xSize / 2;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  raquet.position();

  balls.forEach((ball, i) => {
    ball.position();
    if (ball.yPos + ball.ySize >= raquet.yPos && ball.yPos <= raquet.yPos + ball.yVel && ball.xPos + ball.xSize >= raquet.xPos && ball.xPos <= raquet.xPos + raquet.xSize) {
      ball.Vel++;
      ball.yVel *= -1;
      ball.yPos = raquet.yPos - raquet.ySize;
      bounce++;
    }
    if (ball.xPos > cx || ball.xPos < 0) {
      ball.xVel *= -1;
    }
    if (ball.yPos < 0) {
      ball.yVel *= -1;
    }
    if (ball.yPos > cy) {
      // balls.splice(i,1);
      ball.yVel = Math.random() * 3;
      ball.xPos = Math.random() * cx;
      ball.yPos = 0;
      maxBounce = bounce > maxBounce ? bounce : maxBounce;
      bounce = 0;
    }
    ball.draw();
  });
  raquet.draw();

  writePlacar();
}

function mouseMove(evt) {
  mouseVector.x = evt.clientX;
  mouseVector.y = evt.clientY;
}

function Vector2d() {
  this.x = 0;
  this.y = 0;

  //this.getX = () => return this.x;
  //this.getY = () => return this.y;

  function getVersor() {
    let hip = Math.sqrt(Math.pow(this.x) + Math.pow(this.y));
    let versor = new Vector2d();
    versor.x = this.x / hip;
    versor.y = this.y / hip;
    return versor; 
  };

  function newValues(callback){
    let vector = callback();
    this.x = vector.x;
    this.y = vector.y;
  }
}
