docs_text = "print(‘hello world’);\nX=9"
bruh = """
class Player {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(UP_ARROW)) this.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.y += 5;
  }
}

let player;

function setup() {
  createCanvas(800, 600);
  player = new Player(width / 2, height / 2, 15);
}

function draw() {
  background(220);
  player.move();
  player.show();
}

class Enemy {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r * 2);
  }

  chase(player) {
    let speed = 2;
    let dx = player.x - this.x;
    let dy = player.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    this.x += (dx / distance) * speed;
    this.y += (dy / distance) * speed;
  }
}

let player;
let enemy;
let forestImg;

function preload() {
  forestImg = loadImage('forest.jpg'); // Load the forest image
}

function setup() {
  createCanvas(800, 600);
  player = new Player(width / 2, height / 2, 15);
  enemy = new Enemy(100, 100, 20); // Initialize the enemy object at position (100, 100) with radius 20
}

function draw() {
  background(forestImg); // Set the background to the forest image
  player.move();
  player.show();
  enemy.chase(player); // Make the enemy chase the player
  enemy.show(); // Render the enemy on the canvas
}
"""
def doc_clean(text):
    return (
        text.replace(u"\u2018", "'")
        .replace(u"\u2019", "'")
        .replace(u"\u201C", '"')
        .replace(u"\u201D", '"')
    )
clean = doc_clean(bruh)
print('\n',clean)
