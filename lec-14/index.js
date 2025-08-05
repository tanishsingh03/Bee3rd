const express = require("express");
const fs = require("fs");
const app = express();

// Serve static files (like index.html, index.js frontend script)
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Basic route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Get users from users.json
app.get("/users", (req, res) => {
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        try {
            const allUsers = JSON.parse(data);
            res.json(allUsers);
        } catch (parseErr) {
            res.status(500).send("Invalid JSON format in users.json");
        }
    });
});

app.post("/submit", (req, res) => {
    const { id, name, username, role } = req.body;
    const newUser = { id, name, username, role };

    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {  
            return res.status(500).send("Error reading file");
        }
        try {
            const allUsers = JSON.parse(data);
            allUsers.push(newUser);
            const newUsersJSON = JSON.stringify(allUsers);
            fs.writeFile("users.json", newUsersJSON, (writeErr) => {
                if (writeErr) {
                    return res.status(500).send("Error writing to file");
                }
                res.status(201).send("User added successfully");
            });
            } catch (parseErr) {
            res.status(500).send("Invalid JSON format in users.json");
        }
    }
    );
});

// Start the server
app.listen(5555, () => {
    console.log("Server is running on port 5555");
});
