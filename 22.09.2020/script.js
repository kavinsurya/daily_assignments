//Creating DOM baesd html tags
var container = document.createElement('div');
container.setAttribute('class', 'container');


var header = document.createElement('h1');
header.innerHTML = 'Dom Table';
header.setAttribute('class', 'header');

var form = document.createElement('form');


var label = document.createElement('label')
label.innerHTML = "Name:";
label.setAttribute('for', 'name')

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.name = 'name'
input.setAttribute('id', 'name');
input.setAttribute('class', 'input col-lg-3');
input.placeholder = 'Enter your name';
// var br = document.createElement('br')


var label1 = document.createElement('label')
label1.innerHTML = "E-mail:";
label1.setAttribute('for', 'mail')

var input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.name = 'mail'
input1.setAttribute('id', 'mail');
input1.setAttribute('class', 'input col-lg-3');
input1.placeholder = 'Enter your Mail id';



var label2 = document.createElement('label')
label2.innerHTML = "Number:";
label2.setAttribute('for', 'num')


var input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.name = 'num';
input2.setAttribute('id', 'num');
input2.setAttribute('class', 'input col-lg-3');
input2.placeholder = 'Enter your Mobile number';
var br2 = document.createElement('br')

var label3 = document.createElement('label')
label3.innerHTML = "Area:";
label3.setAttribute('for', 'area')


var input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.name = 'area';
input3.setAttribute('id', 'area');
input3.setAttribute('class', 'input col-lg-5');
input3.placeholder = 'Enter your Locality';
var br3 = document.createElement('br')

var label4 = document.createElement('label')
label4.innerHTML = "State:";
label4.setAttribute('for', 'num')


var input4 = document.createElement('input');
input4.setAttribute('type', 'text');
input4.name = 'state';
input4.setAttribute('id', 'state');
input4.setAttribute('class', 'input col-lg-5');
input4.placeholder = 'Enter your state';

var br5 = document.createElement('br')

var input5 = document.createElement('input');
input5.setAttribute('type', 'button');
input5.value = 'add'
input5.setAttribute('id', 'button');





form.append(label, input, label1, input1, label2, input2, br2, input3, label3, input3, label4, input4, br5, input5)

container.append(header, form);




var table1 = document.createElement('table');
table1.setAttribute('class', 'table table-bordered table-dark ')
table1.id = 'Table'



var tr_1 = document.createElement('tr');

var td_1 = document.createElement('td')
td_1.innerHTML = "Name";

var td_2 = document.createElement('td')
td_2.innerHTML = "E-mail";

var td_3 = document.createElement('td')
td_3.innerHTML = "number";

var td_4 = document.createElement('td')
td_4.innerHTML = "Area";

var td_5 = document.createElement('td')
td_5.innerHTML = "State";

tr_1.append(td_1, td_2, td_3, td_4, td_5)
table1.append(tr_1)


document.body.append(container, table1);





document.getElementById('button').addEventListener('click', row);

//Row Function to insert the data's
function row() {
    var table = document.getElementById('Table').insertRow(1);
    var row1 = table.insertCell(0);
    var row2 = table.insertCell(1);
    var row3 = table.insertCell(2);
    var row4 = table.insertCell(3);
    var row5 = table.insertCell(4);
    row1.innerHTML = document.getElementById('name').value;
    row2.innerHTML = document.getElementById('mail').value;
    row3.innerHTML = document.getElementById('num').value;
    row4.innerHTML = document.getElementById('area').value;
    row5.innerHTML = document.getElementById('state').value;

}