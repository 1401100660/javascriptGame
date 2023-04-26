let img
function preload(){
    img = loadImage("imga/jesus.jpg")
}

class jesus{
    constructor(x, y, speed){
        this.x = x
        this.y = y
        this.speed = speed
    }
    show(){
        Image(img, this.x, this.y)
    }
    update(){
        
    }
}