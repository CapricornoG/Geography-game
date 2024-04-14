let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;

const questionContainer = document.querySelector('#question');
const optionsContainer = document.querySelector('#options');
const timerDisplay = document.querySelector('#timer');
const scoreDisplay = document.querySelector('#your-score');
const questionNumberDisplay = document.querySelector('#question-number');
const loader = document.querySelector('#loader');
const gamePage = document.querySelector('#game-page');

const backupQuestions = [];

const fetchQuestions = (url) => {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to fetch questions from the API");
            }
            return res.json();
        })
        .then(data => {
            questions = stripQuestions(data.results);
            gamePage.classList.remove('hidden');
            loader.classList.add('hidden');
            displayQuestion();
        })
        .catch(error => {
            console.error("Error fetching questions:", error);
            fetch('http://localhost:5500/assets/data/backup-question.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch backup questions');
                    }
                    return response.json();
                })
                .then(backupData => {
                    questions = backupData;
                    gamePage.classList.remove('hidden');
                    loader.classList.add('hidden');
                    displayQuestion();
                })
                .catch(backupError => {
                    console.error("Error fetching backup questions:", backupError);
                });
        });
};

fetchQuestions('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple');

function stripQuestions(questions) {
    if (!questions) return [];
    return questions.map(item => {
        return {
            "question": item.question,
            "answers": shuffle([
                ...item.incorrect_answers,
                item.correct_answer
            ]),
            correctAnswer: item.correct_answer
        };
    });
}

function displayQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimerDisplay();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer('timeout');
        }
    }, 1000);

    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
        return;
    }

    questionContainer.innerHTML = `<h2 class="question">${currentQuestion.question}</h2>`;
    optionsContainer.innerHTML = '';
    currentQuestion.answers.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option, currentQuestion));
        optionsContainer.appendChild(button);
    });

    const totalQuestions = questions.length;
    const questionNumber = Math.min(currentQuestionIndex + 1, totalQuestions);
    questionNumberDisplay.innerHTML = `Question <span style="color: #FF5733;">${questionNumber}</span> of ${totalQuestions}`;
}

function checkAnswer(selectedOption, currentQuestion) {
    clearInterval(timer);

    const cleanedSelectedOption = selectedOption.trim().toLowerCase();
    const cleanedCorrectAnswer = currentQuestion ? currentQuestion.correctAnswer.trim().toLowerCase() : null;
    const classToApply = currentQuestion && cleanedSelectedOption === cleanedCorrectAnswer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
        score++;
        updateScoreDisplay();
    }

    const optionButtons = Array.from(document.querySelectorAll('.option'));
    const selectedButton = optionButtons.find(button => button.innerText.trim().toLowerCase() === cleanedSelectedOption);

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
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            localStorage.setItem("mostRecentScore", score);
            window.location.assign("./end-game.html");
        }
    }, 1000);
}

function updateScoreDisplay() {
    scoreDisplay.textContent = score;
}

function updateTimerDisplay() {
    timerDisplay.textContent = `Time Left: ${timeLeft} seconds`;
}

const shuffle = (array) => {
    let oldElement;
    for (let i = array.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        oldElement = array[i];
        array[i] = array[rand];
        array[rand] = oldElement;
    }
    return array;
};
