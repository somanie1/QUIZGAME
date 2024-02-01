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
    },
    {
        question: "What is the official language of Ireland?",
        answers: [
            { text: "Spanish", correct: false},
            { text: "English", correct: true},
            { text: "French", correct: false},
            { text: "Italian", correct: false},
        ]
    },
    {
        question: "What is the highest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true},
            { text: "Mount Kilimanjaro", correct: false},
            { text: "Mount Sinai", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "What is a group of whales called?",
        answers: [
            { text: "ocean", correct: false},
            { text: "fishery", correct: false},
            { text: "pod", correct: true},
            { text: "pond", correct: false},
        ]
    },
    {
        question: "Which of these options is not an African country?",
        answers: [
            { text: "Algeria", correct: false},
            { text: "Comoros", correct: false},
            { text: "Tunisia", correct: false},
            { text: "Malta", correct: true},
        ]
    },
    {
        question: "What is a female deer called?",
        answers: [
            { text: "Den", correct: false},
            { text: "Doe", correct: true},
            { text: "Deen", correct: false},
            { text: "Deer", correct: false},
        ]
    },
    {
        question: "What is the capital of Portugal?",
        answers: [
            { text: "Lisbon", correct: true},
            { text: "Tokyo", correct: false},
            { text: "Paris", correct: false},
            { text: "Berlin", correct: false},
        ]
    },
    {
        question: "What country has the highest life expectancy rate?",
        answers: [
            { text: "Hong Kong", correct: true},
            { text: "China", correct: false},
            { text: "Japan", correct: false},
            { text: "India", correct: false},
        ]
    },
    {
        question: "What year was the United Nations established?",
        answers: [
            { text: "1965", correct: false},
            { text: "1945", correct: true},
            { text: "1944", correct: false},
            { text: "1950", correct: false},
        ]
    },
    {
        question: "Which language has the most native speakers?",
        answers: [
            { text: "Spanish", correct: true},
            { text: "English", correct: false},
            { text: "French", correct: false},
            { text: "Italian", correct: false},
        ]
    },
    {
        question: "What car manufacturer had the highest revenue in 2020?",
        answers: [
            { text: "Toyota", correct: false},
            { text: "Mercedes Benz", correct: false},
            { text: "BMW", correct: false},
            { text: "Volkswagen", correct: true},
        ]
    },
    {
        question: "How many faces does a decagon have?",
        answers: [
            { text: "8", correct: false},
            { text: "12", correct: false},
            { text: "10", correct: true},
            { text: "6", correct: false},
        ]
    },
    {
        question: "What is the disease caused by vitamin c deficiency?",
        answers: [
            { text: "Astigmatism", correct: false},
            { text: "Haemophilia", correct: false},
            { text: "Scurvy", correct: true},
            { text: "Kwashiokor", correct: false},
        ]
    },
    {
        question: "What is the hottest panet in the milky way?",
        answers: [
            { text: "Uranus", correct: false},
            { text: "Venus", correct: true},
            { text: "Mecury", correct: false},
            { text: "Jupiter", correct: false},
        ]
    },
    {
        question: "What country has won the most worldcups?",
        answers: [
            { text: "Portugal", correct: false},
            { text: "Brazil", correct: true},
            { text: "Argentina", correct: false},
            { text: "Engand", correct: false},
        ]
    },
    {
        question: "What city is known as the Eternal City?",
        answers: [
            { text: "Rome", correct: true},
            { text: "Paris", correct: false},
            { text: "Rio", correct: false},
            { text: "Moscow", correct: false},
        ]
    },
    {
        question: "What is the most common surname in the United States?",
        answers: [
            { text: "Bush", correct: false},
            { text: "Washington", correct: false},
            { text: "Jones", correct: false},
            { text: "Smith", correct: true},
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

