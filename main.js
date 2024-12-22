let list = document.querySelectorAll(".vertical li");

function activeLink() {
    list.forEach((item) =>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("click", activeLink));

// MENU TOP-HORIZONTAL
let menu = document.querySelector(".menu");
let vertical = document.querySelector(".vertical");
let main = document.querySelector(".main");

menu.onclick = function (){
    vertical.classList.toggle("active");
    main.classList.toggle("active");
};