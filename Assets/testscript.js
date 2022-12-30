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
let quizQuestionsCount = 0;

//functions
function startQuiz() {
  alert("I started the game");
  for (let i = 0; i <= quizQuestionsCount; i += 1) {
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

    qDiv.addEventListener("click", function (event) {
      console.log(event.target);
      let choice = event.target.innerHTML;
      let answer = event.target.dataset.answer;

      if (choice === answer) {
        alert("You chose the right answer");
      } else {
        alert("You chose the wrong answer");
      }
    });
  }
}

//make clickable

startQuizButton.addEventListener("click", startQuiz);
