const { Circle, Square , Triangle  } = require('./shape');

describe('Shape class tests', () => {
    describe('Circle', () => {
        test('render method returns correct SVG string for Circle', () => {
            const circle = new Circle(50); // Assuming constructor takes radius
            circle.setColor("green");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
        });
    });

    describe('Square', () => {
        test('render method returns correct SVG string for Square', () => {
            const square = new Square(100); // Assuming constructor takes side length
            square.setColor("red");
            expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
        });
    });


     describe('Triangle', () => {
         test('render method returns correct SVG string for Triangle', () => {
             const triangle = new Triangle(); // Update with appropriate constructor usage
             triangle.setColor("blue");
             expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
     });
});
