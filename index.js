const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questionPrompt = require('./lib/questions.js');
const prompt = inquirer.createPromptModule();



// function to write README file
function createFile() {
    .then(data => {
        fs.writeFile(data.fileName +'.md', data.content, (err)=> {
            if(err) return console.log(err);
        
            console.log(`you have successfully created the ${data.fileName} file`);
        })
    
    })

}

// function to initialize program
function init() {
    createFile();
    
}

// function call to initialize program
init();
