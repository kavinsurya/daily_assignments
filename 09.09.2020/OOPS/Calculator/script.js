var a = parseFloat( prompt("Enter the value of a:"));
var b = parseFloat( prompt("Enter the value of b:"));
class Calculator {

    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    div(a, b) {
        return a / b;
    }
}

let calc = new Calculator();

console.log("Addtion of a and b is"+" "+ calc.add(a,b ));

console.log("Subraction and a and b is"+ " "+calc.sub(a,b ));

console.log("Mulipilaction of a and b is"+ " "+ calc.mul(a,b ));

console.log("Division of a and b is"+" "+calc.div(a,b )); 