var userData = [];
var isEdit = false;
var editingData = null;
var password = document.getElementById("password"),
    confirm_password = document.getElementById("password1");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
async function getData() {
    var requestUrl = await fetch("https://5f7ab2ab4ebc4100161cafca.mockapi.io/Inputform");
    var userData = await requestUrl.json();
    apiData = userData;
    dispalyData(userData);
}


function dispalyData(userData) {
    var tr = document.createElement('tr');
    var thName = document.createElement('th');
    thName.innerText = 'Name';
    var thEmail = document.createElement('th');
    thEmail.innerText = 'E-mail';
    var thPassword = document.createElement('th');
    thPassword.innerText = 'Password';
    var thPassword1 = document.createElement('th');
    thPassword1.innerText = 'Password1';
    var thCountry = document.createElement('th');
    thCountry.innerText = 'Country';
    var thState = document.createElement('th');
    thState.innerText = 'state';
    var thCity = document.createElement('th');
    thCity.innerText = 'City';
    var thAddress1 = document.createElement('th');
    thAddress1.innerText = 'Address1';
    var thAddress2 = document.createElement('th');
    thAddress2.innerText = 'Address2';
    var thGender = document.createElement('th');
    thGender.innerText = 'Gender';
    var thMartialStatus = document.createElement('th');
    thMartialStatus.innerText = 'Martial Status';
    var thFavFood = document.createElement('th');
    thFavFood.innerText = 'Fav Food';
    var thFavColor = document.createElement('th');
    thFavColor.innerText = 'Fav Color';
    var edit = document.createElement('th');
    edit.innerText = 'edit';
    var dele = document.createElement('th');
    dele.innerText = 'Delete';
    tr.append(thName, thEmail, thPassword, thPassword1, thCountry, thState, thCity, thAddress1, thAddress2, thGender, thMartialStatus, thFavFood, thFavColor, edit, dele);
    document.getElementById('table').appendChild(tr);
    userData.forEach(element => {
        var tr1 = document.createElement('tr');
        var tdName = document.createElement('td');
        tdName.innerHTML = element.name;
        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = element.email;
        var tdPassword = document.createElement('td');
        tdPassword.innerHTML = element.password;
        var tdPassword1 = document.createElement('td');
        tdPassword1.innerHTML = element.password2;
        var tdCountry = document.createElement('td');
        tdCountry.innerHTML = element.country;
        var tdState = document.createElement('td');
        tdState.innerHTML = element.state;
        var tdCity = document.createElement('td');
        tdCity.innerHTML = element.city;
        var tdAddress1 = document.createElement('td');
        tdAddress1.innerHTML = element.address1;
        var tdAddress2 = document.createElement('td');
        tdAddress2.innerHTML = element.address2;
        var tdGender = document.createElement('td');
        tdGender.innerHTML = element.gender;
        var tdMartialStatus = document.createElement('td');
        tdMartialStatus.innerHTML = element.martialstatus;
        var tdFavFood = document.createElement('td');
        tdFavFood.innerHTML = element.favcolor;
        var tdFavColor = document.createElement('td');
        tdFavColor.innerHTML = element.favfood;
        var tdEdit = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.className = "btn btn-primary";
        editButton.innerText = 'Edit';
        tdEdit.appendChild(editButton);
        var tdDelete = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.className = 'btn btn-danger';
        deleteButton.innerText = 'Delete';
        tdDelete.appendChild(deleteButton);
        editButton.setAttribute("onclick", "editRow(" + element.id + ")");
        deleteButton.setAttribute("onclick", "deleterow(" + element.id + ")");
        tr1.append(tdName, tdEmail, tdPassword, tdPassword1, tdCountry, tdState, tdCity, tdAddress1, tdAddress2, tdGender, tdMartialStatus, tdFavFood, tdFavColor, tdEdit, tdDelete);
        document.getElementById('table').appendChild(tr1);

    });

}


async function deleterow(id) {

    var result = confirm("Are you sure do you want to delete?");
    if (result) {
        var deleterow = await fetch(
            "https://5f7ab2ab4ebc4100161cafca.mockapi.io/Inputform/" + id, {
                method: "DELETE",
            }

        );
        console.log("deleted");
        await deleterow.json();
        getData();
    }
}


function editRow(id) {

    document.getElementById("name").value = apiData[id - 1].name;
    document.getElementById("email").value = apiData[id - 1].email;
    document.getElementById("password").value = apiData[id - 1].password;

    document.getElementById("password1").value = apiData[id - 1].password2;
    document.getElementById("country").value = apiData[id - 1].country;
    document.getElementById("state").value = apiData[id - 1].state;
    document.getElementById("city").value = apiData[id - 1].city;
    document.getElementById("address").value = apiData[id - 1].address1;
    document.getElementById("address2").value = apiData[id - 1].address2;
    document.getElementById("gender").value = apiData[id - 1].gender;
    document.getElementById("status").value = apiData[id - 1].martialstatus;
    document.getElementById("food").value = apiData[id - 1].favfood;
    document.getElementById("color").value = apiData[id - 1].favcolor;
    isEdit = true;
    editingData = apiData[id - 1].id;
}


async function addData() {

    var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        password2: document.getElementById("password1").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        address1: document.getElementById("address").value,
        address2: document.getElementById("address2").value,
        gender: document.getElementById("gender").value,
        martialstatus: document.getElementById("status").value,
        favfood: document.getElementById("food").value,
        favcolor: document.getElementById("color").value
    };
    console.log(data)

    if (!isEdit) {
        var postData = await fetch(
            "https://5f7ab2ab4ebc4100161cafca.mockapi.io/Inputform", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
    } else {
        var postData = await fetch(
            "https://5f7ab2ab4ebc4100161cafca.mockapi.io/Inputform/" + editingData, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
        isEdit = false;
        editingData = null;
    }
    console.log(postData);
}





getData();