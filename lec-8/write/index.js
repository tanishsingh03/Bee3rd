let users = [
    {
        name:"tanish",
        age: 20,
        city: "Delhi"
    },
    {
        name:"sahil",
        age: 22,
        city: "Mumbai"
    },
    {
        name:"priya",
        age: 19,
        city: "Bangalore"
    }   
]
let users1 = [
    {
        name:"tanish",
        age: 20,
        city: "Delhi"
    },
    {
        name:"sahil",
        age: 22,
        city: "Mumbai"
    },
    {
        name:"priya",
        age: 19,
        city: "Bangalore"
    }   
]
const fs = require('fs');
fs.writeFile('../user.txt',JSON.stringify(users) , function(err) {
    if(err) {
      return  console.error("Error writing to user.txt:", err);
    }
    console.log("user.txt written successfully");
});
fs.writeFile('../user1.txt',JSON.stringify(users1) , function(err) {
    if(err) {
      return  console.error("Error writing to user.txt:", err);
    }
    console.log("user1.txt written successfully");
});






