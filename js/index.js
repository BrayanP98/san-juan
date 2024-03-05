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
  let button_what=document.getElementById("whatsapp");
  if (scrollContainer().scrollTop > showOnPx) {
    btn_subi.classList.add("show")
    button_lateral.classList.add("show")
    button_what.classList.add("normal")

  } else {
    btn_subi.classList.remove("show")
    button_lateral.classList.remove("show")
    button_what.classList.remove("normal")
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
console.log("hola\n \0\0\0   ccc")

var saludos=["gracias", "ok","vale"]

var leter="vale gracias".split(" ");
for(var i=0;i<leter.length;i++){
  
if(saludos.includes(leter[i].toLocaleLowerCase())){
  console.log(leter[i])
  break;
}
  
let msg_body ="\nHola soy *SecuriBot*🤖 bot de San Juan Electronics, estoy aqui para brindarte sobre nuestros productos y servicios, y ser una herramienta de comuncacion entre San Juan Electronics y sus clientes🤝"
      +"\n\nNo entiendo lo que quieres decirme🤷‍♂️"+"\nIntenta con una de las siguientes palabras clave:"+
      "\n *Informacion, menu, hola, GPS, CCTV, alarmas, asesor, catalogo, nosotros *"+"\n\n_#TuSeguridadEsNuestraPrioridad_" ;
       sendOP(msg_body, from)

}

     
//send_whatsapp();
    function send_whatsapp(){
      var botId = '122100131648008841';
      var phoneNbr = '573026055289';
      var bearerToken = 'EABpkYoLqZBZCYBOxobhn1EwbivIl4Uu1ecsawuwsDQgtJv8n7SVaqPsiBLJusnZBOM7SKdvAt4ZCJtxZCcrAS5n5dMbP3dhb0mzfM3nlSRV3KZBLBY07uq6HDuz6TJkyfTCwRwBJZCjvvOxuQ37M1LwuHZA2ge57k5cDTa2eVo1LPvROqctQPOIPJzdWlBjZCtykLqxdmTDzgTwRITK9T';
      
      var url = 'https://graph.facebook.com/v17.0/' + botId + '/messages';
    
    var data= {
     
      "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": phoneNbr,
  "type": "template",
  "template": {
    "name": "envio_recibo",
    "language": {
      "code": "es_MX"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "document",
            "document": {
              "link": "https://apiwhatsap-dev-nrcg.4.us-1.fl0.io/pdf/COTIZACION.pdf"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "cotizacoin de equipos"
          },
         
          
        ]
      }
    ]
  }

     
  
      }
    
  
 /* var seccions=[  
  ]
  var utilities=
  {
    promociones:{
      prom1:{
        "img":"https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/365461591_687156643427414_5032061227280861270_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHmJb4n20w8wXaVcCs-IVLxjsgvIKBsmjuOyC8goGyaO_mlcB_aMjlpkvpjgVKZBrGrCQTYswLua3wka2vqvYbM&_nc_ohc=LlKxl93IAMIAX-GgRZZ&_nc_ht=scontent-bog1-1.xx&oh=00_AfDpe8zfsKJny3DjNqr2mxRk-N2_Y8WB4GbyBUHCKAR9vg&oe=651D699E",
        "message":"Promo inperdible DE HALLOWEN"
      },
      prom2:{
        "img":"https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/365461591_687156643427414_5032061227280861270_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHmJb4n20w8wXaVcCs-IVLxjsgvIKBsmjuOyC8goGyaO_mlcB_aMjlpkvpjgVKZBrGrCQTYswLua3wka2vqvYbM&_nc_ohc=LlKxl93IAMIAX-GgRZZ&_nc_ht=scontent-bog1-1.xx&oh=00_AfDpe8zfsKJny3DjNqr2mxRk-N2_Y8WB4GbyBUHCKAR9vg&oe=651D699E",
        "message":"GRAN PROMOCION"
      }
      
      
}
  }

  var mesaggeHappy="*Daniela* ,hoy celebramos no solo el día en que viniste al mundo🎉, sino también la increíble persona que eres💖. Tu luz ilumina la vida de quienes te rodean. "+"\\n\\nQue cada momento de este día esté lleno de sorpresas agradables, risas contagiosas y momentos de felicidad.\\n\\nQue alcances tus metas y sueños, y que la felicidad te acompañe en cada paso que des. Recuerda siempre lo especial y valios@ que eres. \\n¡Que este nuevo año de vida te traiga éxitos y realizaciones más allá de tus expectativas! \\n\\nCon cariño, \\n*Equipo San Juan Electronics*💛💚💙"
  var data={
    
      "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": phoneNbr,
  "type": "template",
  "template": {
    "name": "cumpleanos1",
    "language": {
      "code": "es_MX"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          
          {
            "type":"image",
          "image": {
            "link" :"https://yt3.googleusercontent.com/ESbUmfNycbF31LE_vxwnqYtxrMw3-KN45rLoVyPEmTrQszeBiJumZOVg7-LOeGFrG5nQkfXOP10=s900-c-k-c0x00ffffff-no-rj"
              }, 
          
          }
        
        ]},
        
        {  "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": mesaggeHappy

            },
           
           
          
          ]
        
}
]



}
  }
 /* var  data= {
    "messaging_product": "whatsapp",
"recipient_type": "individual",
"to": phoneNbr,
"type": "template",
"template": {
  "name": "publicidad",
  "language": {
    "code": "es"
  },
  "components": [
    {
      "type": "header",
      "parameters": [
        
        {
          "type":"image",
        "image": {
          "link" : "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/365461591_687156643427414_5032061227280861270_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MdPIii7hD3IAX-4TUYV&_nc_ht=scontent-bog1-1.xx&oh=00_AfCgGr6OqIFMUAyV4uv7PfKCkWmePEoyI2Ji9X4nq4ZcJg&oe=653F07DE"
            }, 
        
        }
      
      ]},
    
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "text"
          },
          
        
        ]},
     { "type": "button",
      "sub_type" : "url",
      "index": "2",
      "parameters": [
        
          {                    
              "type": "text",
             
              "text": "https://sanjuanelectronics.online/"
          }
      ]
    }
  ]

    }
  
}*/
 /* data={
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to : phoneNbr,
    type: "interactive" ,
    interactive:{
      type: "button",
      header: {  
        type:"image",
        "image": {
          "link" : "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/274960628_1330064724171135_8384709344031688882_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=52f669&_nc_ohc=S3x1-lrIuPwAX8KZ3Dk&_nc_ht=scontent-bog1-1.xx&oh=00_AfCoys3NJ33ViDEqziR19jz20-zT9_MZ84O0fONazq0Utg&oe=652577A5"
            }, 
          },
      body: {text: " kys[i].message"},
      footer: {
        
      text: "scaliwoodSoft"},
      action: {
        "buttons": [
        
          {
            "type": "reply",
            "reply": {
              "id": "acceder_promo",
              "title": "Acceder"
            }
          }
        ]
      }
    }
  }*/
        
