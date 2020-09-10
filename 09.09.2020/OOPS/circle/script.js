class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(radius) {
        this.radius = radius;
    }
    setColor(color) {
        this.color = color;
    }
    getArea() {
        return 3.15 * this.radius * this.radius;
    }
}

let c1 = new Circle(2, 'yellow');
c1.setColor('black');
console.log(c1.getArea());