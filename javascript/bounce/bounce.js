window.onload=function() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext('2d');
  pos = document.getElementById("pos");

  setInterval(game, 16);
  gravity = new Vector2d();
  gravity.y = 0.9;
  gravity.x = 0.7;
  ball = new Ball();
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, canvasWidth, canvasHeight);
}

canvasWidth = canvasHeight = 500;

function game() {
  applyForce(ball, gravity);
  ball.draw();
}

function applyForce(obj, force) {
  obj.vector.x += force.x;  
  obj.vector.y += force.y;  
}

function testImpact(obj) {
  if(obj.x + obj.width >= canvasWidth) {
    obj.vector.x *= -1;
    obj.x = canvasWidth - obj.width;
  }
  if(obj.y + obj.heigth >= canvasHeight) {
    obj.vector.y *= -1;
    obj.y = canvasHeight - obj.heigth;
  }
  if(obj.x <= 0) {
    obj.vector.x *= -1;
    obj.x = 0;
  }
  if(obj.y <= 0) {
    obj.vector.y *= -1;
    obj.y = 0;
  }
}

function Ball() {
  this.vector = new Vector2d();
  this.vector.y = 2;
  this.x = 25;
  this.y = 0;
  this.width = 10;
  this.heigth = 10;

  this.draw = () => {
    this.calculate();
    testImpact(this);
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.heigth);
  }

  this.calculate = () => {
    this.x += this.vector.x;
    this.y += this.vector.y;
  }
}

function Vector2d() {
  this.x = 0;
  this.y = 0;

  this.versor = function() {
    let hip = Math.sqrt(Math.pow(co) + Math.pow(ca));
    this.x = x / hip;
    this.y = y / hip;
  }
}
