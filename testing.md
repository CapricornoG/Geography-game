# Testing section
## Table of content
- [Testing section](#testing-section)
  - [Table of content](#table-of-content)
  - [Automated testing](#automated-testing)
    - [HTML validation with W3C Markup Validator](#html-validation-with-w3c-markup-validator)
    - [CSS validation with W3C CSS Validator](#css-validation-with-w3c-css-validator)
    - [JavaScript validation with JSHint](#javascript-validation-with-jshint)
      - [**script.js** JSHint Warnings](#scriptjs-jshint-warnings)
      - [**end.js** JSHint Warnings](#endjs-jshint-warnings)
    - [Accessibility using Lighthouse accessibility](#accessibility-using-lighthouse-accessibility)
  - [Manual Testing](#manual-testing)
    - [Testing plan for **User Stories** .](#testing-plan-for-user-stories-)
    - [Testing plan for **User Goal** .](#testing-plan-for-user-goal-)
    - [Testing plan for **Features** .](#testing-plan-for-features-)
    - [Browser and device compatibility](#browser-and-device-compatibility)
  - [Unresolved Issues](#unresolved-issues)
    - [1. Bug Description: **Error Fetching Questions from External API**](#1-bug-description-error-fetching-questions-from-external-api)
    - [2. Bug Description: **Unable to Load Backup Questions**](#2-bug-description-unable-to-load-backup-questions)
  - [Fixed Bugs](#fixed-bugs)
    - [1. Bug Description: **Inconsistent Colour Usage Hindering Question Visibility**](#1-bug-description-inconsistent-colour-usage-hindering-question-visibility)
    - [2. Bug Description: ***Incorrect Update of Question Number and Score on End Page***](#2-bug-description-incorrect-update-of-question-number-and-score-on-end-page)
    - [3. Bug Description: ***Timer Not Restarting for Each New Question***](#3-bug-description-timer-not-restarting-for-each-new-question)
    - [4. Bug Description: ***Inadequate Colour Contrast for Correct Answers***](#4-bug-description-inadequate-colour-contrast-for-correct-answers)


## Automated testing

 ### HTML validation with [W3C Markup Validator](https://validator.w3.org/)
  |Pages|Outcome|Final|
  |:--:|:--:|:--:|
  |**index.html**||![IndexValidetion](/assets/images/W3C-index.png)|
  |**start-game.html**| **Issue extra h2 to be removed**![StartIssueValidetion](/assets/images/W3C-start-issue.png)|![StartValidetion](/assets/images/W3C-start.png-after.png)|
  |**rules.html**||![RulesValidation](assets/images/W3C-rules.png)|
  |**end-game.html**||![EndGameValidation](assets/images/W3C-end-game.png)|

HTML returns **no errors or warnings**.

  ### CSS validation with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

  Validate **styles.css** on **W3C**.

  ![stylesValidation](assets/images/W3C-styles.png)

  CSS returns **no errors or warnings**.

  ### JavaScript validation with [JSHint](https://jshint.com/)

 **JSHint** 

 #### **script.js** JSHint Warnings 

The warnings received from JSHint mainly pertain to the use of ES6 features without explicitly specifying ES6 as the target version. Here's a breakdown of the warnings:
-	'const' and 'let' Declarations: The use of const and let declarations indicates ES6 usage. JSHint suggests explicitly specifying ES6 using esversion: 6 in the configuration.
-	Arrow Function Syntax: Arrow function syntax (() => {}) is also an ES6 feature. It is advisable to specify ES6 explicitly if arrow functions are used.
-	Spread Operator: The use of the spread operator (...) is an ES6 feature. It is recommended to target ES6 explicitly in the configuration.
-	Template Literal Syntax: Template literal syntax (backticks) is an ES6 feature. It is advisable to specify ES6 explicitly if template literals are used.|


<details>
<summary>script.js</summary>

![JSHint](assets/images/script-JSHINT.png)

</details>

to do not have warning I add the comment 

      /* jshint esversion: 6 */

At the end of my script file, **no errors** and **no warnings** are then returing.

<details>
<summary>update script.js</summary>

![JSHintupdate](assets/images/script-JSHINT-solution.png)

</details>


#### **end.js** JSHint Warnings 

 **no errors** and **no warnings** are then returing.

 
<details>
<summary>end.js</summary>

![endJSHint](assets/images/endJS-JSHINT.png)

</details>

### Accessibility using [Lighthouse accessibility](https://developer.chrome.com/docs/lighthouse/accessibility/)

|Pages|mobile|Desktop|
  |:--:|:--:|:--:|
  |**index.html**|![LH-index-desktop](assets/images/LH-mobile-index.png)|![LH-index-mobile](assets/images/LH-desktop-index.png)|
  |**start-game.html**|![LH-start-mobile](assets/images/LH-mobile-start.png)|![LH-start-desktop](assets/images/LH-desktop-start.png)|
  |**rules.html**|![LH-rules-mobile](assets/images/LH-mobile-rules.png)|![LH-rules-desktop](assets/images/LH-desktop-rules.png)|
  |**end-game.html**|![LH-end-mobile](assets/images/LH-mobile-end.png)|![LH-end-desktop](assets/images/LH-desktop-end.png)|





## Manual Testing

### Testing plan for **User Stories** .

|User Story|	Test Case|	Steps|	Expected Result|Outcome|
|:--:|:--:|:--:|:---:|:---:|
|Start a New Game|	Open the game's homepage.<br> Click on the "Start Game" button.|1. Open the game's homepage.<br> 2. Click on the "Start Game" button.	|The game should start, and the player should be directed to the game page with the first question displayed.|![click-start](assets/images/Click%20on%20the%20Start%20Game.png)|
|Receive Multiple-Choice Questions|	Start a new game.<br> Answer the displayed questions.	|1. Start a new game.<br> 2. Answer the displayed questions.	|The player should receive multiple-choice questions related to world geography.<br> Each question should have multiple answer options for the player to choose from.| ![multipleAnswer](assets/images/multiple%20answer.png)|
|Timer for Each Question	|Start a new game.<br> Observe the timer for each question.	|1. Start a new game.<br> 2. Observe the timer for each question.	|A timer should be displayed for each question, indicating the remaining time for the player to answer.<br> The timer should count down from the specified time limit (e.g., 30 seconds).| ![timeLeft](assets/images/time%20left.png)|
|Know Correctness of Answers|Start a new game.<br> Answer questions correctly and incorrectly. 	|1. Start a new game.<br> 2. Answer questions correctly and incorrectly. 	|After submitting an answer, the player should receive immediate feedback indicating whether the answer is correct or incorrect.<br> Correct answers should be highlighted in green, and incorrect answers should be highlighted in red. | ![answer](assets/images/answer.png)|
|Track Current Score	|Start a new game.<br> Answer questions and observe the score. 	|1. Start a new game.<br> 2. Answer questions and observe the score. 	|The player's current score should be displayed and updated after answering each question.<br> Each correct answer should increment the score by one point. | ![scoreUpdate](assets/images/scoreUpdate.png)|
|End Game and View Final Score	|Answer all questions in the game.<br> Observe the end game screen. |1. Answer all questions in the game.<br> 2. Observe the end game screen. 	|After answering all questions, the game should end automatically.<br> The player should be directed to the end game screen, where the final score is displayed. | ![scoreEnd](assets/images/scoreEnd.png)|


### Testing plan for **User Goal** .

| Test Scenario                                    | Test Case                                                           | Steps                                                                                  | Expected Result                                                                                               |
|--------------------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **Assess Knowledge**                            |                                                                   |                                                                                        |                                                                                                               |
|                                                  | Users attempt to answer questions on countries, capitals, landmarks, and other geographical facts. | 1. Start a new game. <br> 2. Answer the displayed questions.                             | - The questions should cover a wide range of topics related to world geography. <br> - Users should feel challenged by the difficulty level of the questions.     |
| **Acquire New Knowledge**                       |                                                                   |                                                                                        |                                                                                                               |
|                                                  | Users play the quiz game to acquire new facts and knowledge about global geography. | 1. Start a new game. <br> 2. Observe the questions and answers. <br> 3. Note down any new facts learned during the game. | - Users should encounter questions that provide informative answers, expanding their knowledge of world geography. |
| **Experience Challenging Gameplay**             |                                                                   |                                                                                        |                                                                                                               |
|                                                  | Users expect a demanding experience that will test their brains and problem-solving abilities. | 1. Start a new game. <br> 2. Observe the complexity of the questions. <br> 3. Analyse the time limit provided for each question. | - Users should find the questions challenging enough to engage their problem-solving skills. <br> - The time limit for each question should add to the overall challenge without feeling too rushed. |
| **Improve Geography Skills**                    |                                                                   |                                                                                        |                                                                                                               |
|                                                  | Users hope to have a better grasp of global geography through playing the game. | 1. Start a new game. <br> 2. Answer questions and observe performance. <br> 3. Reflect on the knowledge gained during the game. | - Users should feel that their global geography skills have improved after playing the game, either through learning new facts or reinforcing existing knowledge. |

### Testing plan for **Features** .

| Feature                                                | Test Case                                                                       | Steps                                                                                                                                                                      | Expected Result                                                                                                                                                                                                                                                                                 |
|--------------------------------------------------------|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Homepage Features**                                 |                                                                                 |                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                |
|                                                        | Welcome message and game logo.                                                  | 1. Open the game's homepage. <br> 2. Observe the welcome message and game logo.                                                                                            | The welcome message and game logo should be prominently displayed on the homepage, welcoming the user to the game.                                                                                                                                                                            |
|                                                        | Start Game button to initiate the game.                                         | 1. Open the game's homepage. <br> 2. Click on the "Start Game" button.                                                                                                       | Clicking on the "Start Game" button should initiate the game and direct the player to the game page with the first question displayed.                                                                                                                                                      |
|                                                        | Rules button to view the game rules.                                            | 1. Open the game's homepage. <br> 2. Click on the "Rules" button.                                                                                                            | Clicking on the "Rules" button should navigate the user to the rules page where they can view the instructions on how to play the game.                                                                                                                                                     |
| **Game Page Features**                                |                                                                                 |                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                |
|                                                        | Displays questions one by one with multiple-choice options.                      | 1. Start a new game. <br> 2. Observe the questions and multiple-choice options displayed on the game page.                                                                  | Questions should be displayed one by one on the game page, each with multiple-choice options for the user to select from.                                                                                                                                                                      |
|                                                        | Timer indicating the time remaining to answer each question.                     | 1. Start a new game. <br> 2. Observe the timer displayed for each question.                                                                                                  | A timer should be displayed for each question, indicating the remaining time for the player to answer.                                                                                                                                                                                       |
|                                                        | Feedback on selected answers (correct or incorrect).                            | 1. Start a new game. <br> 2. Answer questions correctly and incorrectly.                                                                                                     | After submitting an answer, the player should receive immediate feedback indicating whether the answer is correct or incorrect.                                                                                                                                                             |
|                                                        | Score display showing the current score.                                       | 1. Start a new game. <br> 2. Observe the score display.                                                                                                                      | The player's current score should be displayed and updated after answering each question.                                                                                                                                                                                                    |
|                                                        | Question number indicator to track progress.                                    | 1. Start a new game. <br> 2. Observe the question number indicator.                                                                                                          | The question number indicator should display the current question number to help the player track their progress through the game.                                                                                                                                                           |
|                                                        | Navigation buttons to return to the homepage or view the rules.                 | 1. Start a new game. <br> 2. Observe the navigation buttons.                                                                                                                 | Navigation buttons should be provided to allow the player to return to the homepage or view the rules page at any time during the game.                                                                                                                                                      |
| **Rules Page Features**                               |                                                                                 |                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                |
|                                                        | Provides clear instructions on how to play the game.                            | 1. Navigate to the rules page. <br> 2. Read and understand the instructions provided.                                                                                      | The rules page should provide clear and concise instructions on how to play the game, including details on time limits, scoring system, and gameplay mechanics.                                                                                                                            |
|                                                        | Lists out the rules, including time limits and scoring system.                  | 1. Navigate to the rules page. <br> 2. Review the list of rules provided.                                                                                                    | The rules page should list out all the rules of the game, including information about time limits for answering questions and the scoring system used to calculate the final score.                                                                                                           |
|                                                        | Encourages users to test their geography knowledge.                             | 1. Navigate to the rules page. <br> 2. Read the content encouraging users to test their knowledge.                                                                           | The rules page should motivate users to engage with the game and test their geography knowledge by providing interesting facts or challenges related to world geography.                                                                                                                        |
| **End Game Page Features**                            |                                                                                 |                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                |
|                                                        | Displays the final score achieved by the user.                                  | 1. Finish the game and view the final score.                                                                                                                                | The end game page should display the final score achieved by the user during the game.                                                                                                                                                                                                       |
|                                                        | Presents a personalised message based on the score attained.                     | 1. Finish the game and view the final score.                                                                                                                                | A personalised message should be presented based on the score attained by the user, providing feedback or encouragement based on their performance in the game.                                                                                                                               |
|                                                        | Allows users to restart the game or return to the homepage.                      | 1. Finish the game and observe the options available.                                                                                                                        | The end game page should provide options for the user to either restart the game and play again or return to the homepage to explore other features of the game.                                                                                                                              |
| **Styling and Design Features**                       |                                                                                 |                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                |
|                                                        | Consistent design elements across all pages for a cohesive user experience.      | 1. Navigate through different pages of the game (home, start game, rules, end game). <br> 2. Observe design elements such as colours, fonts, and layout.                      | Design elements such as colours, fonts, and layout should be consistent across all pages of the game, providing a cohesive and visually appealing user experience.                                                                                                                        |
|                                                        | Responsive design to ensure compatibility with various devices and screen sizes.| 1. Access the game on different devices (desktop, mobile, tablet).                                                                                                          | The game should adapt and display properly on various devices and screen sizes, ensuring optimal user experience regardless of the device used.                                                                                                                                               |
|                                                        | Use of CSS animations for interactive elements such as buttons and logo rotation.| 1. Interact with buttons or observe animations on the game pages.                                                                                                           | Interactive elements such as buttons should feature CSS animations to enhance user engagement, and the game logo may include rotation animation for visual appeal.                                                                                                                         |
|                                                        | Clear typography and colour scheme for readability and visual appeal.           | 1. Read text content on different pages of the game. <br> 2. Observe the colour scheme used.                                                                                  | Typography should be clear and legible, and the colour scheme should be visually appealing while ensuring readability of text content across all pages of the game.                                                                                                                          |
| **JavaScript Functionality Features**                 |                                                                                 |                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                |
|                                                        | Fetches questions from an external API (or uses backup questions if API call fails). | 1. Start a new game. <br> 2. Observe the source of questions displayed.                                                                                                      | Questions should be fetched from an external API, or if the API call fails, backup questions should be used to ensure uninterrupted gameplay.                                                                                                                                              |
|                                                        | Dynamically displays questions and options based on the retrieved data.         | 1. Start a new game. <br> 2. Observe how questions and options are displayed.                                                                                                 | Questions and options should be dynamically displayed based on the retrieved data, providing a seamless and engaging experience for the player.                                                                                                                                            |
|                                                        | Implements a timer for each question to create a sense of urgency.               | 1. Start a new game. <br> 2. Observe the timer for each question.                                                                                                            | A timer should be implemented for each question, creating a sense of urgency and challenging the player to answer within the specified time limit.                                                                                                                                         |
|                                                        | Validates user-selected answers against correct answers and updates the score accordingly. | 1. Start a new game. <br> 2. Answer questions correctly and incorrectly.                                                                                                     | After submitting an answer, the game should validate the user-selected answer against the correct answer and update the score accordingly, reflecting the player's performance accurately.                                                                                                  |
|                                                        | Manages navigation between pages and stores/retrieves the user's final score.    | 1. Navigate between game pages (home, start game, rules, end game). <br> 2. Finish the game and view the final score.                                                        | The game should effectively manage navigation between pages, allowing the player to move seamlessly through the game. Additionally, the game should accurately store and retrieve the user's final score for display on the end game page.                                                 |

### Browser and device compatibility


| Feature                             | Test Case                                                                       | Steps                                                                                                           | Expected Result                                                                                                                                                                         |
|-------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Browser Compatibility**           |                                                                                 |                                                                                                                 |                                                                                                                                                                                          |
|                                     | Test the game on various browsers to ensure compatibility.                     | 1. Open the game in Google Chrome, Opera, and Microsoft Edge browsers.                                           | The game should load and function correctly on all tested browsers without any significant layout or functionality issues.                                                             |
|                                     |                                                                                 |                                                                                                                 |                                                                                                                                                                                          |
| **Device Compatibility**            |                                                                                 |                                                                                                                 |                                                                                                                                                                                          |
|                                     | Test the game on different devices to ensure responsiveness.                   | 1. Access the game on desktop computers, laptops, tablets, and smartphones.                                    | The game should adapt to different screen sizes and resolutions, providing a smooth and intuitive user experience across various devices.                                               |
|                                     | Test the game on different operating systems (Windows, macOS, iOS, Android).    | 1. Access the game on devices running different operating systems.                                               | The game should function properly on devices running different operating systems, ensuring consistent performance and functionality.                                                      |
|                                     | Test touch functionality on touchscreen devices.                                | 1. Access the game on Samsung Galaxy S21 and iPhone SE smartphones.                                              | All interactive elements of the game, including buttons and navigation, should be responsive and easy to use on touchscreen devices, providing an optimal user experience.              |
| **Test Results**                   |                                                                                 |                                                                                                                 |                                                                                                                                                                                          |
|                                     | Results                                                                         |                                                                                                                 |                                                                                                                                                                                          |
|                                     |                                                                                 |                                                                                                                 |                                                                                                                                                                                          |
|                                     | Browser Compatibility Test:                                                    |                                                                                                                 |                                                                                                                                                                                          |
|                                     | Google Chrome                                                                   | Game loaded and functioned correctly.                                                                         |                                                                                                                                                                                          |
|                                     | Opera                                                                           | Game loaded and functioned correctly.                                                                         |                                                                                                                                                                                          |
|                                     | Microsoft Edge                                                                  | Game loaded and functioned correctly.                                                                         |                                                                                                                                                                                          |
|                                     |                                                                                 |                                                                                                                 |                                                                                                                                                                                          |
|                                     | Device Compatibility Test:                                                     |                                                                                                                 |                                                                                                                                                                                          |
|                                     | Samsung Galaxy S21                                                              | Game adapted well to the screen size and touch functionality worked as expected.                                |                                                                                                                                                                                          |
|                                     | iPhone SE                                                                       | Game adapted well to the screen size and touch functionality worked as expected.                                |                                                                                                                                                                                          |


## Unresolved Issues
### 1. Bug Description: **Error Fetching Questions from External API**

**Problem:**
When attempting to fetch questions from the external API (`https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple`), the browser returns a status code `429`, indicating "Too Many Requests". This prevents the questions from being fetched, leading to an error in the quiz functionality.

**Solution:**
To resolve this issue and ensure uninterrupted quiz functionality, I implemented a fallback mechanism to load backup questions from the local data source (`backup-question.json`) when fetching from the external API fails.

**Steps Taken:**
1. Modified the `goGetMeSomething` function in `script.js` to handle errors when fetching questions from the external API.
2. Added a `catch` block to handle the `429` error (Too Many Requests) returned by the external API.
3. In the `catch` block, I logged the error message and proceeded to load backup questions from the local data source (`backup-question.json`).
4. By implementing this fallback mechanism, the quiz functionality remains robust and unaffected by errors in fetching questions from the external API.
5. Additionally, I ensured that the quiz continues to function seamlessly by displaying backup questions to the user in case of any issues with the external API.

This solution ensures that the quiz remains functional and provides a consistent user experience, regardless of any errors encountered while fetching questions from the external API.

### 2. Bug Description: **Unable to Load Backup Questions**

**Problem:**
When the server is not active, the website is unable to fetch backup questions from the `backup-question.json` file using the JavaScript `fetch()` API. This results in the quiz not functioning properly when deployed without an active server.

**Solution:**
To address this issue, I opted to load the backup questions directly from the JavaScript file (`script.js`) instead of relying on fetching from the server.

**Steps Taken:**
1. Instead of fetching questions from the server, I included the backup questions directly in the JavaScript file (`script.js`) as an array named `backupQuestions`.
2. Modified the logic in the `goGetMeSomething` function in `script.js` to handle the case where fetching from the server fails.
3. Added a `catch` block to handle errors when fetching questions from the server.
4. In the `catch` block, I logged the error message and assigned the `backupQuestions` array to the `questions` variable, ensuring that the quiz functions properly even when the server is not available.
5. With this modification, the website is now able to load backup questions directly from the JavaScript file, ensuring consistent functionality regardless of the server status.

This approach ensures that the quiz functionality remains robust and reliable, with backup questions readily available within the JavaScript code itself.

## Fixed Bugs

### 1. Bug Description: **Inconsistent Colour Usage Hindering Question Visibility**

**Problem:**
Previously, the quiz application used green as the primary colour for various elements, including question text, answer options, and other UI components. However, this colour choice led to poor visibility and readability, especially when displaying correct answers.

**Solution:**
To address this issue and improve the visibility of questions and answer options, I implemented a solution to use different colours strategically, ensuring better contrast and clarity in the UI.

### 2. Bug Description: ***Incorrect Update of Question Number and Score on End Page***

***Problem:***
After answering the last question, the quiz application incorrectly displayed an additional question number before transitioning to the end page. Additionally, the end page did not update the score accurately.

***Solution:***
I fixed the logic responsible for updating the question number and score on the end page to ensure correct display and accuracy.

### 3. Bug Description: ***Timer Not Restarting for Each New Question***

***Problem:***
The timer in the quiz application did not reset when displaying a new question, leading to inconsistent behaviour and potentially incorrect timing for answering questions.

***Solution:***
I modified the timer functionality to reset properly for each new question, ensuring accurate timing and a consistent user experience.

### 4. Bug Description: ***Inadequate Colour Contrast for Correct Answers***

***Problem:***
The quiz application used green colour for everything, making it difficult to differentiate between correct and incorrect answers due to poor colour contrast.

***Solution:***
I adjusted the colour scheme to use blue for questions and answer options, reserving green specifically for highlighting correct answers, thus improving colour contrast and enhancing visibility.

By addressing these bugs, the quiz application now functions more reliably and provides an improved user experience with better functionality, readability, and visual clarity.

\
&nbsp;
[Back to README](README.md)
\
&nbsp;