const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Step 1: File read successfully.');

        const updatedData = data + '\nAppended text: This is new content.';

        fs.appendFile('input.txt', '\nAppended text: This is new content.', (err) => {
            if (err) {
                console.error('Error appending to file:', err);
            } else {
                console.log('Step 2: Text appended successfully.');

                fs.writeFile('output.txt', updatedData, (err) => {
                    if (err) {
                        console.error('Error writing new file:', err);
                    } else {
                        console.log('Step 3: New file output.txt written successfully.');
                    }
                });
            }
        });
    }
});
