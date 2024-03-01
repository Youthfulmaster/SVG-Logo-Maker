
# SVG-Logo-Maker

## Description
The provided Node.js script is a command-line application designed to generate custom SVG logos based on user input. When executed, it presents a series of prompts asking the user for specific details about the logo they wish to create. These details include:Text for the Logo: The user can enter up to three characters that will be displayed as part of the logo.Text Color: The user specifies the color of the text, which can be a named color (like "red" or "blue") or a hexadecimal value (such as "#FF0000").Shape: The user chooses a shape to include in the logo from the options circle, triangle, or square.Shape Color: Similar to text color, the user defines the color of the chosen shape, again using either named colors or hexadecimal values.After collecting the inputs, the script generates an SVG file representing the logo based on these specifications. The SVG file includes the specified shape in the chosen color, with the text overlaying it in the specified text color. This SVG content is saved to a file named logo.svg within an /examples directory located in the same directory as the script. If the /examples directory does not exist, the script creates it automatically.The script uses Node.js's readline module to handle the interactive command-line interface, allowing for the collection of user inputs. It also uses the fs module to handle file operations, such as checking for the existence of the /examples directory and writing the generated SVG content to the logo.svg file. The path module is used to construct the file path reliably, ensuring compatibility across different operating systems.Once the logo is successfully generated, the script outputs a message to the console indicating the creation of logo.svg, including the path to the file, and then it terminates. This application provides a simple yet flexible way to create basic SVG logos through a user-friendly command-line interface.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
copy the ssh and instal it like that

## Usage
Execute the script by running: node index.js

Use video https://screenrec.com/share/edsLwtzgov

## License
This project is licensed under the MIT license.

## Contributing
Quick start Familiarize Yourself: Spend some time understanding the project through its documentation, issues, and pull requests.Find an Issue: Look for open issues that need help, especially those labeled good first issue if you're new.Propose Changes: Have an idea? Open an issue to discuss potential improvements or features.Making ContributionsReporting BugsUse the issue tracker to report bugs.Check if the issue has already been reported.Provide a detailed report with steps to reproduce the bug.Suggesting EnhancementsOpen an issue to suggest new features or improvements.Clearly describe the enhancement and its benefits.Submitting ChangesFork the repo and create a new branch for your changes.Write clear, commented, and testable code.Ensure your changes do not break the existing codebase.Submit a pull request with a detailed description of your changes.GuidelinesCode Style: Adhere to the coding style and conventions established in the project.Commit Messages: Write meaningful commit messages that explain your changes.Respect Community: Follow our Code of Conduct and treat others with respect.

## Tests
type in the consol: npm test

## Questions
If you have any questions about the repo, open an issue or contact me directly at Dennisangelov3@gmail.com. You can find more of my work at [Youthfulmaster](https://github.com/Youthfulmaster/).
    
