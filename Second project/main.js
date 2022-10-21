var item = document.getElementById("Item");
fetch('https://dummyjson.com/users')
.then(r => r.json())
.then(r =>{
    console.log(r.users);
    var users = r.users ;
   users.forEach(users => {
    Item.innerHTML += `   <div class="card">
            
        <img src="${users.image}" alt="">
        <hr>
        <p>name:${users.firstName} </p>
        <hr>
        <p>address:${users.address.address} </p>
        <hr>
        <p>Phone:<a herf="tell:${users.phone}">${users.phone}</p>
        <hr>
        <p>Email:${users.email}</p>

        </div>          `;
    });


});