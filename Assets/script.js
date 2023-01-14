//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
let qDiv = document.querySelector("#questions");
let rDiv = document.querySelector("#reset");
let highscoreForm = document.querySelector("#hsForm");
let highscoreDiv = document.querySelector("#viewHighScores");
let highscoresList = document.querySelector("#highscoresList");
let timerEl = document.querySelector(".timer");
let resultsDiv = document.querySelector("#results");
let secondsLeft = 60;
let highScores = [];

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
let highscoresLength = highScores.length;
let highscoresIndex = 0;

//begins quiz
function startQuiz() {
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
    buttonOne.setAttribute("class", "m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
    buttonOne.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonTwo.textContent = quizQuestions[i].choice2;
    buttonTwo.setAttribute("class", "m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
    buttonTwo.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.textContent = quizQuestions[i].choice3;
    buttonThree.setAttribute("class", "m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
    buttonThree.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonThree);

    let buttonFour = document.createElement("button");
    buttonFour.textContent = quizQuestions[i].choice4;
    buttonFour.setAttribute("class", "m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
    buttonFour.dataset.answer = quizQuestions[i].answer;
    qDiv.appendChild(buttonFour);
  }
}
// Game Over
function gameOver() {
  qDiv.innerHTML = "";
  // play again button
  let playAgain = document.createElement("button");
  playAgain.setAttribute("class", "m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
  playAgain.textContent = "Play again?";
  rDiv.appendChild(playAgain);

  let highscoreText = document.createElement("h3");
  highscoreText.setAttribute("class", "text-lg font-bold");
  highscoreText.textContent = "Enter your highscore!";
  highscoreForm.appendChild(highscoreText);

  // name input
  let saveName = document.createElement("input");
  saveName.setAttribute("class", "initials m-2 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
  highscoreForm.appendChild(saveName);

  // save button
  let saveButton = document.createElement("button");
  saveButton.setAttribute("class", "text-base m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
  saveButton.textContent = "Save Score";
  highscoreForm.appendChild(saveButton);

  // view High Scores
  let seeHighscores = document.createElement("button");
  seeHighscores.setAttribute("class", "text-base m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow");
  seeHighscores.textContent = "View All Highscores";
  highscoreDiv.appendChild(seeHighscores);

  // play again event listner
  playAgain.addEventListener("click", function () {
    quizQuestionsIndex = 1;
    rDiv.innerHTML = "";
    highscoreForm.innerHTML = "";
    highscoresList.innerHTML = "";
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
    let name = document.querySelector(".initials").value;
    let score = secondsLeft;
    let userScore = {
      name: name,
      score: score,
    };
    highScores.push(userScore);
    console.log(highScores);
    storeScores();

    highscoreForm.innerHTML = "";
    let scoreNotification = document.createElement("h4");
    scoreNotification.innerHTML = "Score Submitted!";
    rDiv.appendChild(scoreNotification);
  }
}

// View Highscores function
function viewHighScores() {
  // sorts hs array by highest first
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  for (let score of highScores) {
    let scoreItem = document.createElement("li");
    scoreItem.innerHTML = `Name: ${score.name} Score: ${score.score}`;
    scoreItem.setAttribute("class", "m-2 text-base");
    highscoresList.appendChild(scoreItem);
  }
  highscoreDiv.innerHTML = "";
}

// stores HighScores to local storage
function storeScores() {
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

// Initialization
function init() {
  let initScores = JSON.parse(localStorage.getItem("highScores"));
  if (initScores !== null) {
    highScores = initScores;
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
      resultsDiv.setAttribute("class", "text-green-600 text-lg");
      resultsDiv.textContent = "CORRECT!";
    } else {
      resultsDiv.setAttribute("class", "text-red-600 text-lg");
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

startQuizButton.addEventListener("click", startQuiz);
qDiv.addEventListener("click", answerButtons);
highscoreForm.addEventListener("click", submitScore);
highscoreDiv.addEventListener("click", viewHighScores);
init();
