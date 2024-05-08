// index.js
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt the user for input
import('inquirer')
  .then((inquirer) => {
    return inquirer.default.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: (input) => input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number for the text color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal number for the shape color:',
      },
    ]);
  })
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    // Create an instance of the selected shape class
    let shapeInstance;
    switch (shape) {
      case 'circle':
        shapeInstance = new Circle();
        break;
      case 'triangle':
        shapeInstance = new Triangle();
        break;
      case 'square':
        shapeInstance = new Square();
        break;
    }

    // Set the color of the shape
    shapeInstance.setColor(shapeColor);

    // Generate the SVG code
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeInstance.render()}
        <text x="150" y="100" fill="${textColor}" text-anchor="middle" font-size="40">${text}</text>
      </svg>
    `;

    // Save the SVG code to a file
    fs.writeFile('logo.svg', svgCode, (err) => {
      if (err) {
        console.error('Error saving SVG file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });