window.onload=function() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext('2d');
  pos = document.getElementById("pos");

  gravity = new Vector2d(0, -1);
  ball = new Ball(new Vector2d(0, 1), 250, 250, 10, 10);
  setInterval(game, 100);
}

canvasWidth = canvasHeight = 500;

function game() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  applyForce(ball, gravity);
  ball.draw();
}

function colisions(objects) {
  objects.forEach((element, index) => {
    if(this.x >= 

function applyForce(object, force) {
  ball.y -= force.y; 
}


