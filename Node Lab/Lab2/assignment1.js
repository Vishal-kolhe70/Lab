const fs = require('fs');
const path = require('path');

if(fs.existsSync(path.join(__dirname, 'source.txt'))){
    fs.copyFile(path.join(__dirname, 'source.txt'), './Lab2/dest.txt', function(err){
        if(err) return err;
        console.log("Copy Successfully");
    });
}else{
    console.log("File not Exist");
}