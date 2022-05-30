//TODO:bc1ae6f99fee4fe68f6508facc13e5f0
console.log("This is my index js file");

// Initialize the news api parameters
let data = new XMLHttpRequest()
data.open("GET", "https://newsapi.org/v2/top-headlines?country=in&apiKey=bc1ae6f99fee4fe68f6508facc13e5f0", true)
data.onload = function () {
    let add=document.getElementById("newsAccordion")
    let alldata = JSON.parse(this.responseText)
    let articles=alldata.articles
    let set=""
    articles.forEach(function (element,index){
        set+=`<div class="card">
        <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="false" aria-controls="collapse${index}">
               <b>Breaking News :${index+1} ${element["title"]}</b>
            </button>
            </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body"> ${element["description"]} <a href="${element["url"]}" target="_blank" >Read more here</a>  </div>
        </div>
    </div>`
    });
add.innerHTML=set
}

data.send()

