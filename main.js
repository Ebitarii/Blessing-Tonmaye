const menu=document.querySelector(".nav-links")
const hamburger=document.querySelector(".logo-links .fa-bars")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("show")
})