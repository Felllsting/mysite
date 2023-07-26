const guess = document.getElementById("guess");
const report = document.getElementById("report");

const MAXNUM = 100000;
let secret;

function loadGame(){
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * MAXNUM);
    report.innerHTML = secret;

}

function makeGuess(){



}