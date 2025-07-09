// function buyproduct(product,cb) {
//     //do some async operation
//   setTimeout(() => {

//        //all the operations completed;
//        console.log("Product bought:", product);
//         cb();
//     });
  
// }

// buyproduct("shoes", function()  {
//     console.log("Product bought successfully");
// });
console.log("Start buying product");
let available = 500;
let product = [{name: "shoes", price: 100}, {name: "shirt", price: 50 }];
function buyproduct(product_name,cb) {
    //do some async operation
 
 let isavailable =product.filter(p => p.name ===  product_name)[0];
 if(!isavailable) {
 return cb("Product not available",null);
}else{
cb(null,isavailable.price)
}

}
buyproduct("shoes", function(err, price)  {
   if(err) {
       console.error("Error:", err);
       return;
   }else{
    console.log("Product bought successfully, price:", price);
    deductamount(price, function(err, message) {
        if(err) {
            console.error("Error:", err);
        } else {
            console.log(message);
        }
    });
   }
});
function deductamount(price, cb) {
   if(available < price) {
       return cb("Insufficient balance", null);
   }    
   else{
    if(available > price) {
        available -= price;
        return cb(null, "Amount deducted successfully, remaining balance: " + available);
    }
   }
}















//const fs = require('fs');

