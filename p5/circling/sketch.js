var grp = [];
var n = 10;

function setup() {
	createCanvas(700, 400);
	for (var i = 0; i < n; i++) {
		grp[i] = new circle();
		grp[i].posX = random(width);
		grp[i].posY = random(height);
		grp[i].maxSpeed = random(1, 10);
		grp[i].direction = random(-1, 1) <= 0 ? -1 : 1;
		grp[i].radius = random(10, 100);
		grp[i].dx = random(10, 100);
	}
}

function draw() {
	background(50);
	for (var i = 0; i < grp.length; i++) {
		grp[i].posX += random(-0.5, 0.5);
		grp[i].posY += random(-0.5, 0.5);
		grp[i].update();
		grp[i].draw();
	}
}