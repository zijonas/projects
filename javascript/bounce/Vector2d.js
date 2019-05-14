function Vector2d(x, y) {
  this.x = x;
  this.y = y;
  
  this.versor = function() {
    let hip = Math.sqrt(Math.pow(co) + Math.pow(ca));
    this.x = x / hip;
    this.y = y / hip;
  }
}
