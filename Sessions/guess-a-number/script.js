/*
Author:Triumf Avdyli
Date Created: 04.01.23

Title: Guess a number between 1-10
Tries: 3
Results:"Congrats" or "You lost"
 */

let guessNumber = parseInt (prompt("guess number between 1-10"));
let guess = Math.floor (Math.random() * 10) + 1;

console.log("The computer guessed" + guess);

if (guessNumber > guess) {
    guessNumber = parseInt(prompt("guess lower"));
}
else if (guessNumber < guess) {
    guessNumber = parseInt(prompt("Guess higher"));
} else {

}