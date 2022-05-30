let var1 = document.getElementById("checkdiv")
let list1 = []
let list2 = []
let len = var1.children.length - 1
let data = var1.children
for (let i = 0; i <= len; i++) {
    list1.push(data[i].className)
}
for (let i = 0; i <= len - 1; i++) {
    if (localStorage.getItem(`class${i}`) != null) {
        var1.children[i].innerText = localStorage.getItem(`class${i}`)
    }
}
var1.style.backgroundColor = "silver"
var1.addEventListener("click", function (e) {
    for (let i = 0; i <= list1.length - 1; i++) {
        if (e.target.className == list1[i]) {
            let mainclass = document.getElementsByClassName(list1[i])
            let input = document.createElement("input")
            input.type = "text"
            input.className = `mainclass${i}`
            input.id = `id${i}`
            var1.children[i].replaceWith(input)
            list2.push(Number(i))
            let div = document.getElementsByClassName("class4")
            div[0].innerHTML = `<input type="submit" onclick="Enter();" value="DONE"/>`
        }
    }
})

function Enter() {
    for (let i = 0; i <= list2.length - 1; i++) {
        let var2 = var1.children[list2[i]].value
        localStorage.setItem(`class${list2[i]}`, var2)
        let data = document.createElement("h1")
        data.innerText = `${localStorage.getItem(`class${list2[i]}`)}`
        data.className = `class${list2[i]}`
        console.log(data)
        var1.children[list2[i]].replaceWith(data)
    }
    list2 = []
}
