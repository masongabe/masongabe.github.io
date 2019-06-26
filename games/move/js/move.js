
var canvasElement = document.getElementById('game-canvas');
var canvas = canvasElement.getContext('2d');


var FPS = 30;
setInterval(function() {
    update();
    draw();
}, 1000/FPS);

var textX = 50;
var textY = 50;


function update() {
    textX += 1;
    textY += 1;
}

function draw() {
    canvas.clearRect(0, 0, 640, 480);
    canvas.fillStyle = "#000";
    canvas.fillText("Sup Bro!", textX, textY);
}
