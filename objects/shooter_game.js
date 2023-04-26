class Bullet {
  constructor(x,y,r,speed){
    this.x = x
    this.y = y
    this.r = r
    this.speed = speed
  }
  show(){
    fill(0)
    ellipse(this.x, this.y, this.r * 2)
  }
  move(){
    this.x += this.speed
  }
}
class Gun{
  constructor(x,y){
    this.x = x
    this.y = y
    this.bullets = []
  }
  show(){
    fill(0,0,255)
    rect(this.x, this.y, 40, 20)
    // Figure this line out
    this.bullets.forEach((bullet) => bullet.show)
  }
  shoot(caliber){
    let bullet
    if (caliber === ".22"){
      bullet = new Bullet(this.x, + 40, this.y + 10, 4, 5)
    } else if (caliber === ".38"){
      bullet = new Bullet(this.x, + 40, this.y + 10, 5, 6)
    } else if (caliber === ".50"){
      bullet = new Bullet(this.x, + 40, this.y + 10, 7, 8)
    }
    this.bullets.push(bullet)
  }
  update(){
    this.bullets.forEach((bullet) => bullet.move())
  }

  removeBullet(index){
    // find what this means
    this.bullets.splice(index, 1)
  }
}
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
    respawn(){
      this.x = random(200, width-200)
      this.y = random(100, height-100)
    }

}

let player;
let enemy;
let gun;
// let forestImg;
let width = window.innerWidth
let height = window.innerHeight
// function preload() {
//     forestImg = loadImage('forest.jpg'); // Load the forest image
// }

function setup() {

    createCanvas(width, height);
    player = new Player(width / 2, height / 2, 15);
    enemy = new Enemy(100, 100, 20); // Initialize the enemy object at position (100, 100) with radius 20
}

function draw() {
    background(221); // Set the background to the forest image
    player.move();
    player.show();
    enemy.chase(player); // Make the enemy chase the player
    enemy.show(); // Render the enemy on the canvas
}