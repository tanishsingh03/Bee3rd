const fs = require('fs');

fs.writeFile('../demo.txt', 'Hello, World!', (err) => {
    if (err) {
        return console.error("Error writing demo.txt:", err);
    }
    console.log("demo.txt written successfully");

    fs.writeFile('demo2.txt', 'g26 hello', (err) => {
        if (err) {
            return console.error("Error writing demo2.txt:", err);
        }
        console.log("demo2.txt written successfully");

        fs.readFile('../demo.txt', 'utf-8', (err, data1) => {
            if (err) {
                return console.error("Error reading demo.txt:", err);
            }
            console.log("demo.txt content:", data1);

            fs.readFile('demo2.txt', 'utf-8', (err, data2) => {
                if (err) {
                    return console.error("Error reading demo2.txt:", err);
                }
                console.log("demo2.txt content:", data2);

                const result = data1 + '\n' + data2;

                fs.writeFile('demo3.txt', result, (err) => {
                    if (err) {
                        return console.error("Error writing demo3.txt:", err);
                    }
                    console.log("demo3.txt written successfully with combined content.");
                });
            });
        });
    });
});
