const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('File Data:\n', data);
    }
});
