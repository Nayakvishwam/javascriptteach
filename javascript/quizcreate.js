let elment=document.querySelector("h1.heading1")
let elments=document.createElement("a")
elments.href="https://www.codewithharry.com/"
elments.className=elment.className
elments.innerText="CodeWithHarry"
elment.replaceWith(elments)
// elment.innerHTML="<a href='www.codewithharry.com'>Go to code with harry</a>"
// elment.appendChild(`<a href='www.codewithharry.com'>Go to code with harry</a>`)
console.log(elments)