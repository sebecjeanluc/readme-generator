const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	},
	{
		type: 'input',
		name: 'projectTitle',
		message: 'What is your project name?',
	},
]

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(`./export/${fileName}`, data, (err) =>
		err ? console.log(err) : console.log('Success!')
	)
}

function generateQuestions() {
	const questionList = []
	questions.forEach((question) => {
		console.log(question)
		questionList.push(question)
	})
	return questionList
}

// function to initialize program
function init() {
	inquirer
		.prompt(generateQuestions())

		.then((answers) => {
			console.log(answers)
			const nameAnswer = answers.name
			const content = generateMarkdown(answers)
			writeToFile('README.md', content)
		})

		.catch((error) => {
			console.log(error)
		})
}

// function call to initialize program
init()

// ToDo
// [x] Make the node to export a simple file
// Write questions in the array with all property
// Use inquirer for pmopt using the questions array
// Save the answers of User's input
// Write an error code
// Write down the markdown format
// Insert the answer to Markdown
// Write the Init code
