/*
1.Single element selecotr
1.Multiple element selecotr
*/
//TODO 1.Single element selecotr
// let vari=document.getElementById("identity");
// vari=vari.className;
// vari=vari.id;
// vari=vari.innerText
// vari=vari.innerHTML
// vari.style.backgroundColor="red";
// vari.className="Mainheading";
// let vari=document.querySelector(".heading1");
// vari.style.color="Green";
// console.log(vari); 

//TODO 2.Muliple element selecotr
let vari = document.getElementsByClassName("heading1");
// console.log(vari);
Array.from(vari).forEach(element => {
    element.style.color = "red"
    // console.log(element);
    console.log(String(element));
});