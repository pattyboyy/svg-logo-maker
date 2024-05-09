class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 30 280, 170 20, 170" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  class GradientShape extends Shape {
    constructor() {
      super();
      this.gradientId = 'gradient' + Date.now();
      this.colors = [];
    }
  
    addColor(color, offset) {
      this.colors.push({ color, offset });
    }
  
    renderGradient() {
      const stops = this.colors
        .map(({ color, offset }) => `<stop offset="${offset}" stop-color="${color}" />`)
        .join('');
  
      return `
        <defs>
          <linearGradient id="${this.gradientId}">
            ${stops}
          </linearGradient>
        </defs>
      `;
    }
  }
  
  class GradientTriangle extends GradientShape {
    render() {
      return `
        ${this.renderGradient()}
        <polygon points="150, 30 280, 170 20, 170" fill="url(#${this.gradientId})" />
      `;
    }
  }
  
  class GradientCircle extends GradientShape {
    render() {
      return `
        ${this.renderGradient()}
        <circle cx="150" cy="100" r="80" fill="url(#${this.gradientId})" />
      `;
    }
  }
  
  class GradientSquare extends GradientShape {
    render() {
      return `
        ${this.renderGradient()}
        <rect x="50" y="50" width="200" height="100" fill="url(#${this.gradientId})" />
      `;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
    GradientTriangle,
    GradientCircle,
    GradientSquare,
  };