function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissor"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

let userChoice;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors"); // Corrected typo

function returnValue(e) {
  userChoice = e;
}

rock.addEventListener("click", () => {
  returnValue("rock");
  playRound(getComputerChoice(), userChoice); // Call playRound with the choices
});

paper.addEventListener("click", () => {
  returnValue("paper");
  playRound(getComputerChoice(), userChoice); // Call playRound with the choices
});

scissors.addEventListener("click", () => {
  returnValue("scissors"); // Corrected typo
  playRound(getComputerChoice(), userChoice); // Call playRound with the choices
});

let win = 0;
let result = document;

function playRound(computerChoice, userChoice) {
  if (win < 5) {
    if (computerChoice === userChoice) {
      console.log("Match Tied. You both chose " + computerChoice);
      document.querySelector(".result").innerHTML = "MATCH TIED";
    } else if (
      (userChoice === "rock" && computerChoice === "Scissor") ||
      (userChoice === "scissors" && computerChoice === "Paper") ||
      (userChoice === "paper" && computerChoice === "Rock")
    ) {
      win++;
      console.log("You win!");
      console.log("win: " + win);
      document.querySelector(".result").innerHTML = "You Win :" + win;
    } else {
      console.log("You lose!");
      document.querySelector(".result").innerHTML = "You loose";
    }
  } else {
    console.log("You win 5 times. Please refresh to start.");
    document.querySelector(".result").innerHTML =
      "You win 5 times. Please refresh to start.";
  }
}
