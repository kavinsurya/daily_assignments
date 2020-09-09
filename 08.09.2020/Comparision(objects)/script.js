
var details1 = { 'firstname': 'kavin', 'lastname': 'surya' };
var details2 = { 'firstname': 'kavin', 'lastname': 'surya' };

if (Object.keys(details1).length === Object.keys(details2).length) {
    for (var keys in details1) {

        if (details1[keys] == details2[keys]) {
            console.log('The Objects are equal');
            break;
        }
        else {

            console.log('The Objects are not equal');
            break;
        }
    }
}
else {
    console.log('The Objects are not equal');
}
