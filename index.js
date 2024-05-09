// Import the required modules
const fs = require('fs');
const {
  Triangle,
  Circle,
  Square,
  GradientTriangle,
  GradientCircle,
  GradientSquare,
} = require('./lib/shapes');

// Import the inquirer module dynamically
import('inquirer')
  .then((inquirer) => {
    // Prompt the user with a series of questions using inquirer
    return inquirer.default.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: (input) => input.length <= 3, // Validate that the input is no more than 3 characters
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
        choices: ['circle', 'triangle', 'square'], // Provide shape options for the user to choose from
      },
      {
        type: 'list',
        name: 'shapeColor',
        message: 'Select the shape color:',
        choices: ['solid', 'gradient'], // Provide color options for the shape (solid or gradient)
      },
      {
        type: 'input',
        name: 'solidColor',
        message: 'Enter a color keyword or hexadecimal number for the shape color:',
        when: (answers) => answers.shapeColor === 'solid', // Only ask this question if the user selected solid color
      },
      {
        type: 'input',
        name: 'gradientColor1',
        message: 'Enter the first color for the gradient:',
        when: (answers) => answers.shapeColor === 'gradient', // Only ask this question if the user selected gradient color
      },
      {
        type: 'input',
        name: 'gradientColor2',
        message: 'Enter the second color for the gradient:',
        when: (answers) => answers.shapeColor === 'gradient', // Only ask this question if the user selected gradient color
      },
    ]);
  })
  .then((answers) => {
    // Destructure the answers object to get the user's input values
    const {
      text,
      textColor,
      shape,
      shapeColor,
      solidColor,
      gradientColor1,
      gradientColor2,
    } = answers;

    let shapeInstance;

    // Create an instance of the selected shape class based on the user's choice
    switch (shape) {
      case 'circle':
        shapeInstance = shapeColor === 'solid' ? new Circle() : new GradientCircle();
        break;
      case 'triangle':
        shapeInstance = shapeColor === 'solid' ? new Triangle() : new GradientTriangle();
        break;
      case 'square':
        shapeInstance = shapeColor === 'solid' ? new Square() : new GradientSquare();
        break;
    }

    // Set the color of the shape based on the user's choice
    if (shapeColor === 'solid') {
      shapeInstance.setColor(solidColor);
    } else {
      shapeInstance.addColor(gradientColor1, '0%');
      shapeInstance.addColor(gradientColor2, '100%');
    }

    // Generate the SVG code using the selected shape and user's input
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeInstance.render()}
        <text x="150" y="120" fill="${textColor}" text-anchor="middle" font-size="60" dominant-baseline="middle">${text}</text>
      </svg>
    `;

    // Write the generated SVG code to a file named 'logo.svg'
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