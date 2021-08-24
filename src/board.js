

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


class Board
{
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.m_board = [];   this.m_board.length   = x * y;
        this.board_res = []; this.board_res.length = x * y;

        for (let i = 0; i < x * y; i++)
        {
            this.m_board[i] = getRandomInt(2);
        }
    }

    get_elem(i, j) {
        if (i < this.x && j < this.y)
        {
            return this.m_board[i * this.y + j];
        }
        return 0;
    }

    set_elem(i, j, val) {
        if (i < this.x && j < this.y)
        {
            this.m_board[i * this.y + j] = val;
        }
    }

    clear() {
        for (let i = 0; i < this.x * this.y; i++)
        {
            this.m_board[i]   = 0;
        }
        clearCanvas();
    }

    update() {
        for (let i = 0; i < this.x; i++)
        {
            for (let j = 0; j < this.y; j++)
            {
                this.board_res[i * this.y + j] = this.next_state(i, j);
            }
        }
        this.swap();
    }

    render() {
        clearCanvas();
        for (let i = 0; i < this.x; i++)
        {
            for (let j = 0; j < this.y; j++)
            {
                if (this.get_elem(i, j) == 1)
                {
                    drawRect(i, j);
                }
            }
        }
    }

    next_state(i, j) {
        var count_alive   = this.count_neighbors_alive(i, j);
        var current_state = this.get_elem(i, j);

        if (!current_state && count_alive == 3)
        {
            return 1;
        }
        else if (current_state && (count_alive == 2 || count_alive == 3))
        {
            return 1;
        }
        else
        {
            return 0;
        }

    }

    count_neighbors_alive(i, j) {
        var count_alive = 0;
        count_alive += this.get_elem(i - 1, j - 1);
        count_alive += this.get_elem(i - 1, j);
        count_alive += this.get_elem(i - 1, j + 1);
        count_alive += this.get_elem(i, j - 1);
        count_alive += this.get_elem(i, j + 1);
        count_alive += this.get_elem(i + 1, j - 1);
        count_alive += this.get_elem(i + 1, j);
        count_alive += this.get_elem(i + 1, j + 1);
        return count_alive;
    }

    swap() {
        var tmp        = this.m_board;
        this.m_board   = this.board_res;
        this.board_res = tmp;
    }
}