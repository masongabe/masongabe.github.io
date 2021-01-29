const canvas = document.getElementById("Canvas2");
const ctx = canvas.getContext("2d");

let player = {
    X: window.innerWidth / 2,
    Y: window.innerHeight / 2,

}
let keyState = {
    up: false,
    down: false,
    left: false,
    right: false
}
let mouse = {
    X: player.X,
    Y: player.Y
}

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function(e){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    playerRender();
});

document.addEventListener("mousemove", function(e){
    
    mouse.X = e.clientX;
    mouse.Y = e.clientY;


});
window.addEventListener("click", function(e){
    let degrees = getAngleDeg(player.X, player.Y, e.clientX, e.clientY);
});

function playerRender(){

ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "black";
ctx.rect(player.X, player.Y, 40, 40);
ctx.stroke();

}
function getAngleDeg(ax,ay,bx,by) {
    var angleRad = Math.atan((ay-by)/(ax-bx));
    var angleDeg = angleRad * 180 / Math.PI;
    
    return(angleDeg);
  }
  
  function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
}





    function playerRender(x,y,width,height,degrees){

        
        ctx.save();

        ctx.beginPath();
        
        ctx.translate( x+width/2, y+height/2 );
        
        ctx.rotate(degrees*Math.PI/180);

        
        ctx.rect( -width/2, -height/2, width,height);

        ctx.lineWidth = "10";
        ctx.strokeStyle = "black";
        ctx.rect(player.X, player.Y, 40, 40);
        ctx.stroke();
       
       
        ctx.restore();

    }
    document.addEventListener("keydown", function(e){

        if (e.code === "ArrowRight" || e.code === "KeyD") {
    
            keyState.right = true;
    
        } 
        if (e.code === "ArrowLeft" || e.code === "KeyA") {
    
            keyState.left = true;
        } 
        if (e.code === "ArrowDown" || e.code === "KeyS") {
    
            keyState.down = true;
        } 
        if (e.code === "ArrowUp" || e.code === "KeyW") {
         
            keyState.up = true;
        }

    });
    
    
    document.addEventListener("keyup", function(e){
    
        if (e.code === "ArrowRight" || e.code === "KeyD") {
    
            keyState.right = false;
           
        } 
        if (e.code === "ArrowLeft" || e.code === "KeyA") {
    
            keyState.left = false;
        } 
        if (e.code === "ArrowDown" || e.code === "KeyS") {
    
            keyState.down = false;
        } 
        if (e.code === "ArrowUp" || e.code === "KeyW") {
    
            keyState.up = false;
        }
    
    });
 
    function frame(){
        clear();
        
        playerRender(player.X, player.Y, 40, 40, getAngleDeg(player.X, player.Y, mouse.X, mouse.Y));
        if (keyState.right){
            player.X += 1;
        }
        if (keyState.left){
            player.X -= 1;
        }
        if (keyState.down){
            player.Y += 1;
        }
        if (keyState.up){
            player.Y -= 1;
        }

    }
    setInterval(frame, 1);