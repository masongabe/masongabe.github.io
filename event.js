let boxElement = document.getElementById("box");

let fire = false;

let X = 0;

let Y = 0;

let keyState = {
    up: false,
    down: false,
    left: false,
    right: false,
    space: false
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
    if (e.code === "Space"){

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
    if (e.code === "Space"){

        keyState.space = false;
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

    fire = keyState.space;

    boxElement.style.left = X + "px";
    boxElement.style.top = Y + "px";
 
    shoot();
}

setInterval(tick, 30);


function  shoot(){
    if (fire === true){
        console.log("JHGASJDHGASJDHGASJDHGJSDGH");
    }
}