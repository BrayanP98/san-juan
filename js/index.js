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
   
    
      document.getElementById("bola").style="display:flex"
      var x = window.event.x;
      var y = window.event.y;
      //console.log(x,y)
      //Y se las coloco al div.
      document.getElementById("bola").style.left = x + "px";
      document.getElementById("bola").style.top = y + "px";
   
     
    
 
    }
    var sorteos= document.querySelector("#sorteos")
    var valido= document.querySelector("#valido")
    sorteos.onclick=function(){

     // window.open('https://wa.me/573022456227')
     send_whatsapp();
      
    }



    function send_whatsapp(){
      var botId = '122100131648008841';
      var phoneNbr = '573026055289';
      var bearerToken = 'EABpkYoLqZBZCYBO2csLXYJZBDDThxdWnE4MglsqZAeaubuZCRroCj8KEE4dycWmurZBzKIiXcYqNzJNtHnddx3o5kZCu706zyTxoXfg7lNyoN3Vy8Nf4D6lTQEs4Db9qhFdW7BNWRdlaq1XI6CSIrgeM2wMj5oE7ZARzgdd8z0ZCYRJQD8IJnXinvVYYbfemDafWF';
      
      var url = 'https://graph.facebook.com/v17.0/' + botId + '/messages';
      var data = {
        messaging_product: 'whatsapp',
        to: phoneNbr,
        type: 'template',
        template: {
          name:'confirmacion',
         language:{ code: 'es_MX' }
        }
      };
      
      var postReq = {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + bearerToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        json: true
      };
      
      fetch(url, postReq)
        .then(data => {
          return data.json()
        })
        .then(res => {
          console.log(res)
        })
        .catch(error => console.log(error));
      }
  


