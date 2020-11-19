/*-------------------------------- Constants --------------------------------*/

const wins = [
    //horizonals
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],

    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],

    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],

    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],

    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],

    //verticals
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],

    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],

    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],

    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],

    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],

    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],

    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],

    //diagonals 
    [14, 22, 30, 38],

    [7, 15, 23, 31],
    [15, 23, 31, 39],

    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32, 40],

    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],

    [2, 10, 18, 26],
    [10, 18, 26, 34],

    [3, 11, 19, 27],

    [3, 9, 15, 21],

    [4, 10, 16, 22],
    [20, 16, 22, 28],
    
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],

    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],

    [13, 19, 25, 31],
    [19, 25, 31, 37],

    [20, 26, 31, 38]
];

const playerColor = {
    '1': 'red',
    '-1': 'yellow',
    'null': 'white'
};

/*---------------------------- Variables (state) ----------------------------*/

let playerTurn;
let grid = [];
let winner;

/*------------------------ Cached Element References ------------------------*/

const cells = Array.from(document.querySelectorAll('.grid div'))
const resultMessage = document.querySelector('#result')
const restart = document.querySelector('.restart')


/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('div').addEventListener('click', handleMove);
document.getElementById('restart').addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/

//function that turns grid into array, obtains index of clicked cell, checks if cell if free, returns if not, updates grid 
function handleMove(e) {  
    const idx = parseInt(e.target.id.replace('sq', ''));
    if (grid[idx] || winner) return;
    if (cells[idx + 7].innerHTML.contains('taken-cell')){
        if (turn === 1) {
            cells[idx].innerHTML.add('taken-cell')
            cells[idx].innerHTML.add('1')
            turn = 1
        } else if (turn === -1) {
            cells[idx].innerHTML.add('taken-cell')
            cells[idx].innerHTML.add('-1')
            turn = -1
        }
    }
    grid[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

//function that loops through array (grid) and determines if a match to the wins array has been made. if a win isn't found and there are no nulls on the board, it's a tie
function getWinner() {
    for (let i = 0; i < wins.length; i++) {
        if (Math.abs(grid[wins[i][0]] + grid[winningCombos[i][1]] + grid[wins[i][2]] + grid[wins[i][3]]) === 6) return grid[wins[i][0]];
    }
    if (grid.includes(null)) return null;
    return "Tie";
}

//function that should take the idx on the clicked cell and marks the corresponding div with the player color, determines and return the winner
function render() {
    grid.forEach(function(sq, idx) {
        cells[idx].style.background = playerColor[sq];
        cells[idx].onclick = handleMove();
    });
    if (winner === "Tie") {
    resultMessage.innerHTML = "It's a tie!";
    } else if (winner) {
    resultMessage.innerHTML = `Player ${playerColor[winner]} wins!`;
    } else {
    resultMessage.innerHTML = `Player ${playerColor[turn]}'s turn!`;
    }
}

//initializes a new game
function init() { 
    grid = new Array(42).fill(null);
    turn = 1;
    winner = null;
    render();
} 

init();