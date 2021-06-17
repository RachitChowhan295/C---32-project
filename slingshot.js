 
 class Slingshot {

    constructor (bodyA,pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.04
        }

        this.bodyA = bodyA;
        this.pointB = pointB;

        this.sling = Matter.Constraint.create(options);

        World.add(world,this.sling);

    }


    fly(){
        this.sling.bodyA = null
    }

    attach (body){
        this.sling.bodyA = body;
        Matter.Body.setPosition(polygon1.body,{x:80,y:230})
    }



    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
