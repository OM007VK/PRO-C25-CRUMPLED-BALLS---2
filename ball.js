class Ball {
    constructor(posX,posY,radius)
    {
     var options={restitution:0.6,density:0.7,isStatic:false}
     this.body=Bodies.circle(posX,posY,radius/2,options)
     this.r=radius;
     World.add(world,  this.body)
    }
 
    display()
    {
      var pos = this.body.position ;
     push();
     imageMode(CENTER)
     fill("lightblue")
     image(ballImage, pos.x, pos.y, this.r,this.r)
     pop();
    }
 }