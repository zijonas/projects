var v1;
var v2;
var v3;
var v4;
var speed;

function setup() {
	createCanvas(700, 400);
	speed = createVector(0.1, 0.1);
	v1 = createVector(width / 2, height / 2);
	v2 = createVector(100, 100);
	v3 = createVector();
	v4 = createVector();
}

function draw2() {
	background(51);
	fill(255);
	v2 = v2.sub(speed);
	v1 = p5.Vector.add(v1, v2);
	ellipse(v1.x, v1.y, 10, 10);
}

function draw() {
	var force = p5.Vector.sub(v2, v1);
	var d = v2.mag();
	d = constrain(d, 1, 25);
	var g = 50;
	var strength = g / (d * d);
	force.setMag(strength);
	if (d < 20) {
		force.mult(-10);
	}
	v4.add(force);
	background(51);
	fill(255);
	v3.add(v4);
	v3.limit(5);
	v1.add(v3);
	v4.mult(0);
	ellipse(v1.x, v1.y, 12, 12);
}