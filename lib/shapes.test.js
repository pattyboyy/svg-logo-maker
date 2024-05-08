const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('should render a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('should render a red triangle', () => {
    const shape = new Triangle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });
});

describe('Circle', () => {
  test('should render a blue circle', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('should render a green circle', () => {
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square', () => {
  test('should render a blue square', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');
  });

  test('should render a yellow square', () => {
    const shape = new Square();
    shape.setColor('yellow');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="yellow" />');
  });
});