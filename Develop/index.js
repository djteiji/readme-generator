// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
      },

    {
        type: 'input',
        name: 'description',
        message: "Enter a desription of your project:",
      },

    {
        type: 'input',
        name: 'instructions',
        message: "Please enter instructions for installation:",
      },

    {
        type: 'input',
        name: 'usage',
        message: "Please enter application usage information:",
      },

    {
        type: 'input',
        name: 'guidelines',
        message: "Please enter guidelines for contributing to this project:",
      },

    {
        type: 'input',
        name: 'test',
        message: "Please enter instructions for testing this application:",
      },

    {
        type: 'checkbox',
        message: 'Which type of license does your application require?',
        name: 'license',
        choices: [
          {
            name: 'MIT',
          },
          {
            name: 'Apache',
          },
          {
            name: 'Boost',
          },
          {
            name: 'ISC',
          },
          { 
            name: 'GPL',
          },
        ],
        },

    {
          type: 'input',
          name: 'username',
          message: "What is your GitHub username?",
        },

    {
          type: 'input',
          name: 'email',
          message: "What is your email address?",
        }
  ]).then(({
    title,
    description,
    instructions,
    usage,
    guidelines,
    test,
    license,
    username,
    email
  })=> { 

    let licenseChosen = "";

    console.log(license);

    // switch statement

    switch (license[0]) {
      case "MIT":
       licenseChosen = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
        
      case "Apache":
        licenseChosen = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;

      case "Boost":
        licenseChosen = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        break;

      case "ISC": 
        licenseChosen = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        break;

      case "GPL":
        licenseChosen = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
    }


    const template = `# ${title}
    
  ${licenseChosen}
    
* [Description](#description)
* [Instrucitons](#instructions)
* [Usage](#usage)
* [Guidelines](#guidelines)
* [Test](#test)
* [License](#license)
# Description
    ${description}
# Instructions
    ${instructions}
## Usage
    ${usage}
## Guidelines
    ${guidelines}
## Test
    ${test}
## License
    ${license}
    
### Contact
* GitHub : ${username}
* Email : ${email}`

    writeToFile (title, template);

  })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./README.md`, data, (err) => {
    if (err) {
      console.log(err)
    }
    console.log("README Generated!");
  })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
