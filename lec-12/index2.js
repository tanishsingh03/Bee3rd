// 1.create a new element using createElement
// 2. inser require data into the element either by using innerHTML or innerText
//3.insert new element parent container using append Child or append
let todocontainer = document.querySelector(".todocontainer")
let todo = {
    id:2345,
    title : "todo 1",
}
function addtodo(todo){
    let li = document.createElement("li");
    li.innerHTML = ` <div>
                <input type="checkbox" class="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button>cross</button>
                    <button>slash</button>
                </div>
                

            </div>`;
            todocontainer.appendChild(li);
            



}
