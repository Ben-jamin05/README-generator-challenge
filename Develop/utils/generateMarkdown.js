function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GNU GPLv3':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      default:
          return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return '[link](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[link](https://opensource.org/licenses/Apache-2.0)';
      case 'GNU GPLv3':
          return '[link](https://www.gnu.org/licenses/gpl-3.0)';
      default:
          return '';
  }
}

function renderLicenseSection(license) {
  switch (license) {
      case 'MIT':
          return `## License

This application is covered under the MIT License.`;
      case 'Apache 2.0':
          return `## License

This application is covered under the Apache License 2.0.`;
      case 'GNU GPLv3':
          return `## License

This application is covered under the GNU General Public License v3.0.`;
      default:
          return '## License';
  }
}

function generateMarkdownFn(data) {
  return `# ${data.title}

## Description

${data.description}

${renderLicenseBadge(data.license)}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
  
${renderLicenseSection(data.license)}
License ${renderLicenseLink(data.license)}
  
## Contributing
  
${data.contribute}
  
## Tests
  
${data.test}
  
## Questions
  
My [GitHub](https://github.com/${data.github}) profile
  
For any questions, please reach out to this email: [${data.email}](mailto:${data.email})

`;
}

module.exports = {generateMarkdownFn};
