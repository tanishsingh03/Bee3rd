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
// let str="";
//Method 1 of insertion of data in file by loop 
// for(let i=2;i<process.argv.length;i++){
//     str+=process.argv[i]+" ";
// }
// fs.writeFile("../assign.txt",str,function(err,data){
//     if(err)return console.log(err)
//         console.log("File created with given str");
// })