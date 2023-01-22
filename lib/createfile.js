const fs = require("fs");


//function to write README file
function createFile(data) {
    fs.writeFile(data.fileName +'.md', data, (err)=> {
        if(err) return console.log(err);
    
        console.log(`you have successfully created the ${data.fileName} file`);
    })


}

module.exports = createFile;