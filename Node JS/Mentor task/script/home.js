async function addMentor(){
    let data ={
        name :document.getElementById("mentorName").value,
        mail:document.getElementById("mentorEmail").value,
        subject :document.getElementById("mentorSubject").value
    }

    await fetch("http://localhost:3000/addMentors",{
        method :"POST",
        body :JSON.stringify(data),
        headers :{
            "Content-type": "application/json"
        }
    })
}


let mentordata;
async function loaddata() {
    let dataraw = await fetch("http://localhost:3000/mentors");
    mentordata = await dataraw.json();
    let table = document.getElementById('mentordata');

    let tbody = document.createElement('tbody');

    mentordata.forEach((val) => {
        let tr = document.createElement('tr');
        let tdname = document.createElement('td');
        let tdmail = document.createElement('td');
        let tdsubject = document.createElement('td');
        
        let addstudent = document.createElement('td');
        let getstudents = document.createElement('td');

        tdname.innerHTML = val.name;
        tdmail.innerHTML = val.mail;
        tdsubject.innerHTML = val.subject;
      
        addstudent.innerHTML = `<button onclick="student(${val.id})" class="btn btn-success">Add Student</button>`
        getstudents.innerHTML = `<button onclick="getstudent('${val.name}')" class="btn btn-primary">All Students</button>`

        tr.append(tdname, tdmail, tdsubject,  addstudent, getstudents);
        tbody.append(tr);
    })

    table.append(tbody);
}

loaddata();



async function displayStudentForm(mentorId) {
    // document.getElementById('studentForm').style.display = 'block';
    var x = document.getElementById("studentForm");
    x.style.display = "block";
    let reqMentor = mentordata.find((mentor) => mentor.id == mentorId);
    console.log(reqMentor);
    document.getElementById('mentorName').value = `${reqMentor.id},${reqMentor.name},${reqMentor.subject}`;
    document.getElementById("mentorName").disabled = true;
    x.style.display = "none";
  
}


async function addStudent() {
  
    let data = {
        name: document.getElementById('studentname').value,
        subject: document.getElementById('studentsubject').value,
        mentor: document.getElementById('mentor').value
    }

    await fetch('http://localhost:3000/addStudents', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-Type': "application/json"
        }

    })
    
   
   

   
}

async function getstudent(name) {
    let rawdata = await fetch(`http://localhost:3000/students/${name}`);
    let studentdata = await rawdata.json();

    let ul = document.getElementById('students');
    ul.innerHTML = '';

    studentdata.forEach((student) => {
        let li = document.createElement('li');
        li.innerHTML = student.name;

        ul.append(li);
    });

    document.getElementById('studentdetailsdiv').style.visibility = (document.getElementById('studentdetailsdiv').style.visibility === 'visible') ? 'hidden' : 'visible';
}

function mentorform() {
    document.getElementById('mentordiv').style.visibility = "visible"
}