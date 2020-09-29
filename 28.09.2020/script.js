var count = 0;
var variants = [];
var details = [];
var types= [];
var result = [];


function add(){
    var formRow = document.createElement('div');
    formRow.setAttribute('class', 'form-row');
    var row1 = createFormBox('type', 'Type');
    var row2 = createFormBox('value', 'Value');
    formRow.append(row1, row2);
    document.getElementById('box').appendChild(formRow);

count++;

}

function createFormBox(name, label){
    var row1 = document.createElement('div');
    row1.setAttribute('class', 'form-group col-md-4');

    var rowName = document.createElement('label');
    rowName.htmlFor = name+count;
    rowName.innerText = label;

    var input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.type ='text';
    input.id = name+count;
    input.name = name+count;

    row1.append(rowName, input);
    return row1;
}

function addVariants(){
    
    for(let i =0; i < count; i++){
        var tempObj = {};
        tempObj["type"] = document.getElementById('type'+i).value;
        tempObj["value"] = document.getElementById('value'+i).value.split(',');
        variants.push(tempObj);
    }

    let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
    let car = (a, b, ...c) => b ? car(f(a, b), ...c) : a;
    var value = 'car(' 
    for(let i = 0; i< variants.length; i++){
        if(i+1 != variants.length){
            value += 'variants['+i+'].value, '
        } else{
            value += 'variants['+i+'].value) '
        }
        types.push(variants[i].type);
    }
    var values = eval(value);

    for(let j = 0; j < values.length; j++){
        var obj = {};
        for(let k = 0; k < types.length; k++){
            obj[types[k]] = values[j][k];
        }
        details.push(obj);
    }
    document.getElementById("add").disabled = true;
    create();
}

function create(){


    var div = document.createElement('div');
    div.setAttribute('class', 'container ')
    var header =document.createElement('h3');
    header.innerText ='Add Add-on Price';
    header.setAttribute('class','header');
    div.appendChild(header);
    var table = document.createElement('table');
    table.setAttribute('class', 'table table-hover')
    var tablethead = document.createElement('thead');
    var tabletheadTr = document.createElement('tr');
    var th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerText = '#';
        tabletheadTr.appendChild(th);
    for(let i = 0; i < types.length; i++){
        var th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerText = types[i];
        tabletheadTr.appendChild(th);
    }

    var th1 = document.createElement('th');
        th1.setAttribute('scope', 'col');
        th1.innerText = 'Add-on Price';
        tabletheadTr.appendChild(th1);


    tablethead.appendChild(tabletheadTr)
    var tabletbody = document.createElement('tbody');
    

    for(let i = 0; i < details.length; i++){
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.setAttribute('scope', 'row')
        th.innerText = i+1;
        tr.appendChild(th);
        for(let j = 0; j < types.length; j++){
            var td = document.createElement('td');
            td.innerText = details[i][types[j]];
            tr.appendChild(td);
        }
        var td1 = document.createElement('td');
        var input = document.createElement('input');
        input.setAttribute('class', 'form-control')
        input.type ='number';
        input.id = 'add-on'+i;
        input.name = 'add-on'+i;
        td1.appendChild(input);
        tr.appendChild(td1);
        tabletbody.appendChild(tr)
    }
    table.append(tablethead,tabletbody);
    

    var button = document.createElement('button');
    button.setAttribute('class', 'btn btn-success');
    button.setAttribute('onclick', 'generate()');
    button.type = 'button';
    button.innerText = 'Submit';

    div.append(table, button);
    document.body.append(div);
}


function generate(){
    var obj = {};
    obj["productname"] = document.getElementById('productname').value;
    obj["price"] = document.getElementById('price').value;
    obj["description"] = document.getElementById('description').value;
    obj["variants"] =  variants;

    for (let i = 0; i < details.length; i++) {
        details[i]['add-on'] = document.getElementById('add-on'+i).value;
        
    }

    obj["variantDetails"] =  details;
    result.push(obj)
    console.log(result);
}