// Elements

const restart = document.getElementById("restart-button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");


restart.addEventListener("click", restartGame);
rock.addEventListener("click", playerRock)
paper.addEventListener("click", playerPaper)
scissors.addEventListener("click", playerScissors)

let playerScore = 0;
let computerScore = 0;


function playerRock() {
    let result;
    let computerResult = Math.floor(Math.random() * 3 + 1) //1 represents rock, 2-paper and 3-scissors
    if (computerResult == 1) {
        result = "It is a Draw."
    } else if (computerResult == 2) {
        result = "You Lose!"
    } else {
        result = "You Win!"
    }

    showResult(result, computerResult);
}
function playerPaper() {
    let result;
    let computerResult = Math.floor(Math.random() * 3 + 1) //1 represents rock, 2-paper and 3-scissors
    if (computerResult == 1) {
        result = "You Win!";
    } else if (computerResult == 2) {
        result = "It is a Draw."
    } else {
        result = "You Lose!";
    }

    showResult(result, computerResult);
}
function playerScissors() {
    let result;
    let computerResult = Math.floor(Math.random() * 3 + 1) //1 represents rock, 2-paper and 3-scissors
    if (computerResult == 1) {
        result = "You Lose!";
    } else if (computerResult == 2) {
        result = "You Win!";
    } else { result = "It is a Draw." }

    showResult(result, computerResult);
}
function showResult(result, computerResult) {
    let computer;
    let iconClass;
    if (computerResult == 1) {
        computer = "rock";
        iconClass = "fas fa-hand-back-fist fa-10x"
    } else if (computerResult == 2) {
        computer = "paper";
        iconClass = "fas fa-hand fa-10x"
    } else {
        computer = "scissors";
        iconClass = "fas fa-hand-scissors fa-10x"
    }

    const div = document.createElement("DIV");
    div.innerHTML = `
        <div class="resultDisplay" id="resultDisplay">
            <h3>${result}</h3>
            <i class="${iconClass}"></i>
            <h3>Computer chose <span style="color: yellow">${computer}</span></h3>
        </div>
    `
    let body = document.querySelector("body");
    body.appendChild(div);
    div.addEventListener("click", function () {
        body.lastElementChild.remove();
    })

    if (result === "You Win!") {
        playerScore += 1;
        playerScoreDisplay.innerHTML = `
        Player: <span>${playerScore}</span>
    `
    } else if (result === "You Lose!") {
        computerScore += 1;
        computerScoreDisplay.innerHTML = `
        Computer: <span>${computerScore}</span>
    `
    }



}

function restartGame() {
    computerScore = 0;
    playerScore = 0;
    playerScoreDisplay.innerHTML = `
        Player: <span>${playerScore}</span>
    `
    computerScoreDisplay.innerHTML = `
        Computer: <span>${computerScore}</span>
    `
}


