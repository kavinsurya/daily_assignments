
var req = new XMLHttpRequest;
var url = "https://dog.ceo/api/breeds/list/all";


req.onload =function(){
    console.log("Ready State:" +this.readyState );
    console.log("Status" +this.status);
    if (this.readyState == 4 && this.status == 200) {
    var data =JSON.parse(this.responseText);
    console.log("Data"+data);
    console.log("Terrier"+data.message.terrier);
    }
}
req.open('Get',url,true);
req.send();