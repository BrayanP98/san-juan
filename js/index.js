var toogle_menu_lateral=document.querySelector("#toogle_menu_lateral");
var toogle_menu=document.querySelector("#toogle_menu");
var button_lateral=document.querySelector("#button_lateral")
var menu=document.querySelector("#lateral")


toogle_menu.onclick= desplegar;
toogle_menu_lateral.onclick=desplegar;

function desplegar(){
toogle_menu_lateral.classList.toggle("bx-rectangle")
toogle_menu.classList.toggle("bx-rectangle")
button_lateral.classList.toggle("active")
menu.classList.toggle('active')

}


