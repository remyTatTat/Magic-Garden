
class Petals {

  constructor(x, y) {
    this.x = x
    this.y = y
    this.z = 0
    this.q = 0
    this.color = color(random(255), random(255), random(255))
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)
    this.speed = 0.75
    this.spin = 0
  }

  display() {
    push()
    translate(this.x, this.y)

    rotate(radians(this.spin))

    rectMode(CENTER)
    fill(this.r, this.g, this.b, 100); stroke("lightblue")
    rect(0, 0, 30, this.q, 10)

    fill(this.r, this.g, this.b, 100); stroke("lightblue")
    rect(0, 0, this.q, 30, 10)

    fill(this.r, this.g, this.b); stroke("lightblue")
    ellipse(0, 0, this.z)

    if (this.z < 22) {
      this.z++
    }

    if (this.q < 70) {
      this.q++
    }
    this.spin += this.speed
    pop()
  }

}
