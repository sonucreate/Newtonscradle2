class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 220
        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y; -250;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3,5);
            stroke("#fff");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    detached() {
        this.chain.bodyA = null;
    }
    attached(body1) {
        this.chain.bodyA = body1.body;
    }
}