const Game = require("./Game.js")
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");

let players = {referee: new ComputerPlayer(), guesser: new HumanPlayer()}
const newGame = new Game(players);
newGame.play()
