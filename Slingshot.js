class Slingshot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        //null means empty or nothing
        this.chain.bodyA = null;
        //null equates to false
    }
    display(){

        if(this.chain.bodyA!= null){

            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
     
    }

    
    
}