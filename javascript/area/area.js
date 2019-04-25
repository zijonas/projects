window.onmousemove = mousePos;

window.onload=function() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext('2d');
  setInterval(game, 1);

  vector = new Vector();

  pos = document.getElementById("pos");
}
canvasHeight = 900;
canvasWidth = 1700;
oposX = canvasWidth / 2;
oposY = canvasHeight / 2;
posY = 0;
posX = 0;
hist = [];

function game() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, canvasWidth, canvasHeight);
  vector.calculate();

  hist.push({ x : oposX, y : oposY});
  //  if(oposY != 0 && oposX!=1) {
  //   ctx.strokeStyle = 'red';
  //   ctx.beginPath();
  //   ctx.moveTo(oposX,oposY);
  //   ctx.lineTo(posX, posY);
  //   ctx.stroke();
  //testColision();
  hist.forEach((point, i) => {
      point.x -= vector.x;
      point.y -= vector.y;
      ctx.fillRect(point.x,point.y, 5,5);
      ctx.fillStyle = 'red';
      //  ctx.fillRect((canvasWidth / 2) + vector.x, (canvasHeight / 2) + vector.y, 5,5);
  });
  pos.innerHTML = vector.x + ' ' + vector.y;
}

function testColision() {
  hist.forEach((ele, i) => {
    if(ele.x >= oposX && ele.x <= oposX + 5 && ele.y >= oposY && ele.y <= oposY + 5 && i < hist.length - 15) {
      console.log("Coliding opos "+ oposX + ":" + oposY + " ele " + ele.x + ":" + ele.y);
      hist = [];
      return;
    }
  });
}

function mousePos(ev) {
  ev = ev || window.event;
  posX=ev.clientX;
  posY=ev.clientY;
}

function Vector() {
  this.x = 0;
  this.y = 0;

  this.calculate = function() {
    let x = posX;
    let y = posY;

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
