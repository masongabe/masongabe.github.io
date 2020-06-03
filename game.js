//13.05 https://www.youtube.com/watch?v=ju09womACpQ

class Vec
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }
}

class Rect
{
    constructor(w, h)
    {
        this.pos = new Vec;
        this.size = new Vec(w, h);
    }
    get left()
    {
        return this.pos.x - this.size.x / 2;
    }
    get right()
    {
        return this.pos.x + this.size.x / 2;
    }
    get top()
    {
        return this.pos.y - this.size.y / 2;
    }
    get bottom()
    {
        return this.pos.y + this.size.y / 2;
    }
}

class Ball extends Rect
{
    constructor()
    {
        super(10, 10);
        this.vel = new Vec;
    }
}

class pong
{
    constructor(canvas)
    {
        this._canvas = canvas;
        this._context = canvas.getcontext('2d');

        this.ball = new Ball;
        this.ball.pos.x = 100;
        this.ball.pos.x = 50;

        this.ball.vel.x = 100;
        this.ball.vel.y = 100;

    }
    update(dt){
        this.ball.pos.x += this.ball.vel.x * dt;
        this.ball.pos.y += this.ball.vel.y * dt;
    
        if (this.ball.left < 0 || this.ball.right > this._canvas.width){
            this.ball.vel.x = -this.ball.vel.x;
        }
        if (this.ball.top < 0 || this.ball.bottom > this._canvas.height){
            this.ball.vel.y = -this.ball.vel.y;
        }
    
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, this._canvas.clientWidth, this._canvas.height);
    
        this._context.fillStyle = '#fff';
        this._context.fillRect(this.ball.pos.x, this.ball.pos.y, this.ball.size.x, this.ball.size.y);
}


const canvas = document.getElementById('pong');




let lastTime;
function callback(millis) {
    if (lastTime){
        update((milis - lastTime) / 1000);
    }
    lastTime = millis;
    requestAnimationFrame(callback);
}

function
}

callback();