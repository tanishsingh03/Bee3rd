const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send("Hello World!");   
});
app.get("/users", (req, res) => {
    fstat.readFile("users.json", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
        }
        let alluserd = JSON.parse(data);
        res.json(alluserd);
    }
    );
});

app.listen(5555, () => {
    console.log("Server is running on port 3000");
}   
);