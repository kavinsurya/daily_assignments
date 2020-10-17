var array1 = [11, 15, 32, 34];
var array2 = [52, 'kavin', 'surya', 19, 'pollachi'];



//Grouping the arrray

const chunk = (array, pair) => {
  var result = [];
  var arr = [];
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i]);
    count++;
    if(pair == count){
      result.push(arr);
      arr =[];
      count =0;
    }
  }
  result.push(arr);
  return result;
};

console.log(chunk(array1, 2));


//Filtering the string
const filter = (array) => {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      result.push(array[i])
    }
  }
  return result;
};
console.log(filter(array2));


//Reduce function
const reduceFunction = (array, func, total = 0) => {

  for (let i = 0; i < array.length; i++) {
    total = func(total, array[i]);
  }
  return total;
};

const sum = (a, b) => {
  return a + b;
}

console.log(`result value : ${reduceFunction(array1, sum)}`);

//Finding the value

const find = (array, cond) => {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > cond) {
      result.push(array[i]);
      break;
    }
  }
  return result;
};

console.log(`result value :${find(array1, 2)}`);


//Finding the sum
const sumtion = (array) => {
  var total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

console.log(`result value of sum: ${sumtion(array1)}`);


