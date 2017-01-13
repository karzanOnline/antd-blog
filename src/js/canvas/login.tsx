

//点：圆心xy坐标，半径，每帧移动xy的距离
class Circle {
    x: number;
    y: number;
    r: number;
    moveX: number;
    moveY: number;
    constructor(x, y, r, moveX, moveY) {
        this.x = x,
        this.y = y,
        this.r = r,
        this.moveX = moveX,
        this.moveY = moveY;
    }
}
//线条：开始xy坐标，结束xy坐标，线条透明度
class Line {
    beginX: number;
    beginY: number;
    closeX: number;
    closeY: number;
    o: number;
    constructor(x, y, _x, _y, o) {
        this.beginX = x,
        this.beginY = y,
        this.closeX = _x,
        this.closeY = _y,
        this.o = o;
    }
}

class Canvas {
    static WIDTH = window.innerWidth;
    static HEIGHT = window.innerHeight;
    static POINT = 35;
    public circleArr = [];
    constructor(canvasDom?: any) {
        canvasDom.width = Canvas.WIDTH;
        canvasDom.height = Canvas.HEIGHT;
        let context = canvasDom.getContext('2d');
        context.strokeStyle = 'rgba(0,0,0,0.02)',
        context.strokeWidth = 1,
        context.fillStyle = 'rgba(0,0,0,0.05)';
        this.init(context);
    }
    // 定时绘制
    timeToDraw (context) {
        let _this = this;
        setInterval(()=> {
            for (let i = 0; i < Canvas.POINT; i++) {
                let cir = _this.circleArr[i];
                cir.x += cir.moveX;
                cir.y += cir.moveY;
                if (cir.x > Canvas.WIDTH) cir.x = 0;
                else if (cir.x < 0) cir.x = Canvas.WIDTH;
                if (cir.y > Canvas.HEIGHT) cir.y = 0;
                else if (cir.y < 0) cir.y = Canvas.HEIGHT;

            }
            _this.draw(context);
        }, 16)
    }
    // 初始化生成原点
    init(context) {
        let _this = this;
        for (let i = 0; i < Canvas.POINT; i++) {
            _this.circleArr.push(_this.drawCricle(context,
                _this.num(Canvas.WIDTH),
                _this.num(Canvas.HEIGHT),
                _this.num(15, 2),
                _this.num(10, -10)/40,
                _this.num(10, -10)/40));
        }
        this.draw(context);
        this.timeToDraw(context);
    }
    //生成max和min之间的随机数
    num(max?:number, _min?:number) {
        let min = arguments[1] || 0;
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    // 绘制原点
    drawCricle (cxt, x, y, r, moveX?:number, moveY?:number) {

        let circle = new Circle(x, y, r, moveX, moveY);
        cxt.beginPath();
        cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI);
        cxt.closePath();
        cxt.fill();
        return circle;
    }
    //绘制线条
    drawLine (cxt, x, y, _x, _y, o) {
        let line = new Line(x, y, _x, _y, o);
        cxt.beginPath();
        cxt.strokeStyle = 'rgba(0,0,0,'+ o +')';
        cxt.moveTo(line.beginX, line.beginY);
        cxt.lineTo(line.closeX, line.closeY);
        cxt.closePath();
        cxt.stroke();
    }
    // 每帧绘制
    draw (context) {
        context.clearRect(0, 0, Canvas.WIDTH, Canvas.HEIGHT);
        let _this = this;
        for (let i = 0; i < Canvas.POINT; i++) {
            _this.drawCricle(context,
                _this.circleArr[i].x,
                _this.circleArr[i].y,
                _this.circleArr[i].r);
        }
        for (let i = 0; i < Canvas.POINT; i++) {
            for (let j = 0; j < Canvas.POINT; j++) {
                if (i + j < Canvas.POINT) {
                    let A = Math.abs(_this.circleArr[i+j].x - _this.circleArr[i].x),
                        B = Math.abs(_this.circleArr[i+j].y - _this.circleArr[i].y);
                    let lineLength = Math.sqrt(A*A + B*B);
                    let C = 1/lineLength*7-0.009;
                    let lineOpacity = C > 0.03 ? 0.03 : C;
                    if (lineOpacity > 0) {
                        _this.drawLine(context,
                            _this.circleArr[i].x,
                            _this.circleArr[i].y,
                            _this.circleArr[i+j].x,
                            _this.circleArr[i+j].y,
                            lineOpacity);
                    }
                }
            }
        }
    }
}

export { Canvas }

