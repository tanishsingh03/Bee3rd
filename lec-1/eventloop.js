const fs = require('fs');
//console.log("start");
 setTimeout(() => {
    console.log("Timeout 1");   
}, 0);
setImmediate(() => {
    console.log("Immediate 1");
}); 
fs.readFile('sample.txt', 'utf-8', (err, data) => {
    console.log("File content:", data);
    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);
    setImmediate(() => {
        console.log("Immediate 2");
    });
});