var r = Math.random(0, 255);
var g = Math.random(0, 255);
var b = Math.random(0, 255);

var x = 10, y = 0;
var rSize = 10;
var fact = 9;
var incX = fact;
var incY = fact;

function setup() {
	createCanvas(710,400);
}

function draw() {
	background(51);
	fill(240, 100, 100);

	fill(r, g, b);
	rect(x, y, rSize, rSize);

	if(x + rSize >= width - fact) {
		incX = -fact;
		newColor();
	}
	if(x <= fact) {
		incX = fact;
		newColor();
	}
	
	if(y + rSize >= height - fact) {
		incY = -fact;
		newColor();
	}
	if(y <= fact) {
		incY = fact;
		newColor();
	}
	x += incX;
	y += incY;
}

function newColor() {
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
}
