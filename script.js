const inputEle=document.querySelector(".Dark-mode")
const bodyEle=document.querySelector("body")

inputEle.checked=JSON.parse(localStorage.getItem("mode")) 
updateMode()
inputEle.addEventListener("input",()=>{
    updateMode()
    updateStorage();
})

function updateMode() {
    if (inputEle.checked) {
        bodyEle.style.backgroundColor="black"
    }else{
        bodyEle.style.backgroundColor="white"
    }
}

function updateStorage () {
    localStorage.setItem("mode",JSON.stringify(inputEle.checked))
}