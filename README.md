# Connect Four
November 2020

URL: http://erindoman-connectfour.surge.sh/

This is a traditional 1v1 Connect Four game with no artificial intelligence. Two players take turns placing their assigned "chips" (either pink or grey, depending on who plays first) on the board with the goal of connecting four chips in a row (horizontally, vertically, or diagonally) to win the game.

I chose to create this game after I had previously built a tic-tac-toe board. I found that a lot of the logic was similar between the two games, but Connect Four was significantly more complex. This was a great way to practice the skills that I learned from the tic-tac-toe project while pushing myself to build something more complicated.

-----------------------------------------------

### Images

Original wireframe:
<img src="https://i.imgur.com/yuWjDrp.png" />

On load:
<img src="https://i.imgur.com/XUsMMIy.png" />

Grey win:
<img src="https://i.imgur.com/LxoQ7Rc.png" />

Pink win:
<img src="https://i.imgur.com/4T7Ud1i.png" />

Tie game:
<img src="https://i.imgur.com/hXTwnYT.png" />

-----------------------------------------------

### Technologies Used

JavaScript, CSS, HTML

-----------------------------------------------

### Getting Started

Play here: http://erindoman-connectfour.surge.sh/

This game is played with 2 players, alternating turns. Grey always goes first, pink always goes second. 

To play, start by clicking on one the cells in the bottom most row of a column to place your chip. Chips can only be placed in the lowest open cell of each column. Taking turns, strategically place your chips to block the other player and build a four-in-a-row win, either vertically, horizontally, or diagonally. The first player to get four chips in a row wins!

To restart the game, click on the restart button at the bottom of the grid.

-----------------------------------------------

### Next Steps

For future releases of this game, I plan to include to chip repositories (one for each player) that displayes their remaining chips, decreasing by one each time they play their turn (see original wireframe for context).

I also plan to add a dark mode, which would change the colors of the game at the touch of a button.

This game could also be improved with the addition of sound effects when a chip is played or when the game is reset.

-----------------------------------------------

### Original Connect Four Pseudocode

1. Define the required constants
    
    1.1. Define every possible winning combination of Connect Four. There are 69 possible winning combinations in a 6x7 Connect Four grid. Each winning combo consists of four connecting indexes of the grid (horizontal, vertical, diagonal) that hold the same player value.  

2. Define the required variables
   
    2.1. Define a game board, which is a 6x7 grid with each grid cell being clickable and markable. This is formatted as an array. 
   
    2.2. Define a player turn variable to indicate which of the two players is currently active and expected to play their chip.
    
    2.3. Define a winner variable that determines if either player 1 or player 2 is the winner. If no winner is identified, then return a tie.
    
    2.3. Define two game-chip repositories, one for each player, that displays the number of chips that either player has left to play. Both players should begin with 21 chips of their assigned color.

3. Define and store cached elements
    
    3.1. Store the 42 elements that represent each cell of the 6x7 grid.
   
    3.2. Store the message text that states if it is player 1’s turn, player 2’s turn, who the winner is, or if there is a tie game.
   
    3.3. Store the remaining playable chips in two separate repositories (one per player).

4. Upon loading, the app should:
   
    4.1. Initialize a new game:

        4.1.1. The grid should be empty (6x7 grid of empty cells). The array of the grid should be an array of 42 nulls.

        4.1.2. Each player’s game-chip repository should have 21 chips of their assigned color.
        
        4.1.3. Initialize player 1 to play first.
        
        4.1.4. No winner/tie game should be declared.
    
    4.2 Render the grid:

        4.2.1. Loop through the grid array and assign the index of the iteration to the corresponding mapped value of the grid array.
    
    4.3. Render the message:
       
        4.3.1. If no winner has been identified and there are still blank (null) cells on the grid, continue to prompt each player, one at a time, to play their remaining chips.
       
        4.3.2. If no winner has been identified and there are no blank (null) cells remaining in the grid, return the message declaring a tie game.
       
        4.3.3. If one of the possible winning combinations has been identified, return the message declaring the winner (either player 1 or player 2).
    
    4.4. Wait for the user to click a cell

5. Handle a player selecting a cell:
   
    5.1. Obtain the index of the clicked cell and assign it to the appropriate player.

    5.2. Update the grid with the appropriate color of the player assigned to the clicked cell.

    5.3. If the cell is already assigned to a player, do not let it be reassigned.

    5.4. Diminish the appropriate player’s game-chip repository by 1.

    5.5. Flip to the opposite player’s turn when a cell is clicked.

    5.6. If a winning combination is identified, immediately return the winner and end the game (but do not reinitialize a new game until the reset button is clicked).

    5.7. If there is no winner and no cells remain as null, return a tie game message. 

6. Handle a player selecting the reset button:
   
    6.1. Reinitialize a new game (step 4). 
