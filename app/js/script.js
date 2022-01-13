const body = document.querySelector("#body");
const menu = document.querySelector(".navbar_mobile");

const menuHamburger = document.querySelectorAll(".navbar_menu, .navbar_mobile_menu");


menuHamburger.forEach(item => item.addEventListener("click", function(){
    if(body.classList.contains("open")){
        menu.classList.remove("open");
        body.classList.remove("open");
    }
    else{
        menu.classList.add("open");
        body.classList.add("open");
    }
}))