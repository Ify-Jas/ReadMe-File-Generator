const inquirer = require("inquirer");
const createFile = require('./createfile.js');
const prompt = inquirer.createPromptModule();

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
            name: 'file_name',
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
            name: 'Content',
            message: 'Do you want a table of content?'
        },
        {
            name: 'Installation',
            message: 'Is any installation required?'
        },
        {
            name: 'Usage',
            message: 'How is the project used?'
        },
        {
            name: 'License',
            message: 'What License does it use?'
        },
        {
            name: 'Contributors',
            message: 'Any contributors to this project?'
        },
        {
            name: 'Test',
            message: 'What testing platform was used?'
        },
        {
            name: 'Questions',
            message: 'Do you have further questions?'
        }
    ]

    prompt(questions).then(data =>{
        createFile();
    });


}



module.exports = {
    initiateQuestions: initiateQuestions,
    promptUser: promptUser

};

