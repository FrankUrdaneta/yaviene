let comprar=document.getElementById('comprar')
let hoy= new Date();
let dia= hoy.getDate();
let mes= hoy.getMonth();
let anio=hoy.getFullYear();

//AAAA-MM-DD
let salida=`${anio}-${mes}-${dia}`
let llegada=`${anio}-${mes}-${dia+1}`

// comprar.addEventListener('click',()=>{
//     let pasajes=document.createElement('div')

//     pasajes.innerHTML=
//     verPasaje.appendChild(pasajes);
    
// })
