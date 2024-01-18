const questions = [
    {
        question: "How many continents are in the world?",
        answers: [
            { text: "3", correct: false},
            { text: "5", correct: false},
            { text: "7", correct: true},
            { text: "10", correct: false},
        ]
    },
    {
        question: "What is the capital of Nigeria?",
        answers: [
            { text: "Lagos", correct: false},
            { text: "Ibadan", correct: false},
            { text: "Capetown", correct: false},
            { text: "FCT", correct: true},
        ]
    },
    {
        question: "Who is the current president of the United States?",
        answers: [
            { text: "George Bush", correct: false},
            { text: "Elon Musk", correct: false},
            { text: "Joe Biden", correct: true},
            { text: "Steve Jobbs", correct: false},
        ]
    },
    {
        question: "What is the official language of Mexico?",
        answers: [
            { text: "Spanish", correct: true},
            { text: "English", correct: false},
            { text: "French", correct: false},
            { text: "Italian", correct: false},
        ]
    },
    {
        question: "How many days are in a leap year?",
        answers: [
            { text: "366", correct: true},
            { text: "365", correct: false},
            { text: "300", correct: false},
            { text: "none of the above", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.InnerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

