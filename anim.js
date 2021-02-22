const canvas = document.getElementById("Canvas7");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let square = {
    X: window.innerWidth / 2,
    Y: window.innerHeight / 2,
    visible: true,
    falling: true,
    jumping: false,
    left: false,
    right: false,
    idle: false
}

let velocityDown = 1.05;
let velocityUp = 0;





function squareRender(){
    ctx.lineWidth = "0";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(square.X, square.Y, 20, 20);
    ctx.stroke();
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function render(){
    clear();
    squareRender();

}


document.addEventListener("keydown", function(e){
    
        if (e.code === "Space" && square.Y === window.innerHeight - 20) {
            
            velocityUp = 15
            square.falling = false;
            square.jumping = true;
        
            console.log("space");
        } 
    
        if (e.code === "ArrowRight" || e.code === "KeyD") {

            square.right = true;
    
        } 
        if (e.code === "ArrowLeft" || e.code === "KeyA") {

            square.left = true;

        } 
});
document.addEventListener("keyup", function(e){
    if (e.code === "ArrowRight" || e.code === "KeyD") {

        square.right = false;

    } 
    if (e.code === "ArrowLeft" || e.code === "KeyA") {

        square.left = false;

    } 
});

setInterval(update, 10)

function update(){
    velocityUp *= 0.95;
    

    if(square.jumping){
        square.Y -= velocityUp;
    }
    if(velocityUp < 1){
        square.jumping = false;
        square.falling = true;
    }
    if(square.falling){
        velocityDown *= 1.05;
        square.Y += velocityDown;
        if(square.Y > (window.innerHeight - 20)){
            velocityUp = 0
            velocityDown = 1.05
            square.Y = (window.innerHeight - 20);
        }
    }
    if(square.right){
        square.X += 3;
    }
    if(square.left){
        square.X -= 3;
    }
   

    render();
}


