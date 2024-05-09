const fs = require('fs');
const {
  Triangle,
  Circle,
  Square,
  GradientTriangle,
  GradientCircle,
  GradientSquare,
} = require('./lib/shapes');

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
        type: 'list',
        name: 'shapeColor',
        message: 'Select the shape color:',
        choices: ['solid', 'gradient'],
      },
      {
        type: 'input',
        name: 'solidColor',
        message: 'Enter a color keyword or hexadecimal number for the shape color:',
        when: (answers) => answers.shapeColor === 'solid',
      },
      {
        type: 'input',
        name: 'gradientColor1',
        message: 'Enter the first color for the gradient:',
        when: (answers) => answers.shapeColor === 'gradient',
      },
      {
        type: 'input',
        name: 'gradientColor2',
        message: 'Enter the second color for the gradient:',
        when: (answers) => answers.shapeColor === 'gradient',
      },
    ]);
  })
  .then((answers) => {
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

    if (shapeColor === 'solid') {
      shapeInstance.setColor(solidColor);
    } else {
      shapeInstance.addColor(gradientColor1, '0%');
      shapeInstance.addColor(gradientColor2, '100%');
    }

    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeInstance.render()}
        <text x="150" y="120" fill="${textColor}" text-anchor="middle" font-size="60" dominant-baseline="middle">${text}</text>
      </svg>
    `;

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