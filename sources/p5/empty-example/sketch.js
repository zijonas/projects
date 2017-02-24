var qnt = 614;
var it = [];

function setup() {
	createCanvas(710,400);
	for(var i = 0; i < qnt; i++) {
		it[i] = new Item();
	}

}

function draw() {
	background(51);
	for(var i = 0; i < qnt; i++) {
		it[i].show();
		it[i].update();
	}
}
