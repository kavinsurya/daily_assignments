const os =require("os");
const fs =require("fs");
const http =require("http");

var date = new Date();
fs.mkdir("Date-Time",function (err) {
    if (err) {
        throw err;
    }
    
    fs.writeFile("Date-Time/Date-time.txt",`${date}`,function (err) {
        if (err) {
            console.log("Error");
        }
        
    });
});