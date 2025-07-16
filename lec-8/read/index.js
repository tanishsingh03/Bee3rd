// const fs = require('fs');
// fs.readFile('../user.txt', 'utf-8', (err, data) => {
//   if(err) {
//     return console.error("Error reading user.txt:", err);
//   }
//   fs.readFile('../user1.txt', 'utf-8', (err, data1) => {
//     if(err) {
//       return console.error("Error reading user1.txt:", err);
//     }
//     let users = JSON.parse(data);
//     let users1 = JSON.parse(data1);
    
//     let mergedUsers = [...users, ...users1];
    
//     fs.writeFile('../user2.txt', JSON.stringify(mergedUsers), (err) => {
//         if(err) {
//             return console.error("Error writing to user2.txt:", err);
//         }
//         console.log("user2.txt written successfully");
//     });
//   });
// });
const fs = require('fs');
const {read} = require('../operation/util.js');
async function readFile(filepath) {
    try {
        let users = await read(filepath);
        console.log("Users read from file:", users);
        
    } catch (err) {
        console.error(err);
    }
}
readFile('../user.txt')
readFile('../user1.txt')