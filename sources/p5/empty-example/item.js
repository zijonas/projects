function Item() {
	this.x = random(width);
	this.y = random(height);
	this.isize = random(3,10);
	this.r = 255;
	this.g = 255;
	this.b = 255;
	this.factx = random(-30,30);
	this.facty = random(-30,30);

	this.show = function() {
		fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.isize, this.isize);
	}

	this.update = function() {
		
		if(this.x + this.isize >= width - this.factx) {
			this.factx = -this.factx;
			this.newColor();
		}

		if(this.x <= -this.factx) {
			this.factx = -this.factx;
			this.newColor();
		}
	
		if(this.y + this.isize >= height - this.facty) {
			this.facty = -this.facty;
			this.newColor();
		}
		
		if(this.y <= -this.facty) {
			this.facty = -this.facty;
			this.newColor();
		}

		this.x += this.factx;
		this.y += this.facty;
	}

	this.newColor = function() {
		this.r = random(0,255);
		this.g = random(0,255);
		this.b = random(0,255);
	}
}
