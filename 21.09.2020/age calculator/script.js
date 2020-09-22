var container = document.createElement('div')
container.setAttribute('class', 'container')


var header = document.createElement('h1')
header.innerHTML = 'Age Calculator';
header.setAttribute('class', 'header')

var label = document.createElement('h1')
label.setAttribute('class', 'header')
label.innerHTML = 'Select D.O.B';

var div = document.createElement('div')
div.setAttribute('class', 'center')


var date = document.createElement('input')
date.setAttribute('id', 'datePicker')
date.setAttribute('type', 'datetime-local')

var button = document.createElement('button');
button.innerHTML = 'Calculate';
button.setAttribute('id', 'button');

div.append(date, button)


var div1 = document.createElement('div')


var result = document.createElement('p');
result.setAttribute('class', 'result')
result.id = 'fetchedData1';

div1.append(result)

container.append(header, label, div, div1)
document.body.append(container)




document.getElementById('button').addEventListener('click', getCalculated);



function getCalculated() {
    var input = document.getElementById('datePicker').value;
    if (input != '' || input != undefined) {
        var formatDate = Date.parse(input);
        var todayDate = Date.now();
        if (formatDate <= todayDate) {
            var milli = todayDate - formatDate;

            var second = Math.floor(milli / 1000);
            console.log("second==>" + second);
            var minute = Math.floor(second / 60);
            console.log("min==>" + minute);
            var hour = Math.floor(minute / 60);
            console.log("hour==>" + hour);
            var day = Math.floor(hour / 24);
            console.log("day==>" + day);
            var month = Math.floor(day / 30);
            console.log("month==>" + month);
            var year = Math.floor(day / 365);
            console.log("year==>" + year);


            var result = " Years : " + year +
                "</br>Months : " + month +
                "</br>Days : " + day +
                "</br>Hours : " + hour +
                "</br>Minutes : " + minute +
                "</br>Seconds : " + second +
                "</br>milliseconds : " + milli;

            document.getElementById('fetchedData1').innerHTML = result;
        } else {
            alert(' Enter the valid date')
        }
    } else {
        alert('Select the date for calculation.')
    }

}