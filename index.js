////////////////////modal container
const modalContainer = document.querySelector(".modal-container");

function toggleModal() {
  modalContainer.classList.toggle("close-modal");
  modalContainer.classList.toggle("open-modal");
}

///////////////////game logic
const triangleContainer = document.querySelector(".triangle-container");
const gameContainer = document.querySelector(".game-container");
const discArr = document.querySelectorAll(".disc-container");
const userDiscContainer = document.querySelector(".user-disc");
const computerDiscContainer = document.querySelector(".computer-disc");
const winnerCol = document.querySelector(".winner-col");
const winnerText = document.querySelector(".winner-text");
const replayBtn = document.querySelector(".replay-btn");
const scoreValue = document.querySelector(".score-value");
var currentScore = 0;

var userDisc = "";
var computerDisc = "";

const data = ["rock", "paper", "scissors"];

// clicking event on discs by user on home page
discArr.forEach((disc) => {
  disc.addEventListener("click", (event) => {
    const selectedDisc = event.target;
    startGame(selectedDisc.dataset.target);
  });
});

//start game
function startGame(selectedDiscVal) {
  userDisc = selectedDiscVal;
  console.log(userDisc);
  triangleContainer.style.display = "none";
  gameContainer.style.display = "flex";
  let html = ` <div class="game-disc ${userDisc}-color"><img src="./images/icon-${userDisc}.svg" alt="img"></div>`;
  userDiscContainer.innerHTML = html;

  setTimeout(() => {
    generateRandomDisc();
  }, 1500);
}

//generate random number and update computer Disc
function generateRandomDisc() {
  let ranadomNumber = Math.floor(Math.random() * 3); // 0,1,2
  computerDisc = data[ranadomNumber];
  //update in DOM
  let html = ` <div class="game-disc ${data[ranadomNumber]}-color"><img src="./images/icon-${data[ranadomNumber]}.svg" alt="img"></div>`;
  computerDiscContainer.innerHTML = html;

  checkWinner();
}

//check winner conditions
function checkWinner() {
  winnerCol.style.display = "flex";
  if (userDisc === computerDisc) {
    winnerText.innerHTML = "draw 😐";
  } else if (userDisc === "paper" && computerDisc === "rock") {
    winnerText.innerHTML = "you won 😄";
    userDiscContainer.classList.add("winner-effect");
    currentScore += 1;
    scoreValue.innerHTML = currentScore;
  } else if (userDisc === "paper" && computerDisc === "scissors") {
    winnerText.innerHTML = "you lost 😔";
    computerDiscContainer.classList.add("winner-effect");
    currentScore -= 1;
    scoreValue.innerHTML = currentScore;
  } else if (userDisc === "rock" && computerDisc === "scissors") {
    winnerText.innerHTML = "you won 😄";
    userDiscContainer.classList.add("winner-effect");
    currentScore += 1;
    scoreValue.innerHTML = currentScore;
  } else if (userDisc === "rock" && computerDisc === "paper") {
    winnerText.innerHTML = "you lost 😔";
    computerDiscContainer.classList.add("winner-effect");
    currentScore -= 1;
    scoreValue.innerHTML = currentScore;
  } else if (userDisc === "scissors" && computerDisc === "rock") {
    winnerText.innerHTML = "you lost 😔";
    computerDiscContainer.classList.add("winner-effect");
    currentScore -= 1;
    scoreValue.innerHTML = currentScore;
  } else if (userDisc === "scissors" && computerDisc === "paper") {
    winnerText.innerHTML = "you won 😄";
    userDiscContainer.classList.add("winner-effect");
    currentScore += 1;
    scoreValue.innerHTML = currentScore;
  }
}

replayBtn.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  winnerCol.style.display = "none";
  triangleContainer.style.display = "block";
  gameContainer.style.display = "none";
  userDiscContainer.innerHTML = "";
  userDiscContainer.classList.remove("winner-effect");
  computerDiscContainer.classList.remove("winner-effect");
  computerDiscContainer.innerHTML = "";
  winnerText.innerHTML = "";
  userDisc = "";
  computerDisc = "";
}
