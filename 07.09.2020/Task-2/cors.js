var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var req = new XMLHttpRequest()
var url = 'https://api.domainsdb.info/v1/domains/search?domain=google';
req.onreadystatechange = function () {
    readyState = this.readyState;
    status = this.status
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

req.open('GET', url)
req.setRequestHeader('Access-Control-Allow-Origin', '*');
req.send();
