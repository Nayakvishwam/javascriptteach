let Addfruit = document.getElementById("addfuites")
Addfruit.addEventListener("click", Adduserfruit)
function Adduserfruit(params) {
    //     let Addfruit = document.getElementById("Adduserwant")
    //     Addfruit.innerHTML = `<div class="md:flex md:items-center mb-6">
    //     <div class="md:w-1/3">
    //         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
    //             Add fruit name
    //         </label>
    //     </div>
    //     <div class="md:w-2/3">
    //         <input
    //             class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    //             type="text" id="Fruitname">
    //     </div>
    // </div>
    // <div class="md:flex md:items-center mb-6">
    //     <div class="md:w-1/3">
    //         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
    //             Add fruit price
    //         </label>
    //     </div>
    //     <div class="md:w-2/3">
    //         <input
    //             class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    //            type="number" placeholder="Add fruit price" id="Fruitprice">
    //     </div>
    // </div>
    // <div class="md:flex md:items-center">
    //     <div class="md:w-1/3"></div>
    //     <div class="md:w-2/3">
    //         <button
    //             class="lr-5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    //             type="button" id="submit">
    //             Add your fruit in json file
    //         </button>
    //     </div>
    // </div>`
    let tableset = document.getElementById("table")
    tableset.innerHTML = `<thead>
    <tr>
        <th>Name</th>
        <th>price</th>
    </tr>
    </thead>`
    class Allstudent {
        adddata() {
            let Studentdetails = new XMLHttpRequest()
            Studentdetails.open("GET", "fruites.json", true)
            Studentdetails.onload = function () {
                if (this.status === 200) {
                    let obj = JSON.parse(this.responseText);
                    let table = document.getElementById("table")
                    let str = "<tbody>";
                    for (let key in obj) {
                        if (key != obj.length - 1)
                            str += `<tr><td>${obj[key].name}</td><td>${obj[key].price} </tr>`;
                        else if (key == obj.length - 1) {
                            str += `<tr><td>${obj[key].name}</td><td>${obj[key].price} </tr></tbody>`;
                        }
                    }
                    table.innerHTML += str
                }
                else {
                    console.log("Some error occured")
                }
            }
            Studentdetails.send()
        }
    }
    let obj1 = new Allstudent()
    obj1.adddata()
}
let Addstudent = document.getElementById("addstudents")
Addstudent.addEventListener("click", Addsecondchoice)
function Addsecondchoice(params) {
    let addstudent = document.getElementById("table")
    addstudent.innerHTML = `<thead>
    <tr>
        <th>Name</th>
        <th>Rollno</th>
    </tr>
    </thead>`
    class Allstudent {
        adddata() {
            let Studentdetails = new XMLHttpRequest()
            Studentdetails.open("GET", "student.json", true)
            Studentdetails.onload = function () {
                if (this.status === 200) {
                    let obj = JSON.parse(this.responseText);
                    let table = document.getElementById("table")
                    let str = "<tbody>";
                    for (let key in obj) {
                        if (key != obj.length - 1)
                            str += `<tr><td>${obj[key].name}</td><td>${obj[key].RollNumbers} </tr>`;
                        else if (key == obj.length - 1) {
                            str += `<tr><td>${obj[key].name}</td><td>${obj[key].RollNumbers} </tr></tbody>`;
                        }
                    }
                    table.innerHTML += str
                }
                else {
                    console.log("Some error occured")
                }
            }
            Studentdetails.send()
        }
    }
    let obj1 = new Allstudent()
    obj1.adddata()

}