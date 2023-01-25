const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown.js");
const path = require('path');



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

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function promptUser() {
    const questions = [
        {
            name: 'fileName',
            message: 'What is the name of your file?'
        },
        {
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Can you briefly describe you project?'
        },
        {
            type: 'checkbox',
            name: 'installation',
            message: 'What installation is required?',
            choices: ['Node.js', 'NPM init', 'NPM install inquirer']
        },
        {
            name: 'usage',
            message: 'How is the project used?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What License does it use?',
            choices: ['MIT', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Eclipse Public License 1.0', 'GNU General Public License v2.0']
        },
        {
            name: 'contributors',
            message: 'List any contributors to this project?'
        },
        {
            name: 'test',
            message: 'What testing platform was used?'
        },
        {
            name: 'questionRepo',
            message: 'Add your Github username'
        },
        {
            name: 'questionEmail',
            message: 'Add your email for further questions'
        }
    ]

    prompt(questions).then(data =>{
        console.log(data);
        writeToFile(`${data.fileName}`+'.md', generateMarkdown({...data}));
    });


}



module.exports = {
    initiateQuestions: initiateQuestions,
    promptUser: promptUser

};

