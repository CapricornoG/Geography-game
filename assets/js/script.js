let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('your-score');
const questionNumberElement = document.getElementById('question-number');
const loader = document.getElementById('loader');
const game = document.getElementById('game_page');




fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple')
    .then(res => {
        if (!res.ok) {
            throw new Error("Failed to fetch questions from the API");
        }
        return res.json();
    })
    .then(data => stripMe(data.results))
    .then(newData => {
        
        questions = newData;
        game.classList.remove('hidden');
        loader.classList.add('hidden');
        displayQuestion();
    })
    .catch(error => {
        console.error(error);
       
        questions = backupQuestions;
        game.classList.remove('hidden');
        loader.classList.add('hidden');
        displayQuestion();
    });

function stripMe(questions) {
    if (!questions) return [];
    return questions.map(item => {
        return {
            "question": item.question,
            "answers": shuffle([
                ...item.incorrect_answers,
                item.correct_answer
            ]),
            correctAnswer: item.correct_answer
        }
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
       
        currentQuestionIndex++;
        displayQuestion();
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
            window.location.assign("./end_game.html");
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
}
