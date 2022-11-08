class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // update the size of the element we render
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  // render the element on the screen
  // by default the shape will be a point/circle
  show() {
    stroke(255);
    strokeWeight(25);
    point(this.x, this.y);
  }
}

class Box extends Particle {
  constructor(x, y) {
    super(x, y); //继承父类中的参数和方法
    this.bright = random(255);
    this.r = 10;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

class Box2 extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 20;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    circle(this.x, this.y, this.r);
  }
}