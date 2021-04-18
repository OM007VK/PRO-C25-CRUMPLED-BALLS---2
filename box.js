class Box {
    constructor(posX,posY,widtha,heighta)
    {
     var options={isStatic:true}
     this.body=Bodies.rectangle(posX,posY,widtha,heighta,options)
     this.width=widtha
     this.height=heighta
     this.image=loadImage("images/bin.png")
     World.add(world,  this.body)
    }
 
    display()
    {
      var pos = this.body.position ;
      if (this.width<50)
      {
        push();
        rectMode(CENTER)
        fill("black")
        rect(pos.x,pos.y,this.width,this.height)
        pop();
      }
      else 
      {
        push();
        imageMode(CENTER)
        fill("black")
        image (this.image, pos.x, pos.y-100, this.width, this.height+200)
        pop();
      }
    }
 }