//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
//let viewScores;
const quizQuestions = [
  {
    question: "Question 1 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 3 goes here.",
  },
  {
    question: "Question 2 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 3 goes here.",
  },
  {
    question: "Question 1 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 3 goes here.",
  },
  {
    question: "Question 1 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 3 goes here.",
  },
  {
    question: "Question 1 goes here.",
    choice1: "Choice 1 goes here.",
    choice2: "Choice 2 goes here.",
    choice3: "Choice 3 goes here.",
    choice4: "Choice 4 goes here.",
    answer: "Choice 3 goes here.",
  },
];

//functions
function startQuiz() {
  alert("I started the game");
  //bring up question 1
  let title = document.createElement("h2");
  title.textContent = "Who is the best magician?";
  questionDiv.appendChild(title);
  //add four answer options
  let btnOne = document.createElement("button");

  //make clickable
}

//function calls

startQuizButton.addEventListener("click", startQuiz);
