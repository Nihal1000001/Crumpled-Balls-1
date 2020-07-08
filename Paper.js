class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
     this.body=Matter.Bodies.circle(100,600,this.radius,options);  
   this.radius=20;
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    fill("Green");
    ellipse(0,0,this.radius,this.radius);
    }
  };
  