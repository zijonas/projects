var s = 1;
var maxs = 10;
var field = [];
var amount = 500;
var speed = 30;

function setup() {
	createCanvas(700, 400);
	for (var i = 0; i < amount; i++) {
		field[i] = new star();
		field[i].x = random(-width, width);
		field[i].y = random(-height, height);
		field[i].z = random(width);
	}
}

function draw() {
	background(0);
	translate(width / 2, height / 2);
	fill(255);
	noStroke();
	for (var i = 0; i < field.length; i++) {
		field[i].show();
		field[i].update();
	}
}

function star() {
	this.x;
	this.y;
	this.z;
	this.pz;
	this.show = function () {
		var nx = map(this.x / this.z, 0, 1, 0, width);
		var ny = map(this.y / this.z, 0, 1, 0, height);
		var r = map(this.z, 0, width, 5, 0);
		ellipse(nx, ny, r, r);
		var lx = map(this.x / this.pz, 0, 1, 0, width);
		var ly = map(this.y / this.pz, 0, 1, 0, height);
		this.pz = this.z;
		stroke(255);
		line(lx, ly, nx, ny);
	}
	this.update = function () {
		this.z -= speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.pz = this.z;
		}
	}
}