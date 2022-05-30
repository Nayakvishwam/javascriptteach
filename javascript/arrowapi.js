console.log('This is my tutorial 42');

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}


function postData(){
    url = "https://jsonplaceholder.typicode.com/users";
    let data = `{
        "id": 1001,
        "imageUrl": "https://hub.dummyapis.com/Image?text=ML&height=120&width=120",
        "firstName": "Micah",
        "lastName": "Langworth",
        "email": "Micah.Langworth@dummyapis.com",
        "contactNumber": "4432197592",
        "age": 89,
        "dob": "25/08/1933",
        "salary": 1,
        "address": "Address1"
        }`
    let params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data.firstName)
    )
}

// console.log("Before running getData")
// getData()
// console.log("After running getData")
postData()