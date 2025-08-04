let userContainer= document.querySelector(".user-container");

function getuserdata(URL){
  fetch(URL)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        data.forEach((user) => {
            displayuser(user);
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

function displayuser(data) {
    let li = document.createElement("li");
    li.setAttribute("class", "user-item");
    li.innerHTML = `<div class="user=info">
    
                    <h1>${data.name}</h1>
                    <p>${data.email}</p>    
                    <p>${data.phone}</p>
                    <p>${data.website}</p>
                    <div class="user-button">
                <button class="user-delete">❌</button>
                <button class="user-edit">👍 </button>
            </div> `;

    userContainer.appendChild(li);
    let btn = document.createElement("button");    
}
    
    





getuserdata("https://jsonplaceholder.typicode.com/users");
//getuserdata("https://jsonplaceholder.typicode.com/posts");

