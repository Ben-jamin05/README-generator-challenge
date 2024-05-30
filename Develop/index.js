const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");

const questions = ['What is the title of your project?', 
'Please enter a description of your project',
'Please enter the installation instructions',
'Please enter the usage information',
'Please enter contribution guidelines',
'Please enter test instructions',
'Please select a license for your project',
'What is your github username?',
'What is a good email to contact you?'
];

function init() {
    inquirer
      .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "description",
        },
        {
            type: "input",
            message: questions[2],
            name: "installation",
        },
        {
            type: "input",
            message: questions[3],
            name: "usage",
        },
        {
            type: "input",
            message: questions[4],
            name: "contribute",
        },
        {
            type: "input",
            message: questions[5],
            name: "test",
        },
        {
            type: "list",
            message: questions[6],
            name: "license",
            choices: [
                "MIT",
                "Apache 2.0",
                "GNU GPLv3"
            ],
        },
        {
            type: "input",
            message: questions[7],
            name: "github",
        },
        {
            type: "input",
            message: questions[8],
            name: "email",
          },
      ])
      .then((data) => {
        const README = generateMarkdown.generateMarkdownFn(data);
        const filename = `${data.title.toLowerCase().split(' ').join('_')}.md`;
    
        fs.writeFile(filename, README, (err) =>
          err
            ? console.log(err)
            : console.log("success! README file generated as", filename)
        );
      });
    }

init();
