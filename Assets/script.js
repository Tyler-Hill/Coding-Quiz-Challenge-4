//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
let questionTitle = document.querySelector("#question");
let buttonGrid = document.querySelector("#btnGrid");
let buttonOne = document.querySelector("#btnOne");
let buttonTwo = document.querySelector("#btnTwo");
let buttonThree = document.querySelector("#btnThree");
let buttonFour = document.querySelector("#btnFour");
let buttons = document.getElementsByTagName("button");
let buttonsCount = buttons.length;

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
  let btnThree = quizQuestions[0].choice3;
  let btnFour = quizQuestions[0].choice4;
  buttonOne.append(btnOne);
  buttonTwo.append(btnTwo);
  buttonThree.append(btnThree);
  buttonFour.append(btnFour);

  //make clickable
}

function choiceClick() {
  for (let i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function () {
      alert(this.id);
    };
  }
}

startQuizButton.addEventListener("click", startQuiz);
buttonGrid.addEventListener("click", choiceClick);
