const inquirer = require("inquirer");
const createFile = require('./createfile.js');
const prompt = inquirer.createPromptModule();
const fs = require("fs");


function initiateQuestions(){
    console.log('----Welcome to the file generator----');
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: 'Would you like to generate a file?'
        }
    ]).then(data =>{
        if(data.choice){
            return promptUser();
        }
        
       console.log('Thank you for using the file generator');
       
    })
}

function promptUser() {
    const questions = [
        {
            name: 'filename',
            message: 'What is the name of your file?'
        },
        {
            name: 'Title',
            message: 'What is the title of your project?'
        },
        {
            name: 'Description',
            message: 'Can you briefly describe you project?'
        },
        {
            type: 'confirm',
            name: 'Content',
            message: 'Do you want a table of content?',
            validate: function(answer){
                if(answer) {
                    fs.appendFile(data.content, data['Title', 'Description', 'Installation', 'usage', 'License','Contributors','contacts'], (err)=>{})
                    
                }
            }
        },
        {
            name: 'Installation',
            message: 'What installation is required?'
        },
        {
            name: 'Usage',
            message: 'How is the project used?'
        },
        {
            type: 'list',
            name: 'License',
            message: 'What License does it use?',
            choices: ['MIT', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Eclipse Public License 1.0', 'GNU General Public License v2.0']
        },
        {
            name: 'Contributors',
            message: 'List any contributors to this project?'
        },
        {
            name: 'Test',
            message: 'What testing platform was used?'
        },
        {
            name: 'Questions',
            message: 'Add you email for further questions?'
        }
    ]

    prompt(questions).then(data =>{
        
        createFile(data);
    });


}



module.exports = {
    initiateQuestions: initiateQuestions,
    promptUser: promptUser

};

