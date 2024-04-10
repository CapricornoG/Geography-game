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

function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    // Update HTML content to display the question and options
    questionElement.innerText = currentQuestion.question;

    optionsElement.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        optionsElement.appendChild(button);
    });
}

// Call the function to display the first question
displayQuestion();
