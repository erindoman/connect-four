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
    '1': 'Pink',
    '-1': 'Grey',
    'null': ''
};

/*---------------------------- Variables (state) ----------------------------*/

let grid = [];
let winner;

/*------------------------ Cached Element References ------------------------*/

const cells = Array.from(document.querySelectorAll('.grid div'))
const resultMessage = document.querySelector('#result')
const restart = document.querySelector('.restart')

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.grid').addEventListener('click', handleMove)
document.getElementById('restart').addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/

//function that takes the index of the clicked cell and determines if it is a free spot (index + 7 must have a 'taken-cell' class) and updates the state of the game by marking the cell with the player's class name and a 'taken-cell' class name.

function handleMove(e) {  
    const index = parseInt(e.target.id.replace('cell', ''));
     if (grid[index] || winner || !cells[index + 7].classList.contains('taken-cell')) {return};
    if (turn === 1) {
            cells[index].className += ' taken-cell' 
            cells[index].className += ' 1'
            turn = -1
    } else if (turn === -1) {
            cells[index].className += ' taken-cell'
            cells[index].className += ' -1'
            turn = 1
    }
    grid[index] = turn;
    winner = getWinner();
    render();
}

//function that loops through the 'wins' array and determines if a single player matches 1 of the 4-in-a-row conditions. if true, this function returns the winner value of the first index in the winning array

function getWinner() {
    winner = null
        for (let i = 0; i < wins.length; i++) {
            if (Math.abs(grid[wins[i][0]] + grid[wins[i][1]] + grid[wins[i][2]] + grid[wins[i][3]]) === 4) {
            winner = grid[wins[i][0]];
            } else if (!grid.includes(null))
        return "Tie";
        } return winner 
}

//function that takes the index on the clicked cell and renders the corresponding div with the player color, updates the turn message, and if a winner/tie has been determined updates to a win/tie message

function render() {
    grid.forEach(function(sq, index) {
        cells[index].style.background = playerColor[sq];
    });
    if (winner === "Tie") {
    resultMessage.innerHTML = "It's a tie!";
    } else if (winner) {
    resultMessage.innerHTML = `${playerColor[winner].toUpperCase()} WINS!`;
    } else {
    resultMessage.innerHTML = `${playerColor[turn*-1]}'s turn!`;
    }  
} 

//function that initializes a new game, clears the grid and removes given class names

function init() { 
    grid = new Array(42).fill(null);
    turn = 1;    
    winner = null;
    for (let i = 0; i <= grid.length -1; i++) {
        cells[i].classList.remove("taken-cell")
    }
    render();
} 

init();