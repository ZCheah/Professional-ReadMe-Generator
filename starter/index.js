// Variables required for the program
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for users
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

    {
        type: "input",
        name: "title",
        message: "What is your projects name?"
    },

    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
    },

    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
    },

    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },

    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },

    {
        type: "input",
        name: "contributors",
        message: "What does the user need to know about contributing to the repo?"
    }
];

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}
9;

// function that initializes app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
}

// Function call to initialize app
init();