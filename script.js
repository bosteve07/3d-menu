const centerItem = document.querySelector(".center-tem");
const menu = document.querySelector(".menu");

menu.addEventListener("mouseover", ()=>{
    menu.classList.add("change");
});

menu.addEventListener("mouseleave", ()=>{
    menu.classList.remove("change");
});