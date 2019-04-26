pathSize = 5;
window.onmousemove = mousePos;

window.onload=function() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext('2d');
  setInterval(game, 10);

  vector = new Vector();
  pos = document.getElementById("pos");
}
canvasHeight = 900;
canvasWidth = 1700;
centerX = canvasWidth / 2;
centerY = canvasHeight / 2;
mouseY = 0;
mouseX = 0;
hist = [];

function game() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, canvasWidth, canvasHeight);
  
  vector.calculate();

  hist.push(new Path(centerX, centerY));
  //  if(centerY != 0 && centerX!=1) {
  //   ctx.strokeStyle = 'red';
  //   ctx.beginPath();
  //   ctx.moveTo(centerX,centerY);
  //   ctx.lineTo(mouseX, mouseY);
  //   ctx.stroke();
  //testColision();
  hist.forEach((point, i) => {
      point.calculate(vector);
      point.draw(pathSize);
      //  ctx.fillRect((canvasWidth / 2) + vector.x, (canvasHeight / 2) + vector.y, 5,5);
  });
  pos.innerHTML = vector.x + ' ' + vector.y;
}

function testColision() {
  hist.forEach((ele, i) => {
    if(ele.x >= centerX && ele.x <= centerX + 5 && ele.y >= centerY && ele.y <= centerY + 5 && i < hist.length - 15) {
      console.log("Coliding opos "+ centerX + ":" + centerY + " ele " + ele.x + ":" + ele.y);
      hist = [];
      return;
    }
  });
}

function mousePos(ev) {
  ev = ev || window.event;
  mouseX=ev.clientX;
  mouseY=ev.clientY;
}

function Vector() {
  this.x = 0;
  this.y = 0;

  this.calculate = function() {
    let x = mouseX;
    let y = mouseY;

    x = x > canvasWidth ? canvasWidth : x;
    y = y > canvasHeight ? canvasHeight : y;
    x /= canvasWidth;
    y /= canvasHeight;
    if(x < 0.5) {
      x = -0.5 + x;
    } else {
      x = x - 0.5;
    }
    if(y < 0.5) {
      y = -0.5 + y;
    } else {
      y = y - 0.5;
    }
    let ca = x// > y ? y : x;
    let co = y;// > y ? x : y;
    let hip = Math.sqrt(co*co + ca*ca);

    this.x = ca / hip;
    this.y = co / hip;

   // console.log(this.x + ' ' + this.y);
  }
}
