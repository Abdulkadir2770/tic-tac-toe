const createPlayer = (person, marker) => {
    return {person, marker};
}

// gameboard object
const gameBoard = (() => {

    // adding an event listener to each square
    const squares = Array.from(document.querySelectorAll(".box"));

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            // marks the clicked square w/ an O
            square.innerText = game.activePlayer;
            square.style.pointerEvents = "none";
            // updates the number of squares available
            game.remainingSpots -= 1;
            //########## I need to find a way toggle between the users choices
            game.nextPlayer();
            game.checkWinner();
        })
    })

    return {
        squares
    }
})();

const game = (() => {

    // assigning each players mark
    const playerOne = "O";
    const playerTwo = "X";

    // game starting point
    let activePlayer = playerOne;
    let winnerDeclared = false;
    let remainingSpots = 9;

    // displays game winner
    let display = document.querySelector("#text");

    // winning conditions
    const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    // declares a winner
    function checkWinner() {
        winningAxes.forEach((item, index) => {
            console.log(item[index]);
        }) 
    }


    // player change
    function nextPlayer() {
        this.activePlayer === playerOne? this.activePlayer = playerTwo: this.activePlayer = playerOne;

        // changes the background color of each player letter notation to green
        if(this.activePlayer === playerTwo) {
            document.querySelector(".p1_score").style.backgroundColor = "#d3d3d3";
            document.querySelector(".p2_score").style.backgroundColor = "lightgreen";
        } else {
            document.querySelector(".p2_score").style.backgroundColor = "#d3d3d3";
            document.querySelector(".p1_score").style.backgroundColor = "lightgreen";
        }

        if(game.remainingSpots === 0) {
            document.querySelector(".p2_score").style.backgroundColor = "#d3d3d3";
        }

    }

    //return
    return {
        activePlayer,
        winnerDeclared,
        remainingSpots,
        display,
        playerOne,
        playerTwo, 
        nextPlayer,
        checkWinner
    };

})();

