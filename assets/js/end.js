/* jshint esversion: 6 */

const finalScore = document.getElementById('final-score-end');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

document.addEventListener("DOMContentLoaded", function() {
    const finalScore = document.getElementById('final-score-end');
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    finalScore.innerText = mostRecentScore;

    let personalisedMessage = '';
    if (mostRecentScore >= 8) {
        personalisedMessage = "Great job! You scored " + mostRecentScore + ". Can you beat it next time?";
    } else if (mostRecentScore >= 5) {
        personalisedMessage = "Well done! You scored " + mostRecentScore + ". Keep practicing to improve!";
    } else {
        personalisedMessage = "Nice try! You scored " + mostRecentScore + ". Practice more to get better results!";
    }

    const messageElement = document.createElement('p');
    messageElement.id = 'personalised-message';
    messageElement.classList.add('scale-in');
    messageElement.textContent = personalisedMessage;

    const endPage = document.getElementById('end-page');
    endPage.appendChild(messageElement);
});
