class Snow{

    constructor(x, y){

        var options={

            isStatic: false, 
            restitution: 0.4
        }

        if(frameCount % 60 ==0 ){
        this.image= loadImage("snow4.webp");
        this.body= Bodies.rectangle(x, y, 90, 90, options); 
        World.add(world, this.body);
        }

        
    }

    display(){

        var posBottom=this.body.position;
        push()
        translate(posBottom.x, posBottom.y);
        imageMode(CENTER);
        image(this.image, 0,0, 90, 90);
        pop()
        
}
    }
