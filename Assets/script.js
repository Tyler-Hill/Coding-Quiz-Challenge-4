//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
let qDiv = document.querySelector("#questions");
let rDiv = document.querySelector("#reset");
let correctAnswers = 0;
let wrongAnswers = 0;

const highScores = {
  // Name: saveName,
  Correct: correctAnswers,
  Incorrect: wrongAnswers,
};
//let viewScores;
const quizQuestions = [
  {
    question: "What does this bootcamp teach us about?",
    choice1: "Front-end coding",
    choice2: "Back-end coding",
    choice3: "Coding Collaboration",
    choice4: "All these choices are correct",
    answer: "All these choices are correct",
  },
  {
    question: "What does 'CSS' stand for?",
    choice1: "Coding Sleek Software",
    choice2: "Cascading Style Sheets",
    choice3: "Cool Styling Stuff",
    choice4: "Color Software Service",
    answer: "Cascading Style Sheets",
  },
  {
    question: "What end can JavaScript be used to code for?",
    choice1: "Frond-End",
    choice2: "Back-End",
    choice3: "Both front and back-end",
    choice4: "Neither front or back-end",
    answer: "Both front and back-end",
  },
  {
    question: "What is an example of a Tag?",
    choice1: "'div'",
    choice2: "'let'",
    choice3: "'==='",
    choice4: "'[]'",
    answer: "'div'",
  },
  {
    question: "Did you have fun?",
    choice1: "Yes",
    choice2: "Yes",
    choice3: "Yes",
    choice4: "No",
    answer: "Yes",
  },
];
let quizQuestionsLength = quizQuestions.length;
let quizQuestionsIndex = 1;

//functions
function startQuiz() {
  alert("I started the game");
  createButtons(0);
}

function createButtons(i) {
  qDiv.innerHTML = "";
  if (quizQuestionsIndex >= quizQuestionsLength) {
    gameOver();
  } else {
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
  let playAgain = document.createElement("button");
  playAgain.textContent = "Play again?";
  rDiv.appendChild(playAgain);

  // let saveName = document.createElement("input");
  // saveName.textContent = "Please Enter Your Name";
  // rDiv.appendChild(saveName);

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save Score";
  rDiv.appendChild(saveButton);
  saveButton.addEventListener("click", function () {
    console.log(highScores);
  });

  playAgain.addEventListener("click", function () {
    quizQuestionsIndex = 1;
    console.log(quizQuestionsIndex);
    rDiv.innerHTML = "";
    console.log(highScores);
    startQuiz();
  });
}

startQuizButton.addEventListener("click", startQuiz);
qDiv.addEventListener("click", function (event) {
  console.log(event.target);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;
  if (choice === answer) {
    alert("You chose the right answer");
    createButtons(quizQuestionsIndex);
    quizQuestionsIndex++;
    correctAnswers++;
    // localStorage.setItem("correctAnswers", correctAnswers);
  } else {
    alert("You chose the wrong answer");
    createButtons(quizQuestionsIndex);
    quizQuestionsIndex++;
    wrongAnswers++;
    // localStorage.setItem("wrongAnswers", wrongAnswers);
  }
  console.log(correctAnswers);
  console.log(wrongAnswers);
});
//change rDiv to include save
