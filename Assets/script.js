//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
let qDiv = document.querySelector("#questions");
let rDiv = document.querySelector("#reset");
let highscoreForm = document.querySelector("#hsForm");
let timerEl = document.querySelector(".timer");
let resultsDiv = document.querySelector("#results");
let secondsLeft = 60;
const highScores = [];

// const page = window.open("highscores.html");
// let viewScoresDiv = document.querySelector("#viewHighScores");
// let highScoresPage = document.querySelector("#highScoresPage");

const quizQuestions = [
  {
    question: "1. What does this bootcamp teach us about?",
    choice1: "Front-end coding",
    choice2: "Back-end coding",
    choice3: "Coding Collaboration",
    choice4: "All these choices are correct",
    answer: "All these choices are correct",
  },
  {
    question: "2. What does 'CSS' stand for?",
    choice1: "Coding Sleek Software",
    choice2: "Cascading Style Sheets",
    choice3: "Cool Styling Stuff",
    choice4: "Color Software Service",
    answer: "Cascading Style Sheets",
  },
  {
    question: "3. What end can JavaScript be used to code for?",
    choice1: "Frond-End",
    choice2: "Back-End",
    choice3: "Both front and back-end",
    choice4: "Neither front or back-end",
    answer: "Both front and back-end",
  },
  {
    question: "4. What is an example of an Element?",
    choice1: "'div'",
    choice2: "'let'",
    choice3: "'==='",
    choice4: "'[]'",
    answer: "'div'",
  },
  {
    question: "5. Did you have fun?",
    choice1: "Yes",
    choice2: "Yes",
    choice3: "Yes",
    choice4: "No",
    answer: "Yes",
  },
];
let quizQuestionsLength = quizQuestions.length;
let quizQuestionsIndex = 0;

//begins quiz
function startQuiz() {
  alert("I started the game");
  createButtons(0);
  quizTimer();
  startQuizButton.remove();
}
//actual quiz
function createButtons(i) {
  qDiv.innerHTML = "";
  // ends game
  if (quizQuestionsIndex >= quizQuestionsLength) {
    localStorage.setItem("score", secondsLeft);
    timerEl.innerHTML = "";
    gameOver();
  } else {
    //Continues
    let title = document.createElement("h2");
    title.textContent = quizQuestions[i].question;
    qDiv.appendChild(title);

    let buttonOne = document.createElement("button");
    buttonOne.textContent = quizQuestions[i].choice1;
    buttonOne.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonTwo.textContent = quizQuestions[i].choice2;
    buttonTwo.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.textContent = quizQuestions[i].choice3;
    buttonThree.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonThree);

    let buttonFour = document.createElement("button");
    buttonFour.textContent = quizQuestions[i].choice4;
    buttonFour.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonFour);
  }
}
// Game Over
function gameOver() {
  qDiv.innerHTML = "";
  alert("Game over!");
  // play again button
  let playAgain = document.createElement("button");
  playAgain.textContent = "Play again?";
  rDiv.appendChild(playAgain);

  let highscoreText = document.createElement("h3");
  highscoreText.textContent = "Enter your highscore!";
  highscoreForm.appendChild(highscoreText);

  // name input
  let saveName = document.createElement("input");
  saveName.setAttribute("id", "initials");
  highscoreForm.appendChild(saveName);

  // save button
  let saveButton = document.createElement("button");
  saveButton.textContent = "Save Score";
  highscoreForm.appendChild(saveButton);

  // play again event listner
  playAgain.addEventListener("click", function () {
    quizQuestionsIndex = 1;
    rDiv.innerHTML = "";
    highscoreForm.innerHTML = "";
    secondsLeft = 59;
    startQuiz();
  });
}
// submit score function
function submitScore(event) {
  event.preventDefault();
  let element = event.target;
  if (element.matches("button")) {
    console.log(event);
    let name = document.querySelector("#initials").value;
    let score = secondsLeft;
    let userScore = {
      name: name,
      score: score,
    };
    highScores.push(userScore, JSON.stringify(highScores));
    resultsDiv.textContent = highScores;
    console.log(highScores);
  }
}

//Question answering function
function answerButtons(event) {
  console.log(event.target);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;
  let element = event.target;
  if (element.matches("button")) {
    if (choice === answer) {
      resultsDiv.textContent = "CORRECT!";
    } else {
      resultsDiv.textContent = "WRONG!";
      secondsLeft -= 10;
    }
    quizQuestionsIndex++;
    createButtons(quizQuestionsIndex);
    setTimeout(function () {
      resultsDiv.textContent = "";
    }, 1000);
  }
}

// quiztimer function
function quizTimer() {
  let timerInterval = setInterval(function () {
    timerEl.textContent = `${secondsLeft}`;
    secondsLeft--;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    } else if (quizQuestionsIndex >= quizQuestionsLength) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// view high scores page button thing
// highScoresPage.addEventListener("click", function () {
//   let viewScoresDiv = document.getElementsByClassName("viewHighScores");
//   let showHighScores = document.createElement("h2");
//   showHighScores.textContent = "hello!";
//   viewScoresDiv.append(showHighScores);
// });

// function pasteHighScores() {
//   let hs = window.open("../highscores.html");
//   hs.onload = function () {
//     let showHighScores = document.createElement("h2");
//     showHighScores.textContent = "hello!";
//     viewScoresDiv.append(showHighScores);
//   };
// }

// page.addEventListener("DOMContentLoaded", () => {
//   // Now we can access the #test element on the other page
//   const testDiv = page.document.getElementById("test");
//   testDiv.textContent = "Hello world!";
// });

startQuizButton.addEventListener("click", startQuiz);
qDiv.addEventListener("click", answerButtons);
highscoreForm.addEventListener("click", submitScore);
