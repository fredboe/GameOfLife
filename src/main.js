
var custom  = false;
var stopped = true;
var board   = new Board(24, 24);

var interval_id = undefined;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Loop() {
    setTimeout(() => { board.render(); }, 1000);
    if (!stopped)
    {
        interval_id = setInterval(() => {
            board.update();
            board.render();
        }, 1000);
    }
}

document.getElementById("start-button").addEventListener("click", function () {
    stopped = false;
    custom  = false;
    Loop();
});

document.getElementById("stop-button").addEventListener("click", function () {
    stopped = true;
    clearInterval(interval_id);
});

document.getElementById("restart-button").addEventListener("click", function () {
    clearInterval(interval_id);
    stopped = true;
    board   = new Board(24, 24);
    Loop();
});

document.getElementById("custom-button").addEventListener("click", function () {
    stopped = true;
    clearInterval(interval_id);
    custom = true;
    board.clear();
});

canvas.addEventListener("click", function (event) {
    if (custom)
    {
        var i = Math.floor(event.offsetX / 20);
        var j = Math.floor(event.offsetY / 20);

        if (board.get_elem(i, j) == 1)
        {
            board.set_elem(i, j, 0);
        }
        else if (board.get_elem(i, j) == 0)
        {
            board.set_elem(i, j, 1);
        }
        board.render();
    }
});


document.addEventListener("DOMContentLoaded", function(event) { 
    drawGrid();
    Loop();
});