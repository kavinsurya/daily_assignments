
let odd = ((array) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
});
odd([1, 2, 3, 4, 5])