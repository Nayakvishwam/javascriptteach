document.getElementById("submit").addEventListener("click", function libradyadd(e) {
    class libradyalldetails {
        constructor(bookname, authorname, typeofbook) {
            this.bookname = bookname;
            this.authorname = authorname;
            this.typeofbook = typeofbook;
        }
        showerror(type, messsage) {
            let letsetmessagesoferror = document.getElementById("showerror")
            letsetmessagesoferror.className = "notification is-danger"
            letsetmessagesoferror.style.backgroundColor = "lightcoral"
            letsetmessagesoferror.innerHTML = messsage
            let letremovemessagesoferror = document.getElementById("Remove")
            letremovemessagesoferror.addEventListener("click", function Remove() {
                letsetmessagesoferror.style.backgroundColor = "white"
                letsetmessagesoferror.innerHTML = ""
            })
            setTimeout(function () {
                letsetmessagesoferror.style.backgroundColor = "white"
                letsetmessagesoferror.innerHTML = ""
            }, 5000)
        }
        setdata(type, message) {
            let setdetails = document.getElementById("table")
            setdetails.innerHTML += `<tr>
                                <td>${this.bookname}</td>
                                <td>${this.authorname}</td>
                                <td>${this.typeofbook}</td>
                                </tr>`
            let showsuucessmessage = document.getElementById("showerror")
            showsuucessmessage.className = "notification"
            showsuucessmessage.style.backgroundColor = "lightgreen"
            showsuucessmessage.innerHTML = message
            let setdetailsremovemessage = document.getElementById("Remove")
            setdetailsremovemessage.addEventListener("click", function reomvemessage() {
                showsuucessmessage.style.backgroundColor = "white"
                showsuucessmessage.innerHTML = ""
            })
            setTimeout(function () {
                showsuucessmessage.style.backgroundColor = "white"
                showsuucessmessage.innerHTML = ""
            }, 5000)
        }
    }
    let bookname = document.getElementById("bookname").value;
    let authorname = document.getElementById("authorname").value;
    let typeofbookone = document.getElementById("type2");
    let typeofbooksecond = document.getElementById("type");
    let typeofbookthird = document.getElementById("type1");
    let getdeatilsoftable = document.getElementById("table")
    let data = getdeatilsoftable.innerText
    let alldata = data.split("\t")
    // for (i = 0; i < alldata.length; i++) {
    //     if (alldata[i]==bookname || alldata[i]==authorname){
    //         let newobjects = new libradyalldetails()
    //         newobjects.showerror(typeofbookone, `<button class="delete" id="Remove"></button> Sorry we donot add this type of book`)
    //         e.stopPropagation();
    //     }
    // }
    if (alldata.includes(bookname) || alldata.includes(authorname)) {
        let newobjects = new libradyalldetails()
        newobjects.showerror(typeofbookone, `<button class="delete" id="Remove"></button> Sorry we donot add this type of book`)
    }
    else if (typeofbookone.checked) {
        if (bookname != "" && bookname != " " && authorname != "" && authorname != " ") {
            let selectedtypebook = document.getElementById("type2").value;
            let newObjects = new libradyalldetails(bookname, authorname, selectedtypebook)
            newObjects.setdata(selectedtypebook, `<button class="delete" id="Remove"></button>,Success fully add this book! Congartulations`)

        }
        else {
            let newobjects = new libradyalldetails()
            newobjects.showerror(typeofbookone, `<button class="delete" id="Remove"></button> Sorry we donot add this type of book`)
        }
    }
    else if (typeofbooksecond.checked) {
        if (bookname != "" && bookname != " " && authorname != "" && authorname != " ") {
            let selectedtypebook = document.getElementById("type").value;
            let newObjects = new libradyalldetails(bookname, authorname, selectedtypebook)
            newObjects.setdata(selectedtypebook, `<button class="delete" id="Remove"></button>Success fully add this book! Congartulations`)
        }
        else {
            let newobjects = new libradyalldetails()
            newobjects.showerror(typeofbookone, `<button class="delete" id="Remove"></button> Sorry we donot add this type of book`)
        }
    }
    else if (typeofbookthird.checked) {
        if (bookname != "" && bookname != " " && authorname != "" && authorname != " ") {
            let selectedtypebook = document.getElementById("type1").value;
            let newObjects = new libradyalldetails(bookname, authorname, selectedtypebook)
            newObjects.setdata(selectedtypebook, `<button class="delete" id="Remove"></button> Success fully add this book! Congartulations`)
        }
        else {
            let newobjects = new libradyalldetails()
            newobjects.showerror(typeofbookone, `<button class="delete" id="Remove"></button> Sorry we donot add this type of book`)
        }
    }
    e.preventDefault()
});