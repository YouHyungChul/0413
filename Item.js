// 버섯 등 아이템을 표현한다
class Item extends GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        super(container,src,width,height,velX,velY,x,y);
        this.count=0;
    }
    //버섯만의 움직임은 부모와는 틀리다!! 따라서 부모의
    // 메서드를 오버라이딩 하자!! (메서드를 재정의)
    tick(){
        this.x+=this.velX;
        this.velY+=this.g;
        this.y += this.velY;
        this.count++;
        if(this.count%100==0){
            this.velX = -this.velX;
        }
        for(var i=0; i<blocks.length; i++){
            var onBlock = collisionCheck(this.img, blocks[i].img);
            if(onBlock){
                //마리오는 방금 부딪친 벽돌의 y축0에 서있되,
                // 마리오의 y축-height만큼 y축의 음수방향으로 올라가있게
                this.velY=0; //중력은 자연법칙이므로 손대면 안됨!!
                this.y=blocks[i].y-this.height;
            }
        }
        

    }
    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y+"px";
    }
}