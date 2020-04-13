class Block extends GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        super(container,src,width,height,velX,velY,x,y);
    }
    tick(){
        this.x+=this.velX;
    };
    render(){
        this.img.style.left=this.x+"px";
    };
}