//Node Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// database
let mentor = [ {
    id: 1,
    name: 'rahul',
    mail:"123@gmail.com",
    subject: 'c++'
}];
let student = [ {
    id: 1,
    name: 'rahul123',
    subject: 'c++'
}];

//Api to display mentor list 
app.get("/mentors", (req, res) => {
    res.json(mentor)
})
//Api to display student list 
app.get("/students", (req, res) => {
    res.json(student)
})

//Api to add mentor
app.post("/addMentors", (req, res) => {
    req.body.id = mentor.length + 1;
    mentor.push(req.body)
    res.json(
        {
            message: "Mentor added"
        }
    )
})

//Api to add student 
app.post("/addStudents", (req, res) => {
    req.body.id = student.length + 1;
    student.push(req.body)
    res.json(
        {
            message: "Student added"
        }
    )
})


app.get('/students/:name', (req, res) => {
    let studentdata = students.filter((student) => student.mentor === req.params.name);
    (studentdata.length !== 0) ? res.json(studentdata): res.status(400).json({ msg: `Mentor with name ${req.params.name} not found` });
})


app.get('/student.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'student.html'));
})

// hosting  to port 3000
app.listen(3000, () => {
    console.log('Hosted on port 3000');
})