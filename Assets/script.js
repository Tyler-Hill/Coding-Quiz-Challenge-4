//global variables
let startQuizButton = document.querySelector('#startQuiz');



//functions
function startQuiz() {
    alert('I started the game')
    //bring up question 1
    let title = document.createElement('h2');
    title.textContent = 'Who is the best magician?';
    questionDiv.appendChild(title);
    //add four answer options
    let btnOne = document.createElement('button')
    //make clickable

}



//function calls

startQuizButton.addEventListener('click', startQuiz);