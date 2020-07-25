let modifier = 30;

window.addEventListener('keydown', (event) => {

    var b = document.getElementById("block");

    var style = window.getComputedStyle(b, null);

    console.log(event.key);

    console.log("top :" + style["top"]);

    console.log("left: " + style["left"]);
    
    switch (event.key) {
        case 'ArrowUp': 
            var newtop = parseInt(style['top']) - modifier;
            b.style.top = newtop + "px"; 
            break; 
        case 'ArrowDown':
            var newdown = parseInt(style['top']) + modifier;
             b.style.top = newdown + "px"; 
             break;
        case 'ArrowLeft':
            var newleft = parseInt(style['left']) - modifier;
             b.style.left =  newleft + "px"; 
             break;
        case 'ArrowRight':
            var newright = parseInt(style['left']) + modifier;
             b.style.left =  newright + "px"; 
             break;
    }

});