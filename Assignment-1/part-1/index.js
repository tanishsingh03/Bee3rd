const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
});
rl.question('Who are you?', name => {
  fs.writeFile('user.txt', `Hello, ${name}!`, (err) => {
    if (err) {
        console.error("Error writing to user.txt:", err);
    }   else {
        console.log("user.txt written successfully");
    }
  readline.close();
    });
});
