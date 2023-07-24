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


const showOnPx = 100;
const scrollContainer = () => {
  return document.documentElement || document.body;
};
document.addEventListener("scroll", () => {
  let btn_subi=document.getElementById("subir")
  let button_lateral=document.getElementById("button_lateral")
  if (scrollContainer().scrollTop > showOnPx) {
    btn_subi.classList.add("show")
    button_lateral.classList.add("show")
  } else {
    btn_subi.classList.remove("show")
    button_lateral.classList.remove("show")

  }
})


   var btn_subir=document.getElementById("subir")
    btn_subir.onclick=function(){
     window.scrollTo({
      top:0,
      behavior:"smooth"
     })
      
    }

    function sigueme()
    {
    //Capto las coordenads del puntero.
    var x = window.event.x;
    var y = window.event.y;
    console.log(x,y)
    //Y se las coloco al div.
    document.getElementById("bola").style.left = x + "px";
    document.getElementById("bola").style.top = y + "px";
   
    }


