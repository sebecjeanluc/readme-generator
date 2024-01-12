const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
	{
		type: 'input',
		name: 'projectTitle',
		message: 'What is your project name?',
	},
	{
		type: 'input',
		name: 'githubRepo',
		message: "What is this project's github repository name?",
	},
	{
		type: 'input',
		name: 'projectTitle',
		message: 'Tell me about this project within a couple of sentences',
	},
	{
		type: 'checkbox',
		name: 'buildWith',
		message: 'What will your project include in the below?',
		choices: ['HTML', 'CSS', 'JAVASCRIPT', 'jQuery', 'Node.js', 'WEBAPI'],
	},
	{
		type: 'input',
		name: 'buildWith',
		message: 'What will your project include in the below?',
		choices: ['HTML', 'CSS', 'JAVASCRIPT', 'jQuery', 'Node.js', 'WEBAPI'],
	},
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?',
	},
	{
		type: 'input',
		name: 'linkedIn',
		message: 'What is your linkedIn username?',
	},
	{
		type: 'radio',
		name: 'license',
		message: 'Pick one license the below',
		choices: ['MIT', 'Other'],
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
// [x] Write questions in the array with all property
// [x] Use inquirer for pmopt using the questions array
// Save the answers of User's input
// Write an error code
// Write down the markdown format
// Insert the answer to Markdown
// Write the Init code
