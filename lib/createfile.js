const fs = require("fs");
const userData = require('./questions.js');



//function to write README file
function createFile(data) {
    fs.writeFile(data.filename +'.txt', `${data}`, (err)=> {
        if(err) return console.log(err); 
    
        console.log(`you have successfully created the ${data.fileName} file`);
    })


}

module.exports = createFile;