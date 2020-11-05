const fs = require("fs");
const http = require("http");
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readdir( "F:/Guvi/Tasks/daily_assignments/Node JS/Folder files/files", function (err, files) {
        if (err) {
            throw err;
        }
      
        let result = "";
        files.forEach(element => {
           let type = path.extname(element).slice(1);
            console.log(type);
            let url =""
            if (type =="docx") {
                url ="https://www.flaticon.com/svg/static/icons/svg/2306/2306065.svg";
            } 
            else if(type =="jpg"){
                url ='https://www.flaticon.com/svg/static/icons/svg/337/337940.svg';
            }
            else if(type =="txt"){
                url ='https://www.flaticon.com/svg/static/icons/svg/2921/2921724.svg'
            }
            else if(type =="pdf"){
                url ='https://www.flaticon.com/svg/static/icons/svg/337/337946.svg'
            }
            else if(type =="png"){
                url ='https://www.flaticon.com/svg/static/icons/svg/3143/3143491.svg'
            }
           
            result += `<img src='${url}' width =40 height =40> ${element}<br><br><br> `;

        });
        res.end(`<ul>${result}</ul>`)
    })

})
server.listen(3000, () => {
    console.log('hosted on  port 3000')
});





