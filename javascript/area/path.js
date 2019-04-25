function Path () {
  this.x;
  this.y;

  this.draw = (size) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, size, size);
  }

  this.calculate = (vector) => {
    this.x += vector.x;
    this.y += vector.y;
  }
}
