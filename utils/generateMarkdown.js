// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}`

  const toc = `## Table of Content`
  if(data.content.Installation){
    toc+=`*[Installation](#Installation)`
  }
  if(data.content.Usage){
    toc+=`*[Usage](#Usage)`
  }
  if(data.content.License){
    toc+=`*[License](#License)`
  }
  if(data.content.Contributors){
    toc+=`*[Contributors](#Contributors)`
  }
  if(data.content.Contacts){
    toc+=`*[Contacts](#Contacts)`
  }

  
  `## Installation
  ${data.installation}

  
  ## Usage
  ${data.usage}

  
  ## License
  ${data.license}

  
  ## Contributors
  ${data.contributors}

  
  ## Tests
  ${data.test}

  
  ## Contact
  Link to Repo: github.com/${data.questionRepo}
  Email: ${data.questionEmail}`

}

module.exports = generateMarkdown;
