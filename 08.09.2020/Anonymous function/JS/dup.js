(function (array) {
    console.log(array.filter((value, index) => array.indexOf(value) !== index));
})
    ([1, 3, 3, 4, 5]);