class Ball
{
    constructor(x, y, radius)
    {
        var options = {
            'isStatic': false,
            'restitution': 0.1,
            'density': 0.8,
            'friction': 0.3
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;

        ellipseMode(RADIUS);
        fill("#CC0000");
        noStroke();
        ellipse(pos.x, pos.y, this.radius);
    }
}