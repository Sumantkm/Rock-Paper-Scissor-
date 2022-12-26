// get the dom
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScoreVal");
const computer_span = document.getElementById("compScoreVal");
const user = document.getElementById("result-user-stat");
const comp = document.getElementById("result-comp-stat");
const winner = document.getElementById("result-final-stat");
const user_span = document.getElementById("user_span");
const comp_span = document.getElementById("comp_span");
const winner_span = document.getElementById("winner_span");
const choice_btn = document.querySelectorAll(".choice");

// Main function where the actions takes on clicking the button
choice_btn.forEach((button) =>
  button.addEventListener("click", () => {
    let id = button.id;
    if (id === "r") {
      user_span.innerHTML = "Rock";
    }
    if (id === "p") {
      user_span.innerHTML = "Paper";
    }
    if (id === "s") {
      user_span.innerHTML = "Scissors";
    }

    comp_span.innerHTML = computerTurn();

    winner_span.innerHTML = checkWinner();

    userScore_span.innerText = `${userScore}`;

    computer_span.innerHTML = `${computerScore}`;
  })
);

// Random function for computer
function computerTurn() {
  let choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

// Compare & check the winner function
function checkWinner() {
  switch (user_span.innerHTML + comp_span.innerHTML) {
    //Win case
    case "ScissorsPaper":
    case "PaperRock":
    case "RockScissors":
      userScore++;
      return "User Win!!! 🤩";
    //Lose case
    case "PaperScissors":
    case "RockPaper":
    case "ScissorsRock":
      computerScore++;
      return "Computer Win!! 🤐";

    //Draw case
    case "PaperPaper":
    case "ScissorsScissors":
    case "RockRock":
      return "It was a draw 😉";
  }
}
