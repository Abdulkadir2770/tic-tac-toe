const boxes = Array.from(document.getElementsByClassName("box"));
const play_text = document.getElementById("text");
const restart = document.querySelector("button");


const spaces = [null, null, null, null, null, null, null, null, null];
const O_Text = "O";
const X_Text = "X";
let current_player = O_Text;

const game_board = () => {
    boxes.forEach((box) => {
        box.addEventListener("click", (e) => {
            const id = e.target.id;
            console.log(id);

            if(!spaces[id]) {
                spaces[id] = current_player;
                e.target.innerText = current_player;

                if(player_has_won) {
                    play_text.innerText = `${current_player} has won`;
                    return;
                }
            } else if(spaces[id] === O_Text) {
                console.log
            }
        })
    })
}

const player_has_won = () => {
    
}

game_board();

// restarts the game when pressed
restart.addEventListener("click", )