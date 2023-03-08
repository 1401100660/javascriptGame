function jumper(){
    // def jumper start and dimensions
    this.x = w/2
    this.y = 0 
    this.width = 50
    this.height = 50
    //  force of gravity
    this.gravity = 0.5
    // opposing force
    this.lift = -10
    // velocity
    this.velocity = 0
    
    this.xVelocity = 0
  
  // show what the object looks like
    this.show = function(){
      fill(255,0,0);
      ellipse(this.x, this.y, this.width, this.height)
    }
  // what happens when the object jumps
    this.jump = function(){
      this.velocity += this.lift
    }
    // when the object moves left or right
    this.shift = function(neg){
      this.xVelocity += this.lift*neg
    }
  // handle updating the object
    this.update = function(){
      // for realistic up and down
      this.velocity += this.gravity
      this.y += this.velocity
      // fopr side to side
      this.x += this.xVelocity
      // air resistance
      this.velocity *= 0.9
      this.xVelocity *= 0.9
  
      // keep object in canvas; up and down
      if (this.y > (h - 26)){
        this.y = h - 26
        this.velocity = 0
      }
      if (this.y <= 26){
        this.y = 26      
        this.velocity = 0
      }
      //  keep object in canvas; right and left
      if (this.x > (w - 26)){
        this.x = w - 26      
        this.xVelocity = 0
      }
      if (this.x <= 26){
        this.x = 26      
        this.xVelocity = 0
      }
    }
  }