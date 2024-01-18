let id = new URLSearchParams(window.location.search).get("id");

let Form = document.querySelector("#form");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let Price = document.querySelector("#price");
let Submit = document.querySelector("#submit");
let Table = document.querySelector("table");
let xetaDiv = document.querySelector(".xeta");

Submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (Name.value !== "" && Des.value !== "" && Price.value !== "") {
        axios.post(`http://localhost:3000/Pulse`, {
            name: Name.value,
            des: Des.value,
            price: Price.value
        }).then(res => window.location = "./index.html")

    } else {
        xetaDiv.innerHTML = "Zehmet olmasa inputlari doldurun"
        xetaDiv.style.border = "1px solid red"
    }
})

fetch("http://localhost:3000/Pulse")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            Table.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.des}</td>
    <td>${element.price}</td>
    <td><button onclick="Delete(${element.id})">Delete</button></td>
</tr>
    `
        });
    })

function Delete(id) {
    axios.delete("http://localhost:3000/Pulse/" + id)
        .then(res => window.location = "./add.html")
}