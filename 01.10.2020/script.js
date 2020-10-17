//Fetching data for rest countries
function data() {
    fetch('"https://restcountries.eu/rest/v2/all?fields=name;capital;region;currencies";')
        .then(response => response.json())
        .then(result => {
            for (let i = 0; i < result.length; i++) {
                var name = result[i].name;
                var capital = result[i].capital;
                var region = result[i].region;
                var currName = result[i].currencies[0].name;
                cre(name, capital, region, currName);
            }
        });

}

//fetching  weather for particular city
function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=bc11586955a2d7c3c259b26c66d19ecc')
        .then(response => response.json())
        .then(result => {
            var weather = document.getElementById('weather' + city);

            var dt = document.createElement('dt');
            dt.className = 'col-sm-5';
            dt.id = 'tempLabel' + city
            dt.innerText = 'Temperature'

            var dd = document.createElement('dd');
            dd.className = 'col-sm-7';
            dd.id = 'temp' + city
            dd.innerHTML = (+result.main.temp - 273).toFixed(2) + '&#8451;';

            var dt2 = document.createElement('dt');
            dt2.className = 'col-sm-5';
            dt.id = 'weatherLabel' + city
            dt2.innerText = 'Weather'

            var dd2 = document.createElement('dd');
            dd2.className = 'col-sm-7';
            dd.id = 'weather' + city
            dd2.innerText = result.weather[0].main;
            weather.append(dt, dd, dt2, dd2)

        })
}
//getting weather for a particualr city 
function weather(city) {
    document.getElementById('weather' + city).innerHTML = '';
    getWeather(city);
}

//Data
function data(id) {
    var request = new XMLHttpRequest();
    var url =
        "https://restcountries.eu/rest/v2/all?fields=name;capital;region;currencies";

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
            var region = result[i].region;
            var currName = result[i].currencies[0].name;
            cre(name, capital, region, currName);
        }

    })
    .catch(function(error) {
        console.log(error);
    });

//Creating card for displaying the data's
function cre(name, capital, region, currName) {
    var div = document.createElement("div");
    div.className = "col";

    var divCard = document.createElement("div");
    divCard.className = "card";



    var card = document.createElement("div");
    card.className = "card-body";

    var heading = document.createElement("h5");
    heading.className = "card-title text-center";
    heading.innerText = name;

    var labels = ["Capital", "Region", "Currency Name"];
    var dl = createDescription(labels, [capital, region, currName]);

    var dl2 = document.createElement('dl');
    dl2.className = 'row';
    dl2.id = 'weather' + capital;

    var weatherButton = document.createElement('button');
    weatherButton.className = 'btn btn-outline-primary ';
    weatherButton.id = 'buttonWeather'
    weatherButton.type = 'button';
    weatherButton.setAttribute('onclick', 'weather("' + capital + '")')

    weatherButton.innerText = "Get Weather";

    card.append(heading, dl, dl2, weatherButton);
    divCard.append(card);
    div.appendChild(divCard);
    document.getElementById("countries").append(div);
}

//To create discription
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

data();