const fs = require('fs');
function read(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                return reject("Error reading user.txt: " + err);    
            }
            let users = JSON.parse(data);   
           resolve(users);
        });
    });
}
function write(filepath, data) {
    return new Promise((resolve, reject) => {   
        fs.writeFile(filepath, JSON.stringify(data), (err) => {
            if (err) {
                return reject("Error writing to user.txt: " + err);
            }
            resolve("File written successfully");
        });
    });
}



module.exports.read = read;

           







