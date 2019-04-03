var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// the Math.floor function only allows the math.random * 3 output to be whole numbers that are between 0 and 3

/* we do the Math.random function to generate a random number that will soon 
correlate to which option (r, p, or s) the computer will choose in the game */

/* we multiply Math.random by 3 so the only outputs the Math.random function will give 
are between 0 and 3 */

/* console.log(getComputedChoice()); ...do console.log(getComputChoice()); 
because it will do exactly what is within its function above 
(generate a random number and then output either r, p, or s as a choice) */

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
        return "Scissor";
}

/* in the above function, you need to put *letter* inside the convertToWord function like this: 
convertToWord(letter) 
otherwise your statements in the function will not go through because letters was not defined */

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add("green-glow");

 /* we use the .classList.add to access the green-glow class in our CSS file

 setTimeout(function() { document.getElementById(userChoice).classList.remove("green-glow") }, 500 );
 /* the setTimeout element will set a timer for how long the green-glow will stay until it is removed
... 500 = .5 seconds / 5 milliseconds */
}

/* instead of mashing a bunch of string values together like this (the ES5 version of doing this): 
results_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Win! "
...we can write it like this using ES6 version of JS: 
`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`  
the ES6 version of doing this makes the code a lot more readable */

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("red-glow") }, 500 );

}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("gray-glow") }, 500 );
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        }
}

function main(){
    rock_div.addEventListener("click", function(){
    game("r");})

    paper_div.addEventListener("click", function(){
    game("p");})

    scissor_div.addEventListener("click", function(){
    game("s");})

}

main();
