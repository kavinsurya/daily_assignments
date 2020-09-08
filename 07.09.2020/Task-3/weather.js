var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=pollachi&appid=c4e86c152eb17ceaea19646ff4511457';
console.log(url_string)
request.onreadystatechange = function () {
    readyState = this.readyState;
    status = this.status;
    console.log("Ready State:" +readyState );
    console.log("Status" +status);
    if (readyState == 4 && status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
    else {
        return 0
    }

};
request.open('GET', url_string, true)
request.send();




