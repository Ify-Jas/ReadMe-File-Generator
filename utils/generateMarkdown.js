// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Content
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributors](#Contributors)
  * [Tests](#Tests)
  * [Contacts](#Contacts)
  
  

  
  ## Installation
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
