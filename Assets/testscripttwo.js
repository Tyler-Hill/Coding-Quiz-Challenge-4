//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
let qDiv = document.querySelector("#questions");

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
    question: "Question 2 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 2 goes here.",
  },
  {
    question: "Question 3 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 1 goes here.",
  },
  {
    question: "Question 4 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 1 goes here.",
  },
  {
    question: "Question 5 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 4 goes here.",
  },
];
let quizQuestionsCount = quizQuestions.length;

//functions
function startQuiz() {
  alert("I started the game");
  let title = document.createElement("h2");
  title.textContent = quizQuestions[0].question;
  qDiv.appendChild(title);

  let buttonOne = document.createElement("button");
  buttonOne.textContent = quizQuestions[0].choice1;
  buttonOne.dataset.answer = quizQuestions[0].answer;
  qDiv.appendChild(buttonOne);

  let buttonTwo = document.createElement("button");
  buttonTwo.textContent = quizQuestions[0].choice2;
  buttonTwo.dataset.answer = quizQuestions[0].answer;
  qDiv.appendChild(buttonTwo);

  let buttonThree = document.createElement("button");
  buttonThree.textContent = quizQuestions[0].choice3;
  buttonThree.dataset.answer = quizQuestions[0].answer;
  qDiv.appendChild(buttonThree);

  let buttonFour = document.createElement("button");
  buttonFour.textContent = quizQuestions[0].choice4;
  buttonFour.dataset.answer = quizQuestions[0].answer;
  qDiv.appendChild(buttonFour);

  buttonOne.onclick = function () {
    console.log("I clicked button 1");
  };
  buttonTwo.onclick = function () {
    console.log("I clicked button 2");
  };
  buttonThree.onclick = function () {
    console.log("I clicked button 3");
  };
  buttonFour.onclick = function () {
    console.log("I clicked button 4");
  };
}

//make clickable

startQuizButton.addEventListener("click", startQuiz);
