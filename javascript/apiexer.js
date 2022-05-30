console.log("Check js file import or not")
document.getElementById("submit").addEventListener("click", function checword(params) {
    let checkdata = new XMLHttpRequest()
    checkdata.open("GET", "https://random-word-api.herokuapp.com/all", true)
    checkdata.onload = function () {
        let data = JSON.parse(this.responseText);
        let checkdataword = document.getElementById("word").value;
        let see = []
        for (let key in data) {
            if (data[key].includes(checkdataword.toLowerCase()) == true) {
                see.push(data[key])
            }
        }
        if (see.length == 0) {
            let error = document.getElementById("error")
            error.class = "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            error.style.background = "lightsalmon"
            error.innerHTML = `        <div>
            <div
                class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-700 bg-red-100 border border-red-300 ">
                <div slot="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-alert-octagon w-5 h-5 mx-2">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2">
                        </polygon>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <div class="text-xl font-normal  max-w-full flex-initial">
                    Sorry we have not types of deatils of your related word</div>
                <div class="flex flex-auto flex-row-reverse">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2" id="remove">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
            document.getElementById("remove").addEventListener("click", function remove(params) {
                error.innerHTML = ""
                error.class = "nothingerror"
                error.style.background = "white"
            })
            setTimeout(function name(params) {
                error.innerHTML = ""
                error.class = "nothingerror"
                error.style.background = "white"
            }, 5000)
        }
        else {
            let str = ""
            for (i in see) {
                str += `<p>${see[i]}</p>`
            }
            let set = document.getElementById("add")
            set.innerHTML = str
        }
    }
    checkdata.send()
})
