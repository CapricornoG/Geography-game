# Testing section
## Table of content
- [Testing section](#testing-section)
  - [Table of content](#table-of-content)
  - [Automated testing](#automated-testing)
    - [HTML validation with W3C Markup Validator](#html-validation-with-w3c-markup-validator)
    - [CSS validation with W3C CSS Validator](#css-validation-with-w3c-css-validator)
    - [JavaScript validation with JSHint](#javascript-validation-with-jshint)
    - [Accessibility using Lighthouse accessibility](#accessibility-using-lighthouse-accessibility)
  - [Manual Testing](#manual-testing)


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

 - **script.js** JSHint Warnings 

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

at the beginning of my script file, **no errors** and **no warnings** are then returing.

<details>
<summary>update script.js</summary>

![JSHintupdate](assets/images/script-JSHINT-solution.png)

</details>

### Accessibility using [Lighthouse accessibility](https://developer.chrome.com/docs/lighthouse/accessibility/)

|Pages|mobile|Desktop|
  |:--:|:--:|:--:|
  |**index.html**|![LH-mobile](assets/images/LH-mobile-index.png)|![LH-mobile](assets/images/LH-desktop-index.png)
  |**start-game.html**| |
  |**rules.html**|||
  |**end-game.html**|||





## Manual Testing