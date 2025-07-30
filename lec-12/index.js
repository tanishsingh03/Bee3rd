let a = document.querySelector(".hh");
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

const colors = [
  "#FF5733", 
  "#33FF57", 
  "#3357FF", 
  "#FF33A1",
  "#A133FF",
  "#33FFF6", 
  "#FFD433", 
  "#FF8F33", 
  "#8DFF33", 
  "#333EFF"  
];
function randomColor() {
   let index = Math.floor(Math.random() * colors.length);
   return colors[index];
}
let j=null
btn.addEventListener("click", function() {
  a.style.backgroundColor = randomColor();
    });
    btn3.addEventListener("click", function() {
        
            j = setInterval(function() {
                a.style.backgroundColor = randomColor();
            }, 100);
    
    });
btn2.addEventListener("click", function() {
    clearInterval(j);
    j = null;
    a.style.backgroundColor = "white"; 
    });





