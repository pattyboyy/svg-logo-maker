// Import the shape classes from the './shapes' module
const { Triangle, Circle, Square } = require('./shapes');

// Test suite for the Triangle class
describe('Triangle', () => {
  // Test case to check if a blue triangle is rendered correctly
  test('should render a blue triangle', () => {
    // Create a new instance of the Triangle class
    const shape = new Triangle();
    // Set the color of the triangle to blue
    shape.setColor('blue');
    // Assert that the rendered output matches the expected SVG string
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  // Test case to check if a red triangle is rendered correctly
  test('should render a red triangle', () => {
    // Create a new instance of the Triangle class
    const shape = new Triangle();
    // Set the color of the triangle to red
    shape.setColor('red');
    // Assert that the rendered output matches the expected SVG string
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });
});

// Test suite for the Circle class
describe('Circle', () => {
  // Test case to check if a blue circle is rendered correctly
  test('should render a blue circle', () => {
    // Create a new instance of the Circle class
    const shape = new Circle();
    // Set the color of the circle to blue
    shape.setColor('blue');
    // Assert that the rendered output matches the expected SVG string
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  // Test case to check if a green circle is rendered correctly
  test('should render a green circle', () => {
    // Create a new instance of the Circle class
    const shape = new Circle();
    // Set the color of the circle to green
    shape.setColor('green');
    // Assert that the rendered output matches the expected SVG string
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

// Test suite for the Square class
describe('Square', () => {
  // Test case to check if a blue square is rendered correctly
  test('should render a blue square', () => {
    // Create a new instance of the Square class
    const shape = new Square();
    // Set the color of the square to blue
    shape.setColor('blue');
    // Assert that the rendered output matches the expected SVG string
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');
  });

  // Test case to check if a yellow square is rendered correctly
  test('should render a yellow square', () => {
    // Create a new instance of the Square class
    const shape = new Square();
    // Set the color of the square to yellow
    shape.setColor('yellow');
    // Assert that the rendered output matches the expected SVG string
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="yellow" />');
  });
});