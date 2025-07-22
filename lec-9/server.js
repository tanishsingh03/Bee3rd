const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 3999;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Server is working!');
});
app.post('/api/data', async (req, res) => {
  const { name, age } = req.body;
let all =[];
let he = { name, age };
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) {
        return res.status(500).send("Error reading file: " + err);
    }
    all=Jason.parse(data || '[]');
    all.push(he);
   fs.writeFile('data.txt', JSON.stringify(all), (err) => { 
    if (err) {
        return res.status(500).send("Error writing to file: " + err);
    }
    res.status(200).send("Data saved successfully"

    );
    }





)

});
  





});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});