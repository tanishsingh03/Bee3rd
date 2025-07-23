const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
express.static(__dirname + '/public');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
//app.use(express.json());
// app.get('/', (req, res) => {
//  res.sendFile(__dirname + '/index.html');
//  // res.sendFile(__dirname + './index.html');
// });
// app.get('/about', (req, res) => {
//  res.sendFile(__dirname + '/about.html');
  
// });


// app.get('/addUser', (req, res) => {
//   res.sendFile(__dirname + '/addUser.html');
  

// });
const filePath = 'users.json';
app.post('/addUser', (req, res) => {
  const user = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email
  }
  res.json(user)

  // Ensure users.json exists with an empty array if not present
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    let users = [];
    try {
      users = JSON.parse(data); // In case file content is corrupted
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return res.status(500).send('Error parsing user data');
    }

    users.push(user);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).send('Error writing file');
      }

      res.send('✅ User added successfully!');
    });
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});