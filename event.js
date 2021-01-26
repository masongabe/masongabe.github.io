let boxElement = document.getElementById("box");

let X = 0;

let Y = 0;

let keyState = {
    up: false,
    down: false,
    left: false,
    right: false
}




document.addEventListener("keydown", function(e){

    console.log(e.code)

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

    console.log(e.code)

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

function tick(){
    if (keyState.right){
        X += 10;
    }
    if (keyState.left){
        X -= 10;
    }
    if (keyState.down){
        Y += 10;
    }
    if (keyState.up){
        Y -= 10;
    }

    boxElement.style.left = X + "px";
    boxElement.style.top = Y + "px";
 
}

setInterval(tick, 20);
