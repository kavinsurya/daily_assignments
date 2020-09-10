let sum = ((array) => {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
})
sum([1, 2, 3, 4, 5])