/*  var kys= Object.values(utilities.promociones);
  console.log(kys[0])
  for(var i=0;i<kys.length;i++){


    var data={
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to : phoneNbr,
      type: "interactive" ,
      interactive:{
        type: "button",
        header: {  
          type:"image",
          "image": {
            "link" : kys[i].img
              }, 
        },
        body: {text:kys[i].message},
        footer: {
          
        text: "scaliwoodSoft"},
        action: {
          "buttons": [
          
            {
              "type": "reply",
              "reply": {
                "id": "prom"+i,
                "title": "Renovar Plan",
                
              }
            }
          ]
        } 
      }
          }*/
          
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

/*for(var i=0;i<title.length;i++){
  let opt={
    title:"Opcion"+(i+1),
    rows: [
      {
        id:i,
        title: kys[i],
        description: title[i]           
      }
    ]
  }*/
//seccions.push(opt)



/*data={
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to : phoneNbr,
  type: "interactive" ,
  interactive:{
    type: "list",
    header: {  
    type: "text",
    text: "San Juan"},
    body: {text: " Elije tus Opciones"+"👇"},
    footer: {
      
    text: "scaliwoodSoft"},
    action: {
      button: "Menu de Opciones",
      sections:seccions
    }
  }
      }*/
      /*data={
        "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": phoneNbr,
  "type": "image",
  
  "image": {
    "link" : "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/365461591_687156643427414_5032061227280861270_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHmJb4n20w8wXaVcCs-IVLxjsgvIKBsmjuOyC8goGyaO_mlcB_aMjlpkvpjgVKZBrGrCQTYswLua3wka2vqvYbM&_nc_ohc=LlKxl93IAMIAX-GgRZZ&_nc_ht=scontent-bog1-1.xx&oh=00_AfDpe8zfsKJny3DjNqr2mxRk-N2_Y8WB4GbyBUHCKAR9vg&oe=651D699E"
      },  
       
      "body": {text: " \n Elije tus Opciones"+"👇"},}*/
  /*var data={
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to : phoneNbr,
  type: "interactive" ,
  interactive:{
    type: "button",
    header: {  
      type:"image",
      "image": {
        "link" : "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/365461591_687156643427414_5032061227280861270_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHmJb4n20w8wXaVcCs-IVLxjsgvIKBsmjuOyC8goGyaO_mlcB_aMjlpkvpjgVKZBrGrCQTYswLua3wka2vqvYbM&_nc_ohc=LlKxl93IAMIAX-GgRZZ&_nc_ht=scontent-bog1-1.xx&oh=00_AfDpe8zfsKJny3DjNqr2mxRk-N2_Y8WB4GbyBUHCKAR9vg&oe=651D699E"
          }, 
    },
    body: {text: " \n Elije tus Opciones"+"👇"},
    footer: {
      
    text: "scaliwoodSoft"},
    action: {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "renovar_plataforma",
            "title": "Renovar Plataforma",
            
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "renovar_plan",
            "title": "Renovar Plan",
            
          }
        }
      ]
    }
  }
      }*/
  
 
    
   /*   }*/
  

      
            
       /*        var  data= {
      "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": phoneNbr,
  "type": "template",
  "template": {
    "name": "expiracion1",
    "language": {
      "code": "es_MX"
    },
    "components": [

      


       let msg_body ="Hola "+"" +name+", "+"bienvenido a San Juan Electronics. "+"\n Soy *SecuriBot*🤖  ¿Como puedo ayudarte?"+"\n\n1.Informacion CCTV."+
          "\n2. Informacion GPS."+"\n3. Informacion Alarmas residenciales."+"\n4. Informacion Control de acceso."+"\n5. Catalogo."+"\n6. Nosotros."+"\n\n Escribe *ASESOR* si quieres comunicarte con uno de nuestros asesores"+"\n\nTu seguridad es nuestra prioridad!. \n\nEstamos ubicados en la *Transversal 9#57n-202 via al bosque.*"+
          "\n\n Siguenos en Facebook como: \n*San Juan Electronics*."+"\n O visita nuestra WEB https://sanjuanelectronics.online/";          
          
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "TEXT-STRING"
            },
            {
              "type": "text",
              "text": "TEXT-STRING"
            },
            {
              "type": "text",
              "text": "TEXT-STRING"
            },
            {
              "type": "text",
              "text": "TEXT-STRING"
            },
          
          ]},
       { "type": "button",
        "sub_type" : "url",
        "index": "2",
        "parameters": [
          
            {                    
                "type": "text",
               
                "text": "https://sanjuanelectronics.online/"
            }
        ]
      }
    ]
  
      }
    
  }*/
  var item_name=document.getElementsByClassName("item_name");
  item_name.onclick= function(){

   console.log("www")
  }
  const recognition = new webkitSpeechRecognition()
  recognition.lang="es-ES"
  recognition.continuous=true;
  recognition.onresult= event=>{
    for(const result of event.results){

      console.log(result[0].transcript)
    }
  }
 // recognition.start()



 function limpiar(){
  var our_marcas=document.querySelector("#aliados")
  var header=document.querySelector(".header")
  var container=document.querySelector(".container");
  var content_header=document.querySelector("#content_header")
  var div_our_marcas=document.createElement("div")
  div_our_marcas.className="our_marcas"
  div_our_marcas.classList.add("active")
  header.style="height:150px"

  div_our_marcas.innerHTML=our_marcas.innerHTML
  
  content_header.style="visibility: hidden;"
  container.innerHTML=""

  container.appendChild(div_our_marcas)
 
 }
 function prinGallery(){
  var header=document.querySelector(".header")
  var container=document.querySelector(".container");
  var content_header=document.querySelector("#content_header")
  var galeria=document.querySelector(".galeria")
  var div_galeria=document.createElement("div")
  content_header.style="visibility: hidden;"
  div_galeria.innerHTML=galeria.innerHTML
  header.style="height:150px"
  container.innerHTML=""
  container.appendChild(div_galeria)
 }
