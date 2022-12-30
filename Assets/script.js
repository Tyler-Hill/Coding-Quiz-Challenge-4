//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
let questionTitle = document.querySelector("#question");
let buttonGrid = document.querySelector("#btnGrid");

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

//functions
function startQuiz() {
  alert("I started the game");
  //bring up question 1
  questionTitle.append(quizQuestions[0].question);
  //add four answer options
  let btnOne = quizQuestions[0].choice1;
  let btnTwo = quizQuestions[0].choice2;
  buttonGrid.append(btnOne);
  buttonGrid.append(btnTwo);

  //make clickable
}

//function calls

startQuizButton.addEventListener("click", startQuiz);
