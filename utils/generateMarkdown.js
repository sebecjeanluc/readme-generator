// function to generate markdown for README
function generateMarkdown(data) {
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
      <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#important-note">Important Note</a></li>
      <li><a href="#website-preview">Website Preview</a></li>
      <li><a href="#credits">Credits</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
  </details>

## ${data.name}

## ${data.projectTitle}

`
}

module.exports = generateMarkdown
