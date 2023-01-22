const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

function promptUser() {
    const questions = [
        {
            name: 'Title',
            message: 'What is the title of your project'
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
            message: 'How is the project used'
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
            message: 'What testing platform was used'
        },
        {
            name: 'Questions',
            message: 'Do you have further questions?'
        }
    ]

    prompt(questions).then(data =>{});


}



module.exports = promptUser;
