class ComputerArcher{

    constructor(x,y,width,height,angle){

        var options={
            isStatic:true,
        }

        this.width=width;
        this.height=height;
        this.angle=angle;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        this.image=loadImage("assets/computerArcher.png");

       
    }

    display(){

        if(keyIsDown(UP_ARROW)){
            angle-=0.01;

        }
        var pos=this.body.position;

        push();

        translate(pos.x,pos.y);
        rotate(this.angle);

        imageMode(CENTER);

        image(this.image,0,0,this.width,this.height);

        pop();
        

    }
}