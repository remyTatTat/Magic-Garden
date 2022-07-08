
class Stem {

  constructor(x, y) {
    this.x1 = x
    this.x2 = x
    this.y1 = y
    this.y2 = y
    this.color = "darkgreen"
    this.length = random(50, 350)
    this.check = 0
  }

  display() {
    push(); stroke(this.color)
    line(this.x1, this.y1, this.x2, this.y2)
    pop()
  }

  distance() {
    let d = dist(this.x1, this.y1, this.x2, this.y2)
    return d
  }

  grow() {
    this.y2 *= (0.993)
  }

}
