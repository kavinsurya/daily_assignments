function getvalue() {
    var value = document.getElementById('cal').innerText;
    return value;
}

function setvalueBox(newValue) {
    var oper = document.getElementById('cal');
    str = oper.innerText;
    if (str.length == 1 && str == "0" && newValue != ".") {
        str = "";
    }
    if (str.length < 16) {
        oper.innerText = str + newValue;
    } else {
        alert(" 15 characters max")
    }
}

function setOutput(output) {
    document.getElementById('output').innerText = output;
}

function performcalc() {
    var opertext = getvalue();
    const regex = /(?:(?:^|[-+_*/%])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    if (regex.test(opertext)) {
        var output = eval(opertext);
        setOutput(output);
    } else {
        alert("The operation doesn't seems to be mathematical operatiom. please verify")
    }
}

function clrstr() {
    document.getElementById('cal').innerText = "0";
    document.getElementById('output').innerText = "";
}

function clr() {
    var currentValue = getvalue();
    document.getElementById('cal').innerText = currentValue.substring(0, (currentValue.length - 1))
}



function createDiv(className, htmltext, attrib = '') {
    var tag = document.createElement('div');
    tag.setAttribute('class', className);
    if (htmltext != '') {
        tag.innerHTML = htmltext;
    }
    if (attrib != '') {
        tag.setAttribute('onclick', attrib);
    }
    return tag;
}


var main = createDiv('main', '');
var container = createDiv('container', '');
var calcBody = createDiv('calc-body', '');

var calcScreen = createDiv('calc-screen', '');
var calcScreendiv1 = createDiv('calc-operation', '0');
calcScreendiv1.id = 'cal'
var calcScreendiv2 = createDiv('calc-typed', '');
calcScreendiv2.id = 'output'
calcScreen.append(calcScreendiv1, calcScreendiv2);

var calc = createDiv('calc-button-row', '');
var calcDiv1 = createDiv('button c', 'C', 'clrstr()');
var calcDiv2 = createDiv('button l', 'del', 'clr()');
var calcDiv2iTag = document.createElement('i');
calcDiv2iTag.setAttribute('class', 'fas fa-backspace');
calcDiv2.appendChild(calcDiv2iTag);
var calcDiv3 = createDiv('button l', '%', 'setvalueBox("%")');
var calcDiv4 = createDiv('button l', '/', 'setvalueBox("/")');
calc.append(calcDiv1, calcDiv2, calcDiv3, calcDiv4)

var calc2 = createDiv('calc-button-row', '');
var calc2Div1 = createDiv('button', '7', 'setvalueBox("7")');
var calc2Div2 = createDiv('button', '8', 'setvalueBox("8")');
var calc2Div3 = createDiv('button', '9', 'setvalueBox("9")');
var calc2Div4 = createDiv('button l', 'x', 'setvalueBox("*")');
calc2.append(calc2Div1, calc2Div2, calc2Div3, calc2Div4)

var calc3 = createDiv('calc-button-row', '');
var calc3Div1 = createDiv('button', '4', 'setvalueBox("4")');
var calc3Div2 = createDiv('button', '5', 'setvalueBox("5")');
var calc3Div3 = createDiv('button', '6', 'setvalueBox("6")');
var calc3Div4 = createDiv('button l', '-', 'setvalueBox("-")');
calc3.append(calc3Div1, calc3Div2, calc3Div3, calc3Div4)

var calc4 = createDiv('calc-button-row', '');
var calc4Div1 = createDiv('button', '1', 'setvalueBox("1")');
var calc4Div2 = createDiv('button', '2', 'setvalueBox("2")');
var calc4Div3 = createDiv('button', '3', 'setvalueBox("3")');
var calc4Div4 = createDiv('button l', '+', 'setvalueBox("+")');
calc4.append(calc4Div1, calc4Div2, calc4Div3, calc4Div4)

var calc5 = createDiv('calc-button-row', '');
var calc5Div1 = createDiv('button', '.', 'setvalueBox(".")');
var calc5Div2 = createDiv('button', '0', 'setvalueBox("0")');
var calc5Div3 = createDiv('button', '00', 'setvalueBox("00")');
var calc5Div4 = createDiv('button l', '=', 'performcalc()');
calc5.append(calc5Div1, calc5Div2, calc5Div3, calc5Div4)


calcBody.append(calcScreen, calc, calc2, calc3, calc4, calc5);
container.appendChild(calcBody);
main.appendChild(container);
document.body.appendChild(main);