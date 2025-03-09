const quizData = [
    {
        question: "What is the primary cause of climate change?",
        options: [
            "Deforestation",
            "Burning fossil fuels",
            "Agriculture",
            "Volcanic activity"
        ],
        answer: 1
    },
    {
        question: "How does cutting down forests contribute to climate change?",
        options: [
            "Increases oxygen levels",
            "Reduces carbon dioxide absorption",
            "Cools the planet",
            "Prevents soil erosion"
        ],
        answer: 1
    },
    {
        question: "Which greenhouse gas is the largest contributor to global warming?",
        options: [
            "Methane",
            "Nitrous oxide",
            "Carbon dioxide",
            "Ozone"
        ],
        answer: 2
    },
    {
        question: "What is a simple action to reduce climate change?",
        options: [
            "Using more plastic",
            "Turning off unused appliances",
            "Driving gasoline cars",
            "Cutting down trees"
        ],
        answer: 1
    },
    {
        question: "What is a major effect of rising global temperatures?",
        options: [
            "Fewer storms",
            "Health improvements",
            "Melting polar ice caps",
            "Decrease in sea levels"
        ],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const submitButton = document.getElementById("submit-btn");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => selectOption(index);
        optionsElement.appendChild(button);
    });

    prevButton.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    nextButton.style.display = currentQuestionIndex === quizData.length - 1 ? "none" : "inline-block";
    submitButton.style.display = currentQuestionIndex === quizData.length - 1 ? "inline-block" : "none";
}

function selectOption(index) {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.classList.remove("selected"));
    buttons[index].classList.add("selected");
}

function nextQuestion() {
    if (checkAnswer()) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    currentQuestionIndex--;
    loadQuestion();
}

function checkAnswer() {
    const selectedButton = document.querySelector(".option-btn.selected");
    if (!selectedButton) return false;

    const selectedIndex = Array.from(optionsElement.children).indexOf(selectedButton);
    if (selectedIndex === quizData[currentQuestionIndex].answer) {
        score++;
    }

    return true;
}

function submitQuiz() {
    if (checkAnswer()) {
        questionElement.textContent = `You scored ${score} out of ${quizData.length}!`;
        optionsElement.innerHTML = "";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
        submitButton.style.display = "none";
    }
}

loadQuestion();
S