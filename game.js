const Board = require("./Board.js");
const HumanPlayer = require("/HumanPlayer.js");

class Game {
    constructor() {
        this.board = new Board();
        this.humanPlayer = new HumanPlayer();
        this.guessesRemaining = 6;
    }

    play() {
        while(!this.isGameOver()) {
            
        }
    }

    isGameOver() {
        return this.guessesRemaining <= 0 || this.board.isComplete()
    }

    displayBoard() {
        let output = []
        for(let i = 0; i < this.board.length; i++) {
            let char = this.board.get(i);
            output .push( char ? char : "_")
        }

        console.log(output.join(" "))
    }


}

module.exports = Game;