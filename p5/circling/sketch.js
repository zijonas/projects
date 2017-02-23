var x = 10;
var ymode = 1;
var direction = 1;
var radius = 100;

function setup() {
	createCanvas(700, 400);
	background(50);
}

function draw() {
//	translate(width/2, height/2);
	
	
	if(x >= radius || x <= -radius) {
		direction = -direction;
		if(x >= radius) {
			x = radius;
		}
		if(x <= -radius) {
			x = -radius;
		}
	}

	var dy = ymode * sqrt(abs(radius * radius - x*x));

	
	var speed = map(abs(dy), 0, radius, 0.1, 0.9);
	
	var r = map(abs(dy), 0, radius, 0, 255);
	var g = map(abs(x), 0, radius, 0, 255);
	var b = r * g / 128;
	
	if(abs(dy) == 0) {
		ymode = -ymode;
	}
	
	fill(r, g, b);
	noStroke();
	ellipse(x, dy, 10, 10);

	x = x + speed * direction;
}
