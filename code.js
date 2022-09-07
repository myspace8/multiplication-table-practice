const sampleQuestion = document.querySelector('.sample-question');
const actualQuestion = document.querySelector('.actual-question');
const startingContainer = document.querySelector('.starting-container');
const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const answer = document.querySelector('.answer'); 
const buttons = document.querySelectorAll('button');
const startBtn = document.querySelector('.start-btn');
const score = document.querySelector('.score-count');
const startAgainBtn = document.querySelector('.startAgainBtn');
const timing = document.querySelector('.time-count');


// Disable all buttons
buttons.forEach(button => {
    button.disabled = true;
})

startAgainBtn.style.display = 'none';

// Assigning a random number to the second number & issuing statements
let randomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
secondNumber.innerHTML = randomNumber; 

startBtn.addEventListener('click', ()=> {


    let counter = 61;
    var timer = setInterval(() => {
        counter--;
        timing.innerHTML = counter;
        if ( counter < 1 ) {
            clearInterval(timer);
            startAgainBtn.style.display = 'none';
            buttons.forEach(button => {
                button.disabled = true;
                // startAgainBtn.addEventListener('click', () => {
                    
                //     // TO-DO... ADD START AGAIN FUNCTIONS
                // })
            })
        }    
    }, 1000);


    buttons.forEach(function(button) {
        button.onclick = (function() {
            answer.innerHTML = button.dataset.value;
            if ( Number(firstNumber.innerHTML) * randomNumber == Number(answer.innerHTML)) {
                randomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                secondNumber.innerHTML = randomNumber; 
                // setTimeAgain();
                myScoreIncrement();   
            } else {
                myScoreDecrement();
            }
        })
    })
    

    // Pause count and reset it zero
    function setTimeAgain() {
        clearInterval(timer);
        timing.innerHTML = 0;
    }

    startingContainer.style.display = 'none';
    sampleQuestion.style.display = 'none';
    actualQuestion.style.display = 'block';
    buttons.forEach(button => {
        button.disabled = false;
    })
})

// Sample question carosel
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain an element to shuffle
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

var sampleQuestionsDisplay = ['2 X 1 = 2', '2 X 2 = 4',
 '2 X 3 = 6', '2 X 4 = 8', '2 X 5 = 10', '2 X 6 = 12',
'2 X 7 = 14', '2 X 8 = 16', '2 X 9 = 18', '2 X 10 = 20',
 '2 X 11 = 22', '2 X 12 = 24'];


function sampleQuestionsDisplayTiming() {
    setInterval(inner, 3000);
}

function inner() {
    shuffle(sampleQuestionsDisplay);
    sampleQuestion.innerHTML = (sampleQuestionsDisplay[1]);
}

sampleQuestionsDisplayTiming();



if(!localStorage.getItem('myScoreCount')) {
    localStorage.setItem('myScoreCount', 0);
}
score.innerHTML = localStorage.getItem('myScoreCount');

function myScoreIncrement() {
    let myScoreCount = localStorage.getItem('myScoreCount');
    myScoreCount++;
    score.innerHTML = myScoreCount;
    localStorage.setItem('myScoreCount', myScoreCount); 
}

function myScoreDecrement() {
    let myScoreCount = localStorage.getItem('myScoreCount');
    myScoreCount--;
    score.innerHTML = myScoreCount;
    localStorage.setItem('myScoreCount', myScoreCount); 
}




