//global variables
let startQuizButton = document.querySelector("#startQuiz");
let saveScore = document.querySelector("#saveInitials");
let questionTitle = document.querySelector("#question");
let buttonGrid = document.querySelector("#btnGrid");
let buttonOne = document.querySelector("#btnOne");
let buttonTwo = document.querySelector("#btnTwo");
let buttonThree = document.querySelector("#btnThree");
let buttonFour = document.querySelector("#btnFour");

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
  for (let i = 0; i < quizQuestionsCount; i += 1) {
    questionTitle.append(quizQuestions[i].question);
    //add four answer options
    let btnOne = quizQuestions[i].choice1;
    let btnTwo = quizQuestions[i].choice2;
    let btnThree = quizQuestions[i].choice3;
    let btnFour = quizQuestions[i].choice4;
    buttonOne.append(btnOne);
    buttonTwo.append(btnTwo);
    buttonThree.append(btnThree);
    buttonFour.append(btnFour);
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
}

startQuizButton.addEventListener("click", startQuiz);
