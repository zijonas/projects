function circle() {
	this.posX = 0;
	this.posY = 0;
	this.x = 0;
	this.maxSpeed = 1;
	this.yMode = 1;
	this.radius = 10;
	this.direction = 1;
	var r = random(255);
	var g = random(255);
	var b = random(255);
	var dy;
	var dx;

	this.draw = function () {

//		this.r = map(abs(this.dy), 0, this.radius, 0, 255);
//		this.g = map(abs(this.x), 0, this.radius, 0, 255);
//		this.b = 0;

		if (abs(this.dy) == 0) {
			this.yMode = -this.yMode;
		}

		fill(this.r, this.g, this.b);
		noStroke();
		ellipse(this.posX, this.posY, 10, 10);
		ellipse(this.x + this.posX, this.dy + this.posY, 10, 10);

	}

	this.update = function () {
		this.x = this.dx;

		if (this.x >= this.radius || this.x <= -this.radius) {
			this.direction = -this.direction;
			if (this.x >= this.radius) {
				this.x = this.radius;
			}
			if (this.x <= -this.radius) {
				this.x = -this.radius;
			}
		}

		this.dy = this.yMode * sqrt(abs(this.radius * this.radius - this.x * this.x));
		var speed = map(abs(this.dy), 0, this.radius, 0.0001, this.maxSpeed);
		this.dx = this.x + speed * this.direction;
	}
}
