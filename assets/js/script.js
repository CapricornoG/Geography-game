const game = document.getElementById('game-page');
const loader = document.getElementById('loader');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('your-score');
const questionNumberElement = document.getElementById('question-number');
const backupQuestions = [];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;

const goGetMeSomething = (url) => {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to fetch questions from the API");
            }
            return res.json();
        })
        .then(data => {
            questions = stripMe(data.results);
            game.classList.remove('hidden');
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
                    game.classList.remove('hidden');
                    loader.classList.add('hidden');
                    displayQuestion();
                })
                .catch(backupError => {
                    console.error("Error fetching backup questions:", backupError);
                });
        });
};

const stripMe = (questions) => {
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
};

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

const displayQuestion = () => {
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

    questionElement.innerHTML = `<h2 class="question">${currentQuestion.question}</h2>`;
    optionsElement.innerHTML = '';
    currentQuestion.answers.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option, currentQuestion));
        optionsElement.appendChild(button);
    });

    const totalQuestions = questions.length;
    const questionNumber = Math.min(currentQuestionIndex + 1, totalQuestions);
    questionNumberElement.innerHTML = `Question <span style="color: #FF5733;">${questionNumber}</span> of ${totalQuestions}`;
};

const checkAnswer = (selectedOption, currentQuestion) => {
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
};

const updateScoreDisplay = () => {
    scoreDisplay.textContent = score;
};

const updateTimerDisplay = () => {
    timerDisplay.textContent = `Time Left: ${timeLeft} seconds`;
};

goGetMeSomething('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple');
