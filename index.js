const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
	{
		type: 'input',
		name: 'projectTitle',
		message: 'What is your project name?',
		default: 'Readme Generator',
	},
	{
		type: 'input',
		name: 'githubRepo',
		message: "What is this project's github repository name?",
		default: 'sebecjeanluc',
	},
	{
		type: 'input',
		name: 'projectDescription',
		message: 'Tell me about this project?',
		default: "This is definitely one of my best masterpieces' project",
	},
	{
		type: 'checkbox',
		name: 'buildWith',
		message: 'What will your project include in the below?',
		choices: ['HTML', 'CSS', 'JAVASCRIPT', 'jQuery', 'Node.js', 'WEBAPI'],
	},
	{
		type: 'input',
		name: 'developerNote',
		message: 'Leave an important note for this project',
		default: 'This README will be used repeatedly by the author.',
	},
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
		default: 'Tak Kawamura',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?',
		default: 'tkawamura11@gmail.com',
	},
	{
		type: 'input',
		name: 'linkedIn',
		message: 'What is your linkedIn username?',
		default: 'tak-k-8b657828',
	},
	{
		type: 'list',
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
			const nameAnswer = answers.name
			const githubAnswer = answers.githubRepo
			const projectTitleAnswer = answers.projectTitle
			const buildWithAnswer = answers.buildWith
			const emailAnswer = answers.email
			const linkedInAnswer = answers.linkedIn
			const llicenseAnswer = answers.license
			const content = generateMarkdown(answers)
			// console.log(answers)
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
