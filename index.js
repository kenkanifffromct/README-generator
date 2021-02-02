const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('generateMarkdown.js');

//array of questions for user input
const questions = [

    {
        type: 'input',
        default: 'Project Title',
        message: 'Please provide the title of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter the name of your repo you are using (case-sensitive)',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'Could you please describe your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: "What tools are needed to install your app?",
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide the instructions for using your app',
        name: 'usage'
    },
    {
        type: 'input',
        message: "Are there any contributors you'd like to credit?",
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Did your app pass all the tests?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Which of these licenses did you use?',
        choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'Mozilla', 'Apache2.0', 'MIT', 'Boost1.0', 'Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please provide your Github username',
        name: 'gitname'
    },
    {
        type: 'input',
        message: 'Please provide your email so any questions can be forwarded there',
        name: 'email'
    }
];

//a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }

        console.log("Congrats my dude! Here's your README!")
    });
};

const writeFileAsync = util.promisify(writeToFile);

// a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        console.log(markdown);

        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();