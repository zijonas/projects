function Ball(vector, x, y, width, height) {
  this.vector = vector;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.draw = () => {
    newPosition();
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  this.newPosition = () => {
    this.x += this.vector.x;
    this.y += this.vector.y;
  }
}
