class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
            this.radius=r
            this.body = Bodies.circle(x,y,r/2,options);
            this.image = loadImage("sprites/paper.png");
            World.add(world,this.body);
        }
        display(){
            push();
            translate(this.body.position.x,this.body.position.y);
            fill("yellow");
            rotate(this.body.angle)
            imageMode(CENTER);
            image(this.image,0,0,this.radius,this.radius)
            pop();
        }
    }