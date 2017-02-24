var r = rand(0, 255);
var g = rand(0, 255);
var b = rand(0, 255);

function setup() {
	createCanvas(710,400);
}

function draw() {
	background(51);
	fill(240, 100, 100);

	fill(r, g, b);
	rect(width/4, height/4, width/2, height/2);

	if(r > 0) {
		r--;
		g -= 1;
		b -= 1;
	} else {
		r = rand(0,255);
		g = rand(0,255);
		b = rand(0,255);
	}
}
