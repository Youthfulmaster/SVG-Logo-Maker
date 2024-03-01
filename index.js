const readline = require('readline');
const fs = require('fs');
const path = require('path'); // Import the path module

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => new Promise(resolve => rl.question(query, ans => resolve(ans)));

async function main() {
    console.log("Welcome to the Logo Generator!");

    const text = await askQuestion("Enter the text for the logo (up to three characters): ");
    const textColor = await askQuestion("Enter the text color (keyword or hexadecimal): ");
    const shape = await askQuestion("Choose a shape (circle, triangle, square): ");
    const shapeColor = await askQuestion("Enter the shape's color (keyword or hexadecimal): ");

    // Ensure the /examples directory exists
    const outputPath = path.join(__dirname, 'examples'); // Use __dirname to get the directory where the script is running
    fs.mkdirSync(outputPath, { recursive: true }); // Create the directory if it does not exist

    const svgContent = generateSvg(text, textColor, shape, shapeColor);
    const filePath = path.join(outputPath, "logo.svg"); // Specify the full path for the output file
    fs.writeFileSync(filePath, svgContent);

    console.log(`Generated logo.svg in ${outputPath}`);
    rl.close();
}

function generateSvg(text, textColor, shape, shapeColor) {
    const baseSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    let shapeSvg;

    switch (shape) {
        case 'circle':
            shapeSvg = `<circle cx="150" cy="100" r="60" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeSvg = `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeSvg = `<polygon points="150,25 225,175 75,175" fill="${shapeColor}" />`;
            break;
        default:
            console.log("Invalid shape. Please restart the program.");
            process.exit(1);
    }

    const textSvg = `<text x="150" y="115" font-family="Arial" font-size="30" fill="${textColor}" text-anchor="middle">${text}</text>`;
    return `${baseSvg}${shapeSvg}${textSvg}</svg>`;
}

main().catch(console.error);
