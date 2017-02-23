var x = 0;
var ymode = 1;
var speed = 0.5;
var radius = 10;

function setup() {
	createCanvas(700, 400);
}

function draw() {
	translate(width/2, height/2);
	background(50);
	
	if(x >= radius || x <= -radius) {
		speed = -speed;
	}

	var dx = x;
	var dy = ymode * sqrt(abs(radius * radius - x*x));

	console.log(dy);

	if(abs(dy) - speed * speed <= 0) {
		ymode = -ymode;
	}

	x = x + speed;
	
	fill(255);
	ellipse(dx, dy, 10, 10);

}
