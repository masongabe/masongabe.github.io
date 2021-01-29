
const canvas = document.getElementById("Canvas1");
const ctx = canvas.getContext("2d");

let player = {
    X: window.innerWidth / 2,
    Y: window.innerHeight / 2,
    visible: true
}

let bullet = {
   X: window.innerWidth / 2,
   Y: window.innerHeight / 2,
   visible: false
}


let keyState = {
    up: false,
    down: false,
    left: false,
    right: false,
    space: false
}

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function bulletRender(){

    ctx.fillStyle = "grey";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(bullet.X, bullet.Y, 5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
}

function shoot(rise, run){
    let slope = reduce(rise, run); 
    let range = 20;
      console.log(slope[0],slope[1]);
      if(range > 1){
    bullet.Y += slope[0];
    bullet.X += slope[1];
    } 
  
}

document.addEventListener("click", function(e){
    bullet.visible = true;
    let X2 = e.clientX;
    let Y2 = e.clientY;
    let rise = (Y2 - player.Y);
    let run = (X2 - player.X);
    shoot(rise, run);

});

function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }


function playerRender(){
ctx.fillStyle = "darkGreen";
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(player.X, player.Y, 50, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.stroke();
}

playerRender();
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerRender();
}

window.addEventListener("resize", function(e){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    playerRender();
});

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
    if (e.code === "Space") {
     
        keyState.space = true;
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
    if (e.code === "Space") {
     
        keyState.space = false;
    }

});

function tick(){

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
    if (keyState.space){
        shoot();
    }
    if (bullet.visible){
        bulletRender();
    }
    if (bullet.visible = false){
        clear();
    }

    playerRender();
    clear();
}

setInterval(tick, 1);





