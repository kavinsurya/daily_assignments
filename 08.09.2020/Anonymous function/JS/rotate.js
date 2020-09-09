(function (array,k){
    var i=0;
    while(i<k){
        array.unshift(array.pop());
        i++;
    }
    console.log(array)
})
([1,2,3,4,5],4)