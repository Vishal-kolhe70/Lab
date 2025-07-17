const fs = require('fs');
const path = require('path');

let file1;
let file2;

try {
    let filePath1 = path.join(__dirname, 'file1.txt');
    file1 = fs.readFileSync(filePath1, 'utf-8');

    let filePath2 = path.join(__dirname, 'file2.txt');
    file2 = fs.readFileSync(filePath2, 'utf-8');
    
} catch (err) {
  console.log('Something went wrong while reading the file.');
  console.log('Error:', err.message);
}

if(file1 && file2){
    fs.writeFile('./Lab2/mergedfile.txt', `${file1}\n${file2}`, function(err){
    if(err) return err;
    console.log('File Merged Successfully');
})
}
