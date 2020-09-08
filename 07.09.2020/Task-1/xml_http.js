var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var req = new XMLHttpRequest;
var url = "https://dog.ceo/api/breeds/list/all";
req.open('Get',url);
req.send();

req.onload =function(){
    console.log("Ready State:" +this.readyState );
    console.log("Status" +this.status);
    var data =JSON.parse(this.responseText);
    console.log("Data"+data);
    console.log("Terrier"+data.message.terrier);
}