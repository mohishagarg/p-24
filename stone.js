class Stone {
    constructor(x, y,width,height) {
      var options = {
          'friction':1,
          'restitution':0.3,
          'density':3
      }
      this.body = Bodies.rectangle(x, y,width,height,options);
      this.width = width;
      this.height = height;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);

      rotate(angle);

      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill(136,140,141);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }