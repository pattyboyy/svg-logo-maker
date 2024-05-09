// Shape base class representing a generic shape
class Shape {
    constructor() {
      // Initialize the color property to an empty string
      this.color = '';
    }
  
    // Method to set the color of the shape
    setColor(color) {
      this.color = color;
    }
  }
  
  // Triangle class extending the Shape base class
  class Triangle extends Shape {
    // Method to render the triangle shape as an SVG polygon element
    render() {
      // Define the points of the triangle using the polygon points attribute
      // The fill color is determined by the color property
      return `<polygon points="150, 30 280, 170 20, 170" fill="${this.color}" />`;
    }
  }
  
  // Circle class extending the Shape base class
  class Circle extends Shape {
    // Method to render the circle shape as an SVG circle element
    render() {
      // Define the center coordinates (cx, cy) and radius (r) of the circle
      // The fill color is determined by the color property
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Square class extending the Shape base class
  class Square extends Shape {
    // Method to render the square shape as an SVG rect element
    render() {
      // Define the position (x, y) and dimensions (width, height) of the square
      // The fill color is determined by the color property
      return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  // GradientShape base class representing a shape with a gradient color
  class GradientShape extends Shape {
    constructor() {
      super();
      // Generate a unique ID for the gradient based on the current timestamp
      this.gradientId = 'gradient' + Date.now();
      // Initialize an empty array to store the gradient colors and their offsets
      this.colors = [];
    }
  
    // Method to add a color and its offset to the gradient
    addColor(color, offset) {
      // Push an object containing the color and offset to the colors array
      this.colors.push({ color, offset });
    }
  
    // Method to render the gradient definition
    renderGradient() {
      // Map the colors array to an array of SVG stop elements
      // Each stop element represents a color and its offset in the gradient
      const stops = this.colors
        .map(({ color, offset }) => `<stop offset="${offset}" stop-color="${color}" />`)
        .join('');
  
      // Return the SVG linearGradient element with the unique gradient ID and the stop elements
      return `
        <defs>
          <linearGradient id="${this.gradientId}">
            ${stops}
          </linearGradient>
        </defs>
      `;
    }
  }
  
  // GradientTriangle class extending the GradientShape base class
  class GradientTriangle extends GradientShape {
    // Method to render the triangle shape with a gradient color
    render() {
      // Call the renderGradient method to generate the gradient definition
      // Define the points of the triangle using the polygon points attribute
      // The fill color is determined by the URL reference to the gradient ID
      return `
        ${this.renderGradient()}
        <polygon points="150, 30 280, 170 20, 170" fill="url(#${this.gradientId})" />
      `;
    }
  }
  
  // GradientCircle class extending the GradientShape base class
  class GradientCircle extends GradientShape {
    // Method to render the circle shape with a gradient color
    render() {
      // Call the renderGradient method to generate the gradient definition
      // Define the center coordinates (cx, cy) and radius (r) of the circle
      // The fill color is determined by the URL reference to the gradient ID
      return `
        ${this.renderGradient()}
        <circle cx="150" cy="100" r="80" fill="url(#${this.gradientId})" />
      `;
    }
  }
  
  // GradientSquare class extending the GradientShape base class
  class GradientSquare extends GradientShape {
    // Method to render the square shape with a gradient color
    render() {
      // Call the renderGradient method to generate the gradient definition
      // Define the position (x, y) and dimensions (width, height) of the square
      // The fill color is determined by the URL reference to the gradient ID
      return `
        ${this.renderGradient()}
        <rect x="50" y="50" width="200" height="100" fill="url(#${this.gradientId})" />
      `;
    }
  }
  
  // Export the shape classes for use in other modules
  module.exports = {
    Triangle,
    Circle,
    Square,
    GradientTriangle,
    GradientCircle,
    GradientSquare,
  };