let data = document.getElementById("data")
let id = document.getElementById("submit")
let maindata = localStorage.getItem("notes")
let lensmall = 0
let numvar = 0
let html = ''
if (maindata != null) {
    let maindata2 = JSON.parse(localStorage.getItem("notes"))
    let maindata3 = JSON.parse(localStorage.getItem("notetitle"))
    let mainlen = JSON.parse(localStorage.getItem("notes")).length
    for (let i = 0; i <= mainlen; i++) {
        if (mainlen == lensmall) {
            break
        }
        numvar = i
        html += `<div class="card mt-5 my-5 mt-2 noteCard" style="width:18rem;margin-left:124px">
                <div class="card-body">
                <h5 class="card-title">NoteTitle =${maindata3[i]}</h5>
                <p class="card-text">${maindata2[i]}</p>
                <button class="btn btn-primary" id='Delete${i}'>Delete${i + 1}</button>
            </div></div>`
        lensmall = lensmall + 1
    }
    data.innerHTML = html;
}
id.addEventListener("click", function (e) {
    let note = document.getElementById("exampleFormControlTextarea1").value
    let titlenote = document.getElementById("title").value
    list1 = []
    list2 = []
    let maindata = localStorage.getItem("notes")
    let maintitle = localStorage.getItem("Notetitle")
    if (maindata == null) {
        list1.push(note)
        list2.push(titlenote)
        localStorage.setItem("notes", JSON.stringify(list1))
        localStorage.setItem("notetitle", JSON.stringify(list2))
        window.location = "http://127.0.0.1:5500/projects/project1.html"
    }
    else {
        let len = JSON.parse(localStorage.getItem("notes")).length
        let info = JSON.parse(localStorage.getItem("notes"))
        let infotitle = JSON.parse(localStorage.getItem("notetitle"))
        info.push(note)
        infotitle.push(titlenote)
        localStorage.setItem('notes', JSON.stringify(info))
        localStorage.setItem('notetitle', JSON.stringify(infotitle))
        window.location = "http://127.0.0.1:5500/projects/project1.html"
    }

})
document.getElementById(`submi`).addEventListener("click", function (e) {
    let mainall = JSON.parse(localStorage.getItem('notetitle'))
    let mainall2 = JSON.parse(localStorage.getItem('notes'))
    let lsi = []
    let no = []
    for (let i = 0; i < mainall.length; i++) {
        let info = mainall[i].toLowerCase()
        if (info.includes(document.getElementById("search").value.toLowerCase())) {
            lsi.push(mainall[i])
            localStorage.setItem("no", JSON.stringify(lsi))
            no.push(mainall2[i])
            localStorage.setItem("value", JSON.stringify(no))
        }
    }
});
let maindatalist = []
let maindatalist2 = []
for (let i = 0; i <= numvar; i++) {
    document.getElementById(`Delete${i}`).addEventListener("click", function (e) {
        let element = e.target.innerText[6]
        let numbermain = Number(element) - 1
        let data = JSON.parse(localStorage.getItem('notes'))
        let datatitle = JSON.parse(localStorage.getItem('notetitle'))
        for (let j = 0; j < data.length; j++) {
            if (numbermain != j) {
                maindatalist.push(data[j])
                maindatalist2.push(datatitle[j])
            }
        }
        // console.log(data)
        localStorage.setItem('notes', JSON.stringify(maindatalist))
        localStorage.setItem('notetitle', JSON.stringify(maindatalist2))

        // data.pop(numbermain)
        // console.log(data)
        window.location = "http://127.0.0.1:5500/projects/project1.html"
    })
}
