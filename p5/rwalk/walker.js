function walker() {
	this.x = random(width);
	this.y = random(height);
	this.d = 5;
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);
	this.alive = 1;

	this.show = function() {
		if(this.alive == 1) {
			fill(this.r, this.g, this.b);
			rect(this.x, this.y, this.d, this.d);
		}
	}

	this.update = function(ix, iy) {
		if(this.x + ix > 0 && this.x + ix < width) {
			this.x += ix;
		}
		if(this.y + iy > 0 && this.y + iy < height) {
			this.y += iy;
		}
	}
}
