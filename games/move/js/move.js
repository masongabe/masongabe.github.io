
var canvasElement = document.getElementById('game-canvas');
var canvas = canvasElement.getContext('2d');


var FPS = 24;
setInterval(function() {
    update();
    draw();
}, 1000/FPS);

var textX = 50;
var textY = 50;


function update() {
    textX += 5;
    textY += 0;
}

function draw() {
    canvas.clearRect(0, 0, 1000, 1000);
    canvas.fillStyle = "#00000";
    canvas.fillText("<<∆>>     <<∆>>    <-=∆=->   <<∆>>   <<∆>>   <-=∆=->    <<∆>>      <-=∆=->    <<∆>>   <-=∆=->", textX, textY);
}



