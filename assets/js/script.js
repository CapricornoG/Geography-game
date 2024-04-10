const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest country by land area?",
        options: ["United States", "Canada", "Russia", "China"],
        answer: "Russia"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "Which continent is the least populated?",
        options: ["Africa", "Europe", "Australia", "Antarctica"],
        answer: "Antarctica"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Euro", "Yen", "Dollar"],
        answer: "Yen"
    },
    {
        question: "What is the official language of Brazil?",
        options: ["Portuguese", "Spanish", "English", "French"],
        answer: "Portuguese"
    },
    {
        question: "Which desert is the largest in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        answer: "Sahara Desert"
    },
    {
        question: "Which mountain range is the highest in the world?",
        options: ["Rocky Mountains", "Andes", "Himalayas", "Alps"],
        answer: "Himalayas"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let displayedQuestions = [];
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const optionButtons = [];
const timerDisplay = document.getElementById('timer');
const timerInterval = 1000;
let timer;
let timeLeft;
const scoreDisplay = document.getElementById('your-score');

function displayQuestion() {
    timeLeft = 10;
    updateTimerDisplay();
    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer('timeout');
        }
    }, timerInterval);

    if (displayedQuestions.length === questions.length) {
        endGame();
        return;
    }

    let remainingQuestions = questions.filter(question => !displayedQuestions.includes(question));
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const currentQuestion = remainingQuestions[randomIndex];
    displayedQuestions.push(currentQuestion);
    questionElement.innerHTML = `<h2 class="question">${currentQuestion.question}</h2>`;

    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option, currentQuestion));
        optionsElement.appendChild(button);
        optionButtons.push(button);
    });

    displayQuestion.optionButtons = optionButtons;
}

function updateTimerDisplay() {
    timerDisplay.textContent = `Time Left: ${timeLeft} seconds`;
}
function checkAnswer(selectedOption, currentQuestion) {
    clearInterval(timer);

    if (!currentQuestion) {
        console.log("Timer ran out!");
        return;
    }

    const cleanedSelectedOption = selectedOption.trim().toLowerCase();
    const cleanedCorrectAnswer = currentQuestion.answer.trim().toLowerCase();
    const classToApply = cleanedSelectedOption === cleanedCorrectAnswer ? 'correct' : 'incorrect';
    
    if (classToApply === 'correct') {
        score++;
        updateScoreDisplay();
    }
    
    const optionButtons = Array.from(document.querySelectorAll('.option'));
    const selectedButton = optionButtons.find(button => button.innerText.trim().toLowerCase() === cleanedSelectedOption);
    const correctButton = optionButtons.find(button => button.innerText.trim().toLowerCase() === cleanedCorrectAnswer);

    if (selectedButton) {
        selectedButton.classList.add(classToApply);
    }

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        optionButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
            button.disabled = false;
        });
        displayQuestion();
    }, 1000);
}

function updateScoreDisplay() {
    scoreDisplay.textContent = score;
}

displayQuestion();
