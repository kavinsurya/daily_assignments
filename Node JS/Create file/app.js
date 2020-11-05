const os =require("os");
const fs =require("fs");
const http =require("http");


fs.mkdir("New Folder",function (err) {
    if (err) {
        throw err;
    }
    
    fs.writeFile("New Folder/New file.txt","Hi New File Created",function (err) {
        if (err) {
            console.log("Error");
        }
        
    });
});