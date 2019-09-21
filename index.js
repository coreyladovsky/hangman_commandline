const Game = require("./Game.js")
const HumanPlayer = require("./HumanPlayer.js");

let players = {referee: new HumanPlayer(), guesser: new HumanPlayer()}
const newGame = new Game(players);
newGame.play()
