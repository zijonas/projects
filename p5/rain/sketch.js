var drops = [];
var n = 100;

function setup() {
	createCanvas(700, 900);
	
	for(var i = 0; i < n; i++) {
		drops[i] = new Drop();
	}
}

function draw() {
	background(255);
	fill(190,0,255);
	for(var i = 0; i < drops.length; i++) {
		drops[i].update();
		drops[i].show();
	}
}

function Drop() {
	this.aceleration = 10;
	this.drop = createVector(random(width), random(height), random(1, 5));

	this.show = function () {
		ellipse(this.drop.x, this.drop.y, this.drop.z, this.drop.z);
	}

	this.update = function() {
		this.drop.y += this.aceleration - 1.5 * map(this.drop.z, 1, 5, 5, 1);
		this.aceleration *= 1.007;
		if(this.drop.y > height) {
			this.drop.y = 0;
			this.drop.x = random(width);
			this.aceleration = 10;
		}
	}
}
