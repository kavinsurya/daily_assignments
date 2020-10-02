var div = document.createElement("div");
div.setAttribute("class", "container");

var table = document.createElement("table");
table.setAttribute("class", "table table-hover");
table.id = 'paginate-task'

var thead = document.createElement("thead");
var data = ["ID", "Name", "Email"];
var th = addRow(data, "th");
thead.appendChild(th);

var tbody = document.createElement("tbody");
tbody.id = "res";

table.append(thead, tbody);
var nav = document.createElement('nav');
var ul = document.createElement('ul');
ul.setAttribute('class', 'pagination ');
ul.id = 'paginationtxt'
nav.appendChild(ul);

div.append(table, nav);
document.body.append(div);


var jsonData = [];
var totalData = 0;
var pages = 0;

function getJson() {
    var request = new XMLHttpRequest();
    var url = "data.json";
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonData = JSON.parse(this.responseText);
            totalData = jsonData.length;
            pages = Math.ceil(totalData / 10);
            getData(0, 9);
            var start = 0;
            var end = 9;
            var ul = document.getElementById('paginationtxt')
            for (let i = 1; i <= pages; i++) {

                var li = document.createElement('li');
                li.setAttribute('class', 'page-item');
                var a = document.createElement('a');
                a.setAttribute('class', 'page-link');
                a.setAttribute('onclick', 'getData(' + start + ', ' + end + ')');
                a.href = '#';
                a.innerText = i
                li.appendChild(a);
                ul.appendChild(li);
                start += 10;
                end += 10;
            }
        }
    };
    request.open("GET", url, true);
    request.send();
}
getJson();

function getData(start, end) {
    document.getElementById("res").innerHTML = "";
    for (i = start; i <= end; i++) {
        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        col1.innerText = jsonData[i].id;
        var col2 = document.createElement("td");
        col2.innerText = jsonData[i].name;
        var col3 = document.createElement("td");
        col3.innerText = jsonData[i].email;
        row.append(col1, col2, col3);
        document.getElementById("res").append(row);
    }
}


function addRow(array, type) {
    var row = document.createElement("tr");
    for (i = 0; i < array.length; i++) {
        var column = document.createElement(type);
        column.innerText = array[i];
        row.append(column);
    }
    return row;
}