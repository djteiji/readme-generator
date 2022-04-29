// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');

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
        },
  ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
