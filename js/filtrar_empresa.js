//selecion de empresa por filtro

const mySelect = document.getElementById("selectEmpresa");
 mySelect.addEventListener("change", () => {
   // mySelect.remove(10);
   // console.log(document.getElementById("10"));
   if(mySelect.value=="empresa"){
    document.querySelectorAll("#pruebaBoleto .boleto").forEach(div => {
      div.style.display = "flex";
    })
    document.querySelectorAll("#pruebaBoleto .card-button ").forEach(div => {
      div.style.display = "flex";
    })
    
   }
   else{
     for (let i = 1; i <= 235; i++) {
      //  if (document.getElementById(i)) {
         let ocultar = document.querySelectorAll(`div[id='${i}']`);
         for (let j = 0; j < ocultar.length; j++) {
           // console.log(document.getElementById(ocultar[j].id));
           if (mySelect.value === ocultar[j].id) {
             ocultar[j].style.display = "flex";
           } else {
             ocultar[j].style.display = "none";
            
  
             // console.log(ocultar[j].id);
           }
         }
      //  } else {
      //    continue;
      //  }
     }
   }
   
 });