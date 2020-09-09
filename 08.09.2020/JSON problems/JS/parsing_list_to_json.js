var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 newObject =Object.fromEntries(arr);
 console.log(newObject)
}

fromListToObject(arr) 