let p = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
});
console.log("Start buying product");
let available = 500;
let product = [{name: "shoes", price: 100}, {name: "shirt", price: 50 }];
function deductamount(price) {
    return new Promise((resolve, reject) => {
        if (available < price) {
            reject("Insufficient balance");
        } else {
            available -= price;
            resolve("Amount deducted successfully, remaining balance: " + available);
        }
    });
}
//console.log(p);
function buyproduct(product_name) {
    return new Promise((resolve, reject) => {
        let isavailable = product.filter(p => p.name === product_name)[0];
        if (!isavailable) {
            reject("Product not available");
        } else {
            resolve(isavailable.price);
        }
    });
}  
async function buyproductAsync() { 
try {
    let a = await buyproduct("shoes");
    let msg = await deductamount(a);
    console.log("Product bought successfully, price:", a);
    console.log(msg);
}
catch (err) {   
    console.error("Error:", err);
}   
console.log("End of program");
}
buyproductAsync();