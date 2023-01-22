const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const initiateQuestions  = require("./lib/questions.js");




// function to initialize program
function init() {
    initiateQuestions.initiateQuestions();
       
}

// function call to initialize program
init();


