
var canvas = document.getElementById("gol-canvas");
var ctx    = canvas.getContext("2d");

ctx.fillStyle = '#3b9738';

function drawRect(i, j)
{
    ctx.fillRect(i * 20, j * 20, 20, 20);
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}