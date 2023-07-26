const guess = document.getElementById("guess");
const report = document.getElementById("report");
let body = document.body;

const MAXNUM = 1000000;
let secret;

function loadGame(){
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM + 1));
    

}

function makeGuess(){

    let myGuess = guess.value;

    if (myGuess < secret){

        report.innerHTML += `<br/>[${myGuess}] is too low!`;

    } else if (myGuess > secret){

        report.innerHTML += `<br/>[${myGuess}] is too high!`;

    } else if (myGuess == secret) {

        report.innerHTML += `<br/>You win!`;
        

    } else {

        report.innerHTML = `<br/>Something went wrong.`;

    }

}