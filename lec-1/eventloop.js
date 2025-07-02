const fs = require('fs');
//console.log("start");
 setTimeout(() => {
    console.log("Timeout 1");   
}, 0);
setImmediate(() => {
    console.log("Immediate 1");
}); 

function dosometask() {
    return new Promise((resolve, reject) => {
        resolve("Task Result");
    });
}

dosometask()
    .then((res) => {
        console.log("Promise Resolved:", res);
    })
    .catch((err) => {
        console.error("Error:", err);
    });

process.nextTick(() => {
    console.log("Next Tick 1");
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