
var grid_canvas = document.getElementById("grid-canvas");
var grid_ctx    = grid_canvas.getContext("2d");

grid_ctx.lineWidth = 1;
grid_ctx.strokeStyle = '#f1f1f1';

function drawGrid () {
    drawVertical();
    drawHorizontal();
}

function drawVertical () {
    for (let i = 0; i < 24; i++)
    {
        grid_ctx.moveTo(i * 20, 0);
        grid_ctx.lineTo(i * 20, 480);
        grid_ctx.stroke();
    }
    
}

function drawHorizontal () {
    for (let i = 0; i < 24; i++)
    {
        grid_ctx.moveTo(0, i * 20);
        grid_ctx.lineTo(480, i * 20);
        grid_ctx.stroke();
    }
}

