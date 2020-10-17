//Creating DOM baesd html tags
var container = document.createElement('div')
container.setAttribute('class', 'container')


var header = document.createElement('h1')
header.innerHTML = 'Random number Generator';
header.setAttribute('class', 'header')

var button = document.createElement('button');
button.innerHTML = 'Generate';
button.setAttribute('id', 'button');

var result = document.createElement('p');
result.setAttribute('id', 'eightrandom');
container.append(header, button, result)
document.body.append(container)


document.getElementById('button').addEventListener('click', randomNum);

//Creating a unique number

function randomNum() {
    var eightdigitrandom = Math.floor(10000000 + Math.random() * 90000000);
    document.getElementById("eightrandom").innerHTML = eightdigitrandom;
}