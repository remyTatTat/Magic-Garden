
function setup() {
  createCanvas(windowWidth,windowHeight)
  frameRate(60)
}

sprouts = []
stems = []
petals = []

function draw() {
  background("lightblue")

  for (let i = 0; i < stems.length; i++) {
    stems[i].display()
    if (stems[i].distance() <= stems[i].length) {
      stems[i].grow()
    } else if (stems[i].check == 0) {
        // console.log("cat")
        petals.push(new Petals(stems[i].x2, stems[i].y2))
        stems[i].check++
    }
  }

  for (let i = 0; i < petals.length; i++) {
    petals[i].display()
    let d = dist(mouseX, mouseY, petals[i].x, petals[i].y)
    if (d >= 150) {
      if (petals[i].speed > 0.75) {
        petals[i].speed *= 0.98
      } else if (petals[i].speed <= 0.75) {
          petals[i].speed = 0.75
        }
    } else if (d <= 150) {
      if (petals[i].speed < 10) {
        petals[i].speed *= 1.05
      } else if (petals[i].speed >= 10) {
        petals[i].speed = 10
      }
    }
  }

  for (let i = 0; i < sprouts.length; i++) {
    sprouts[i].display()
    if (sprouts[i].y < height - 100) {
      sprouts[i].fall()
    } else if (sprouts[i].check == 0) {
        sprouts[i].y = height - 100
        stems.push(new Stem(sprouts[i].x, sprouts[i].y))
        sprouts[i].check++
      }
    if (sprouts[i].y == height - 100) {
      if (sprouts[i].r <= 20) {
        sprouts[i].expand()
      }
    }
  }

  push()
  fill("mediumseagreen")
  noStroke()
  rect(0, height-100, width, 100)
  pop()

}

function mousePressed() {
  sprouts.push(new Seed(mouseX, mouseY))
}
