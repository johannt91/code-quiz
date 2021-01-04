var score = 0;

qIndex = 0;

//time values
var timeLeft = 75;
var penalty = 10;

var counter = document.getElementById("countdown");
var startBtn = document.getElementById("start");

//elements to be hidden and displayed
var instructionsEl = document.querySelector("#instructions");
var questionsEl = document.querySelector("#questions");
var checkAnswer = document.getElementById("#answer");

//answered
var answered = 0;

//question title
var questionTitle = document.getElementById("question");

//select options
var optionBtn1 = document.querySelector("#option1");
var optionBtn2 = document.querySelector("#option2");
var optionBtn3 = document.querySelector("#option3");
var optionBtn4 = document.querySelector("#option4");

//array to store questions as objects
var questions = [{
        question: "An array always starts at index:",
        options: ["null", "1", "-1", "0"],
        answer: "4"
    },{
        question: "A function within an object is called a ______.",
        options: ["key", "property", "method", "value"],
        answer: "3"
    },{
        question: "Arrays in JavaScript can be used to store _______",
        options: ["Booleans", "Numbers and strings", "Other arrays", "All of the above"],
        answer: "4"
    },{
        question: "Which of the following makes the browser display a text box asking for user input?",
        options: ["prompt", "alert", "form", "input"],
        answer: "2"
    },{
        question: "The condition in an if/else statement is enclosed within _____.",
        options: ["parentheses", "curly braces", "quotes", "commas"],
        answer: "1"
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





