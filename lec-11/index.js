
//accesing dom ele"
// 1.using Id
// 2.using class
// 3.using tag name
//4.using query selector
//5.using query selector all    

// let el1 = document.getElementById("id1");
// console.log(el1);
// let el2 = document.getElementsByClassName("item");
// console.log(el2);
let ele3 = document.querySelector("p");
console.log(ele3);


//properties of dom element
// console.log(ele3.innerHTML); 
// console.log(ele3.innerText);
// console.log(ele3.outerHTML);
// console.log(ele3.textContent);
// console.log(ele3.className);
// console.log(ele3.id);    
// console.log(ele3.tagName);
// console.log(ele3.type);
// console.log(ele3.name);
// console.log(ele3.style);
// console.log(ele3.attributes);    
let ele4 = document.querySelectorAll(".item");
console.log(ele4);  
// console.log(ele4[0].innerHTML);
// console.log(ele4[1].innerHTML);  


let ele5 = document.querySelector("#container");
//console.log(ele5);
let data = ele5.innerText;
console.log(data);
let data2 = ele5.innerHTML;
console.log(data2);

let ele6 = document.querySelector("ul");ele6.innerHTML = `<li class="item">one</li>
<li class="item">two</li>   
<li class="item">three</li>
<li class="item">four</li>`;


let a = document.getElementById("signup")
let b= document.getElementById("login");
b.style.display = "none";
a.addEventListener("click", function(event) {
    b.style.display = "block";
    a.style.display = "none";
});


