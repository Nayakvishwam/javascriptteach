let data = JSON.parse(localStorage.getItem("value"))
console.log(data)
let data2 = JSON.parse(localStorage.getItem("no"))
let data3 = document.getElementById("data")
localStorage.removeItem('value')
localStorage.removeItem('no')
if (data == null) {
    data3.innerHTML = `<h1 style="color:red">We have not any data</h1>`
}
else {
    let html = ``
    for (let i = 0; i < data.length; i++) {
        html += `<div class="card mt-5 my-5 mt-2 noteCard" style="width:18rem;margin-left:124px">
    <div class="card-body">
    <h5 class="card-title">Note title =${data2[i]}</h5>
    <p class="card-text">${data[i]}</p>
    <button class="btn btn-primary" id='Delete${i}'>Delete${i}</button>
</div></div>`
        data3.innerHTML = html;
    }
}

