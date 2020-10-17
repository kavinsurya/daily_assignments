//Fetching data 
function data(id) {
    var request = new XMLHttpRequest();
    var url =
        "https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;currencies;latlng";

    return new Promise(function(resolve, reject) {
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject("Err");
                }
            }
        };

        request.open("GET", url, true);
        request.send();
    });
}

data()
    .then(function(result) {
        for (let i = 0; i < result.length; i++) {
            var name = result[i].name;
            var capital = result[i].capital;
            var flag = result[i].flag;
            var region = result[i].region;
            var currName = result[i].currencies[0].name;
            cre(flag, name, capital, region, currName);
        }

    })
    .catch(function(error) {
        console.log(error);
    });


//Creating card for diplaying the data's 
function cre(flag, name, capital, region, currName) {
    var div = document.createElement("div");
    div.setAttribute("class", "col");

    var divCard = document.createElement("div");
    divCard.setAttribute("class", "card");



    var card = document.createElement("div");
    card.setAttribute("class", "card-body");

    var heading = document.createElement("h5");
    heading.setAttribute("class", "card-title text-center");
    heading.innerText = name;

    var labels = ["Capital", "Region", "Currency Name"];
    var dl = createDescription(labels, [capital, region, currName]);

    card.append(heading, dl);
    divCard.append(card);
    div.appendChild(divCard);
    document.getElementById("countries").append(div);
}
//Create description
function createDescription(label, value) {
    var dl = document.createElement("dl");


    for (let i = 0; i < label.length; i++) {
        var dt = document.createElement("dt");

        dt.innerText = label[i];

        var dd = document.createElement("dd");

        dd.innerText = value[i];

        dl.append(dt, dd);
    }
    return dl;
}