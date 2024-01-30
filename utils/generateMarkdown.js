// function to generate markdown for README
function generateMarkdown(data) {
	// Passing array from choices of budges
	let buildWithItem = ''
	if (data.buildWith && data.buildWith.length > 0) {
		buildWithItem = data.buildWith.map((item) => `- ![${item}]`).join('\n')
	}

	// this year
	let thisYear = new Date().getFullYear('yyyy')

	// Selecting license badge
	let licenseBadge
	switch (data.license) {
		case 'MIT':
			licenseBadge =
				'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
			break
		case 'Apache-2.0':
			licenseBadge =
				'[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'
			break
		case 'GPL-3.0':
			licenseBadge =
				'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
			break
		case 'BSD-2-Clause':
			licenseBadge =
				'[![License: BDS 2](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
			break
		case 'BSD-3-Clause':
			licenseBadge =
				'[![License: BDS 3](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)'
			break
		case 'Other':
			licenseBadge = 'License will be added manually'
			break
		default:
			$(data.license)
	}

	return `

<!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-this-project">${data.projectTitle}</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li><a href="#how-to-install">How to install</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#important-note">Important Note</a></li>
      <li><a href="#website-preview">Website Preview</a></li>
      <li><a href="#credits">Credits</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
  </details>

## ${data.projectTitle}

${licenseBadge}

### About this ${data.projectTitle} project

${data.projectDescription}

### Built With

${buildWithItem}

### How to install

~~~shell
${data.installation}
~~~

### Usage
${data.usage}

### Mock-up

### Important note

- ${data.developerNote}

### Website preview

![please add your demo](../assets/images/x)

[${data.githubRepo} on Github](https://${data.github}.github.io/${data.githubRepo}/)


### Third-party services
- [inquirer - npm](https://www.npmjs.com/package/inquirer)
- ${data.contribution}

### Credits
- ${data.name}

### Test
- ${data.tests}

### License
Copyright(c) ${thisYear},
All rights reserved

This source code is licensed under the ${data.license} license.
More detail can be found in the LICENSE file in the root directory of this source tree if the link of the badge is not available.

## Questions

### Contact

${data.name} - ${data.email}

[${data.name} on Linkedin](https://linkedin.com/in/${data.email})

[${data.github} on Github](https://github.com/${data.github}/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[HTML]: https://img.shields.io/badge/HTML-orange
[CSS]: https://img.shields.io/badge/CSS-blue
[BOOTSTRAP]: https://img.shields.io/badge/BOOTSTRAP-lightblue
[JAVASCRIPT]: https://img.shields.io/badge/Javascript-yellow
[JQUERY]: https://img.shields.io/badge/JQUERY-lightblue
[DAYJS]: https://img.shields.io/badge/DAYJS-orange
[WEBAPI]: https://img.shields.io/badge/WEBAPI-orange
[NODEJS]: https://img.shields.io/badge/NODEJS-green
[REACT]: https://img.shields.io/badge/REACT-lightblue
`
}

module.exports = generateMarkdown

// https://shields.io/docs/logos#logocolor-parameter
