// function to generate markdown for README
function generateMarkdown(data) {
	// Passing array from choices of budges
	let buildWithItem = ''
	if (data.buildWith && data.buildWith.length > 0) {
		buildWithItem = data.buildWith.map((item) => `- ![${item}]`).join('\n')
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
      <li><a href="#important-note">Important Note</a></li>
      <li><a href="#website-preview">Website Preview</a></li>
      <li><a href="#credits">Credits</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
  </details>

## ${data.projectTitle}

### About this ${data.projectTitle} project

${data.projectDescription}

### Built With

${buildWithItem}

### How to install

~~~shell
$npm install
~~~

### Mock-up

### Important note

- ${data.developerNote}

### Website preview

![demo](./assets/images/demo.png)

#### This is the Github page

[Github page at ${data.githubRepo}](https://sebecjeanluc.github.io/${data.githubRepo}/)

### Credits

### Third-party services
- [inquirer - npm](https://www.npmjs.com/package/inquirer)

### Contribution
- ${data.name}

### Test

### License

Distributed under ${data.license} License

## Questions

### Contact

${data.name} - ${data.email}

[${data.name} on Linkedin](https://linkedin.com/in/${data.email})

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[HTML]: https://img.shields.io/badge/HTML-orange
[CSS]: https://img.shields.io/badge/CSS-blue
[BOOTSTRAP]: https://img.shields.io/badge/BOOTSTRAP-lightblue
[JAVASCRIPT]: https://img.shields.io/badge/Javascript-yellow
[JQUERY]: https://img.shields.io/badge/JQUERY-lightblue
[DAYJS]: https://img.shields.io/badge/DAYJS-orange
[WEBAPI]: https://img.shields.io/badge/WEBAPI-orange

`
}

module.exports = generateMarkdown
