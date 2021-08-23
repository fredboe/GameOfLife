
var custom  = false;
var stopped = true;
var board   = new Board(24, 24);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Loop() {
    board.render();
    await sleep(2000);
    while (!stopped)
    {
        board.update();
        board.render();
        await sleep(1000);
    }
}

document.getElementById("start-button").addEventListener("click", function () {
    stopped = false;
    custom  = false;
    Loop();
});

document.getElementById("stop-button").addEventListener("click", function () {
    stopped = true;
});

document.getElementById("restart-button").addEventListener("click", function () {
    board   = new Board(24, 24);
    stopped = false;
    Loop();
});

document.getElementById("custom-button").addEventListener("click", function () {
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