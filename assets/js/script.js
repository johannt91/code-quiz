var score = 0;
var qIndex = 0;
var scoreList = [];


//time values
var timeLeft = 75;
var penalty = 10;

var counter = document.getElementById("countdown");
var startBtn = document.getElementById("start");

//elements to be hidden and displayed
var instructionsEl = document.querySelector("#instructions");
var questionsEl = document.querySelector("#questions");
var checkAnswer = document.getElementById("answer");
var yesNo = document.getElementById("right-wrong");
var submitScore = document.getElementById("submit-score");
var showScore = document.getElementById("score");
var finalScore = document.getElementById("final-score");

//answered
var answered = 0;

//question title
var questionTitle = document.getElementById("question");

//select options
var optionBtn1 = document.querySelector("#option1");
var optionBtn2 = document.querySelector("#option2");
var optionBtn3 = document.querySelector("#option3");
var optionBtn4 = document.querySelector("#option4");

//form to submit initials
var formEl = document.querySelector("form");

//array to store questions as objects
var questions = [{
        question: "An array always starts at index:",
        options: ["null", "1", "-1", "0"],
        answer: "0"
    },{
        question: "A function within an object is called a ______.",
        options: ["key", "property", "method", "value"],
        answer: "method"
    },{
        question: "Arrays in JavaScript can be used to store _______",
        options: ["Booleans", "Numbers and strings", "Other arrays", "All of the above"],
        answer: "All of the above"
    },{
        question: "Which of the following makes the browser display a text box asking for user input?",
        options: ["prompt", "alert", "form", "input"],
        answer: "prompt"
    },{
        question: "The condition in an if/else statement is enclosed within _____.",
        options: ["parentheses", "curly braces", "quotes", "commas"],
        answer: "parentheses"
    },
];

//timer
function countdown(){
    var startCountdown = setInterval(function(){
        timeLeft--;
        counter.textContent = timeLeft;

        if (timeLeft === 0 || qIndex === questions.length) {
            clearInterval(startCountdown);
        }
    },1000);
};


//start quiz
function startQuiz() {
    instructionsEl.style.display = "none";
    questionsEl.style.display = "block";
    checkAnswer.style.display = "none";
    submitScore.style.display = "none";

    answered = 0;
    countdown();
    generateQuestion(answered);
}

startBtn.addEventListener("click", startQuiz);


//function to generate and display questions
function generateQuestion() {
        questionTitle.textContent = questions[qIndex].question;
        optionBtn1.textContent = questions[qIndex].options[0];
        optionBtn2.textContent = questions[qIndex].options[1];
        optionBtn3.textContent = questions[qIndex].options[2];
        optionBtn4.textContent = questions[qIndex].options[3];
}

//display if answer is either correct or wrong
function validateAnswer (answer) {
    checkAnswer.style.display ="block";
    setTimeout(function() {
        checkAnswer.style.display ="none";
    },1500);

    if (questions[qIndex].answer === questions[qIndex].options[answer]) {
     yesNo.innerText = "Correct!"
     score++;
     console.log(score);
    }
    else {
        yesNo.innerText = "Wrong!"
        timeLeft -= penalty;
    }
    qIndex++;

    if (qIndex < questions.length) {
        generateQuestion();
    }
    else {
        endQuiz();
    }
}

//Check answers
function firstQuestion() { validateAnswer(0); }
function secondQuestion() { validateAnswer(1); }
function thirdQuestion() { validateAnswer(2); }
function fourthQuestion() { validateAnswer(3); }

//End Quiz
function endQuiz() {
    questionsEl.style.display = "none";
    submitScore.style.display = "flex";
    showScore.textContent = " " + score + "/5 ";
    finalScore.textContent = " " + timeLeft;
}

//submit initials with score
formEl.addEventListener("submit", function(event){
    event.preventDefault();
    var inputInitials = document.querySelector("input[name='initials']").value.toUpperCase();

    if (!inputInitials) {
        alert("Please type in your initials!");
        return false;
    }
    var highScores = {
        name: inputInitials,
        score: timeLeft
    };
    formEl.reset();
    scoreList.push(highScores);
    console.log(scoreList);
    localStorage.setItem("High Scores", JSON.stringify(scoreList));
});


//Event Listeners
startBtn.addEventListener("click", startQuiz);
optionBtn1.addEventListener("click", firstQuestion);
optionBtn2.addEventListener("click", secondQuestion);
optionBtn3.addEventListener("click", thirdQuestion);
optionBtn4.addEventListener("click", fourthQuestion);

