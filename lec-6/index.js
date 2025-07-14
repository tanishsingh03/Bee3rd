let user =[
    {
        id:1,
        name:"John",
        age : 23
    },
     {
        id:2,
        name:"Jane",
        age : 16
    }

]

function isAllowed(id, callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const userFound = user.find(u => u.id === id);
        if (!userFound) {
            return callback(new Error("User not found"), null);
        }
        if (userFound.age < 18) {
            return callback(new Error("User is not allowed"), null);
        }
        return callback(null, "User is allowed");
    }, 1000); 
    
}


// console.log(isAllowed(1));
// console.log(isAllowed(2));


isAllowed(1,(err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
isAllowed(2, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
}); 