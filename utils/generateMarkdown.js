function generateMarkdown(data) {
  return `# ${data.title}

  ---

  ## **Description**
  ${data.description}

  ---

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ---

  ## **Installation**
  ${data.installation}

  ---

  ## **Usage**
  ${data.usage}

  ---


  ## **License**
  ${data.license}

  ---

  ## **Contributors**
  ${data.contributions}

  --

  ## **Tests**
  ${data.tests}

  --

  ## **Questions**
  If you have any questions, please email me at: ${data.email}


`;
}

module.exports = generateMarkdown;
