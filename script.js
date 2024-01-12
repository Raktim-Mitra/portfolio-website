const toggleBtn=document.querySelector(".toggle-icon");
const toggleBtnIcon=document.querySelector(".toggle-icon i");
const dropDown=document.querySelector(".dropdown-menu");
toggleBtn.onclick=()=>{
    dropDown.classList.toggle("open");
    const isOpen=dropDown.classList.contains("open");
    toggleBtnIcon.classList= isOpen
    ?"fa-solid fa-xmark"
    :"fa-solid fa-bars"
}