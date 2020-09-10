// destructuring assignment 

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];
var [color1, color2, color3] = colors;
console.log("destructuring assignment ");
console.log(color1);
console.log(color2);
console.log(color3);

//Rest assignment 

function myFun(a,  b, ...manyMoreArgs) {
    console.log("Rest assignment ");
    console.log("a==>", a)
    console.log("b==>", b)
    console.log("manyMoreArgs", manyMoreArgs)
  }
  
  myFun("one", "two", "three", "four", "five", "six")
  
  




//spread assignment

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log("spread assignment");
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));