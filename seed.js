
class Seed {

  constructor(x, y) {
    this.x = x
    this.y = y
    this.r = 5
    this.color = "darkred"
    this.limit = y - 100
    this.check = 0
  }

  display() {
    push(); fill(this.color)
    ellipse(this.x, this.y, this.r)
    pop()
  }

  spawn() {
    this.y *= 0.98
  }

  fall() {
    this.y *= 1.01
  }

  expand() {
    this.r += 0.1
  }

}
