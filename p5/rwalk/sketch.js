var wSize = 10;
var elem = [];
var nElem = 1115;
var motion = 3;

function setup() {
	createCanvas(700, 400);

	for(var i = 0; i < nElem; i++) {
		elem[i] =  new walker();
		elem[i].d = wSize;
	}
}

function draw() {
	background(51);
	
	colision();
//	console.log(elem.length);
	for(var i = 0; i < elem.length; i++) {
		elem[i].update(random(-motion, motion), random(-motion, motion));
		elem[i].show();
	}
}

function colision() {
	for(var i = 0; i < elem.length; i++) {
		for(var j = 0; j < elem.length; j++) {
			var axi = elem[i].x + wSize/2;
			var ayi = elem[i].y + wSize/2;
			var axj = elem[j].x + wSize/2;
			var ayj = elem[j].y + wSize/2;
			var dx = Math.abs(axi - axj);
			var dy = Math.abs(ayi - ayj);
			if(i != j && elem[i].alive + elem[j].alive > 1 && (dx < wSize && dy < wSize)){ 
				elem[i].alive = 0;
				elem[j].alive = 0;
			}
		}
	}
	for(var i = elem.length-1; i >= 0; i--) {
		if(elem[i].alive == 0) {
			elem.splice(i, 1);
		}
	}
}
