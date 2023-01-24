const fs = require("fs");
const inquirer = require("inquirer");
const initiateQuestions  = require("./lib/questions.js");




// function to initialize program
function init() {
    initiateQuestions.initiateQuestions();
       
}

// function call to initialize program
init();


