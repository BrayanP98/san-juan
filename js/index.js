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
    
      
    }
    let msg="gps";
    let msg2="cotizar"
    var rtaopt=
    {
       gps:{
         "cotizar":[
          {
            "mesagge":"el valor del gps esta en 2000",
            "op1":"Cotizar",
            "op2":"Servicio tecnico CCtv",
            "op3":"Beneficios",
            "op4":"otros"
          }
         ],
         "Servicio tecnico GPS":[{
          "message":"para agendar un servicio tecnico por favor comunicate al 3026055289 o escribe la palabra asesor",
          "op1":"Cotizar",
          "op2":"Servicio tecnico CCtv",
          "op3":"Beneficios",
          "op4":"otros"
         }]
         
       },
       cctv:{
         "op1":"Cotizar",
         "op2":"Servicio tecnico CCtv",
         "op3":"Beneficios",
         "op4":"otros"
       }
      
       
  
     }
     let rta =rtaopt[msg];
     console.log(rta)

     
    // send_whatsapp();
    function send_whatsapp(){
      var botId = '122100131648008841';
      var phoneNbr = '573026055289';
      var bearerToken = 'EABpkYoLqZBZCYBO830lX7JudRZBUZArnQvXgYFWBBYzEXruZAoDDFOJKjoba5hA8CeWjh4ngXOOfow8c2jqvFTmv1KV3Vfogj8tJWbpf1LuZCzh8EBSRqhXIGGRGBJdYLorQLRnjjtFhhuwpk4HJOHtRSyIbSldyraqsyh7fhXOloMrlo30wVSzZC75N28XEkCZA';
      
      var url = 'https://graph.facebook.com/v17.0/' + botId + '/messages';
    
     var  data= {
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": phoneNbr,
      "type": "interactive",
      "interactive": {
        "type": "button",
        "body": {
          "text": "SecuriBot🤖 dice :  \n Haz click en el boton, para continuar con el proceso de renovacion."+
          " \n \n "
        },
        footer: {
          text: "scaliwoodSoft"},
        "action": {
          "buttons": [
            {
              "type": "call",
              "reply": {
                "id": "renovar_plataforma",
                "title": "RENOVAR PLATAFORMA"
              }
            },
           
          ]
        }
      }
    
  }
          
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
  

   /*   var  data= {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to : phoneNbr,
        type: "interactive" ,
        interactive:{
          type: "list",
          header: {  
          type: "text",
          text: "San Juan"},
          body: {text: "Elije tus Opciones"},
          footer: {
          text: "scaliwoodSoft"},
          action: {
            button: "Responde",
            sections:[
             
              {
                title:"Opcion 1",
                rows: [
                  {
                    id:"1",
                    title: "Cotizar GPS",
                    description: "Cotizar GPS",           
                  }
                ]
              },
              {
                title:"Opcion2",
                rows: [
                  {
                    id:"2",
                    title: "Servicio Tecnico Gps",
                    description: "Servicio Tecnico Gps",           
                  }
                ]
              },
              {
                title:"Opcion3",
                rows: [
                  {
                    id:"3",
                    title: "Renovacion plataforma",
                    description: "Renovacion plataforma",  
                         
                  }
                ]
              },{
                title:"Opcion4",
                rows: [
                  {
                    id:"4",
                    title: "Renovacion plataforma",
                    description: "Renovacion plataforma",  
                         
                  }
                ]
              }
              
            ]
          }
        }
            }*/
