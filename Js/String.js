class String {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 150,
            stiffness: 0.004
        }

        this.string = Matter.Constraint.create(options);
        World.add(world, this.string);
    }

    display() {
        var bodyA = this.string.bodyA.position;
        var pointB = this.string.pointB;

        push();
        stroke("#CCE5FF");
        strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        pop();
    }
}