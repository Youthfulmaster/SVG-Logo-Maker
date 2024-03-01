// Shape.js

class Circle {
  constructor(radius = 50) {
      this.radius = radius;
      this.color = 'black'; // Default color
  }

  setColor(color) {
      this.color = color;
  }

  render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Square {
  constructor(sideLength = 100) {
      this.sideLength = sideLength;
      this.color = 'black'; // Default color
  }

  setColor(color) {
      this.color = color;
  }

  render() {
      // Assuming a centered square for simplicity
      const halfSide = this.sideLength / 2;
      return `<rect x="${150 - halfSide}" y="${100 - halfSide}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }
}
class Triangle {
  constructor() {
      this.color = 'black'; // Default color
  }

  setColor(color) {
      this.color = color;
  }

  render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };