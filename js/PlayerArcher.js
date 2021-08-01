class PlayerArcher{

    constructor(x,y,width,height,angle){

        var options={
            isStatic:true,
        }

        this.width=width;
        this.height=height;
        this.angle=angle;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        this.image=loadImage("assets/playerArcher.png");
        
       

    }

    display(){

       

        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.angle);
        
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();
         
    }
}