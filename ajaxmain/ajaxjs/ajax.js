console.log("AJax important")


document.getElementById("FatchBtn").addEventListener("click", function checktxt(e) {
  console.log("ok")
  const tryxml = new XMLHttpRequest()
  // tryxml.open("GET", "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", true)
  // tryxml.open("GET", "vishwam.txt", true)
  tryxml.open("POST", "https://reqres.in/api/products/3", true)
  tryxml.getResponseHeader("Content-type", "application/json")
  tryxml.onprogress = function () {
    console.log("On pr0gress")
  }
  //tryxml.onreadystatechange = function () {
  //  console.log(tryxml.readyState)
  //}
  tryxml.onload = function () {
    console.log(this.responseText);
  }
  let parmas = `{"data":{"id":3,"name":"true red","year":2002,"color":"#BF1932","pantone_value":"19-1664"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}`
  tryxml.send(parmas)
})

