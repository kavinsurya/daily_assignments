const fs =require("fs");

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