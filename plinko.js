class Plinko{
    constructor(x,y){
        var options= {
            restitution:0.4
        }
    
        this.body = Bodies.circle(x,y, 15, options);
        this.r = 15;
        this.color = color(255,255,255);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}