var qnt = 100;
var it = [];

function setup() {
	createCanvas(700,400);
	for(var i = 0; i < qnt; i++) {
		it[i] = new Item();
	}
}

function draw() {
//	background(51);
	colision();
	for(var i = 0; i < it.length; i++) {
		it[i].show();
		it[i].update();
	}
}

function colision() {
	for(var i = 0; i < it.length; i++) {
		for(var j = 0; j < it.length; j++) {
			var axi = it[i].x + it[i].isize/2;
			var ayi = it[i].y + it[j].isize/2;
			var axj = it[j].x + it[i].isize/2;
			var ayj = it[j].y + it[j].isize/2;
			var dx = Math.abs(axi - axj);
			var dy = Math.abs(ayi - ayj);
			if(i != j && it[i].alive + it[j].alive > 1 && (dx < (it[i].isize/2+it[j].isize/2) && dy < (it[i].isize/2+it[j].isize/2))){ 
				it[i].alive = 0;
				it[j].alive = 0;
			}
		}
	}
	var aLength = it.length;
	for(var i = aLength - 1; i >= 0; i--) {
		if(it[i].alive == 0) {
			it.splice(i, 1);
		}
	}

}

