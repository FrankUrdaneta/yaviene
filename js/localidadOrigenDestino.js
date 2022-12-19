function invertirDestino(){

// let invertirDestino = document.getElementById('invertirDestino')

  // invertirDestino.addEventListener('click', () => {
    let origen = document.getElementById('inputOrigen').value
    let destino = document.getElementById('inputDestino').value
    document.getElementById('inputDestino').value = origen
    document.getElementById('inputOrigen').value = destino
    let aux = ""
  // })
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (
        arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      ) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML =
          "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
  except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

function cargarLocalidades(){

  

//traer localidades
fetch("./js/localidades.json")
  .then((a) => a.json())
  .then((data) => {

    let localidades_cordoba = data.data.localidades;


    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById("inputOrigen"), localidades_cordoba);
    autocomplete(document.getElementById("inputDestino"), localidades_cordoba);
  });
}





function mostrarBoleto(boletos,data,origen, destino, fecha_salida, ordenSale) {
  
  document.getElementById('origen_cambiar_busqueda').innerHTML=`<i class="icon bi bi-arrow-up-right-circle"></i> ${origen.toUpperCase()}`;
  document.getElementById('destino_cambiar_busqueda').innerHTML=`<i class="icon bi bi-arrow-down-right-circle"></i> ${destino.toUpperCase()}`;



    document.getElementById("pruebaBoleto").innerHTML = ""
    let dibujarBoleto = document.getElementById("pruebaBoleto");

    if (data.ok) {
      let dia_semana=new Date().toLocaleDateString('es',{weekday:"long"})
      let dia_number=parseInt( new Date().toLocaleDateString('es',{day:"numeric"}))
      let mes_number=parseInt( new Date().toLocaleDateString('es',{month:"2-digit"}))
      let ano_number=parseInt( new Date().toLocaleDateString('es',{year:"numeric"}))
      let fecha_completa=(new Date().toLocaleDateString('es', {  year:"numeric", month:"2-digit", day:"numeric"}))
      let fec=(new Date().toLocaleDateString('es', {  year:"numeric", month:"2-digit", dia_number}))

      const param=new URLSearchParams(window.location.search);
      let q=param.get("fecha_salida")
      let dias=new Date(q).toLocaleDateString('es',{weekday:"long"})

       document.getElementById('calendarios_botones').innerHTML=`
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div id="carousel_calendario" class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            
            <div class="btn-group-sm calendario_group" role="group" aria-label="Basic example">
              <button id=${dia_number} onclick="cambiar_fecha_calendario(${dia_number})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${fecha_completa}</button>
              <button id=${dia_number+1} onclick="cambiar_fecha_calendario(${dia_number+1})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+1).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+1}/${fec}<br></button>
              <button id=${dia_number+2} onclick="cambiar_fecha_calendario(${dia_number+2})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+2).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+2}/${fec}</button>
              <button id=${dia_number+3} onclick="cambiar_fecha_calendario(${dia_number+3})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+3).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+3}/${fec}</button>
              <button id=${dia_number+4} onclick="cambiar_fecha_calendario(${dia_number+4})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+4).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+4}/${fec}</button>
              
          </div>
          </div>
          <div class="carousel-item">
            <div class="btn-group-sm calendario_group" role="group" aria-label="Basic example">
            <button id=${dia_number+5} onclick="cambiar_fecha_calendario(${dia_number+5})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+5).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+5}/${fec}</button>
            <button id=${dia_number+6} onclick="cambiar_fecha_calendario(${dia_number+6})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+6).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+6}/${fec}<br></button>
            <button id=${dia_number+7} onclick="cambiar_fecha_calendario(${dia_number+7})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+7).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+7}/${fec}</button>
            <button id=${dia_number+8} onclick="cambiar_fecha_calendario(${dia_number+8})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+8).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+8}/${fec}</button>
            <button id=${dia_number+9} onclick="cambiar_fecha_calendario(${dia_number+9})" type="button" class="btn btn-secondary">${new Date(ano_number, mes_number-1, dia_number+9).toLocaleDateString('es',{weekday:"short"}).toUpperCase()}<br>${dia_number+9}/${fec}</button>
          </div>
          
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
       
       `

      for (let i of boletos) {
        if (origen === i.origen && destino === i.destino && fecha_salida === i.fecha_salida) {
         
         document.getElementById(`${i.codigo_empresa}`).style=`display='flex`
          
 
          dibujarBoleto.innerHTML += `
  <div id="${i.codigo_empresa}"
      class="card-group col-lg-6 col-xl-6 col-md-12 col-sm-12 p-1  bg-body boleto"
    >
      <div class="col-4 fondoImagen">
        <div class="card fondoImagen">
          <img
            class="card-img-top logoPasajes"
            src=${i.logo}
            alt="Card image cap" 
          />
          
        </div>
      </div>
      <div class="card">
        <div class="">
          <h6 class="card-title font-weight-bold">
          
            <i
              class=" fa fa-dot-circle-o"
              style="color: black"
              aria-hidden="true"
            ></i>
            Sale
            <span
              class="card-text pasaje"
              style="color: black; font-size: small"
              >${i.sale} </span
            ><i
            class="fa fa-map-marker"
            style="color: black"
            aria-hidden="true"
          ></i>
          Llega
          <span
            class="card-text pasaje"
            style="color: black; font-size: small"
            >${i.llega} 
          </span><br>
          
          
            <span
              class="card-text pasaje"
              style="color: rgb(150, 148, 148); font-size: small"
              >duracion aproximada ${i.duracion} </span
            ><br>

            <span
              class="card-text pasaje"
              style="color: rgb(8, 8, 8); font-size: small"
              >Se anuncia a ${i.anuncia}</span
            >
            <br>
            <span style="font-size: small ">
            Por Empresa
           ${i.empresa}</span
            >
          <br>
          <span
              class="card-text pasaje"
              style="color: rgb(12, 12, 12); font-size: small"
              >  Coche ${i.coche} ${i.rampa?"<i class='fa fa-wheelchair rampa' aria-hidden='true' style='color:#009ee2;'></i>":''} ${i.novedades_servicio!=``?`<a class=' btnObservacion' data-toggle='modal' data-target='#modalExample${i.codigo_empresa}'><i class='fas fa-exclamation-circle rampa' id='observacion' alt='Observacion del servicio' onclick='observacion()' ></i>
              ${i.novedades_servicio}
              <!-- Modal -->
              <div class='modal' id='modalExample${i.codigo_empresa}' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLabel'>${i.novedades_servicio}</h5>
        
                    </div>
                  <div class='modal-header'>
                    <h6 class='modal-title text-dark' id='exampleModalLabel'>
                 Fernando Casado – Nosikoski – Av. Curazao – Rio Pinto – Su ruta</h6>
                  </div>
                <div class='modal-footer'>
        
                      <button type='button' class='btn btn-primary'>Cerrar</button>
                </div>
                </div>
                </div>
                </div>
              </a>`:``}
            
            ${i.refuerzo?'Refuerzo':''}</span>
          </h6>
        </div>
      </div>

      
      
      
    </div>
      <div id="${i.codigo_empresa}" class="card-button ">
        <button onclick="dibujaTraza(${i.servicio});" id="ver_ruta" ${i.inicio_sesion==true?
          "class='btn ov-btn-grow-skew  coche'>Ver Coche <i class='fa fa-bus' aria-hidden='true'></i>":
          "class='btn ov-btn-grow-skew buscar_gps'>Ver Ruta <i class='fa fa-map-marker' aria-hidden='true'></i>"} </button>
      </div>
              `
        }
      }
    }
   if(document.getElementById("pruebaBoleto").innerHTML==""){
    let dibujarBoleto = document.getElementById("pruebaBoleto");
    dibujarBoleto.innerHTML=`<div class="nofound">
    <img class="nofoundimg" src="../images/drow/nofound.svg" width="100%">
    </div>
    <h6 class="nofoundtext bg-primary" style="text-align:center;">no hay servicios disponibles para la fecha ${fecha_salida} 
    </h6>`
   }
}

function buscarBoletos(cambiarBusqueda = false){
// const armarBoleto=()=>{
// Armar cuerpo de boleto
fetch("./js/boleto.json")
  .then((a) => a.json())
  .then((data) => {
    let boletos = data.data.boletos;
  
//inicio ordenar boletos por salida
let ordenSale=[]
    for(let i=0; i<data.data.boletos.length; i++){
      ordenSale.push(data.data.boletos[i].sale)
    }

  // console.log(cerrarBusqueda())

  //fin ordenar boleto por salida
    let origen ;
    let destino;
    let fecha_salida;
//si ya estamos en buscador_pasajes toma los aprametros del input sino los toma del get
    if (cambiarBusqueda) {
      origen = document.getElementById('inputOrigen').value.toLowerCase()
      destino = document.getElementById('inputDestino').value.toLowerCase()
      fecha_salida = document.getElementById('fechaActual').value
    }
    else{
      origen =  getParameterByName("origen").toLowerCase()
      destino = getParameterByName("destino").toLowerCase()
      fecha_salida = getParameterByName("fecha_salida")
    }


    mostrarBoleto(boletos,data,origen, destino, fecha_salida, ordenSale);
  });
}

function vermapa(){
 
 let map= document.getElementById('map')
  map.classList.toggle('mapaTel')
  
  let cerrar=document.getElementById('closeMapa')
  cerrar.classList.toggle('cerrarX')
}

function ordenarPor(){
  let ordenar=document.getElementById('ordenarPor').addEventListener('change',()=>{
    console.log("cambie el orden")
    console.log(document.getElementById('ordenarPor').value)
  })
}

function cerrarBusqueda(){
  let buscador=document.getElementById('buscador')
  buscador.classList.toggle('cerrarBusqueda')
  
  
}
function observacion(){
  let cajaObservacion=document.createElement('div')
  let observaciones=document.getElementById('observacion')
  
  console.log("sin dato")
   observaciones.appendChild(cajaObservacion)
}
function nousar(){
  document.getElementById('carr').innerHTML=`
  <div class="card">
        <div class="card-body">
          <h6 class="card-text font-weight-bold">
            
            
          </h6>
        </div>
      </div>`
}

function cambiar_fecha_calendario(fecha){
  const param=new URLSearchParams(window.location.search);

  let q=param.get("fecha_salida")
  let origen=param.get("origen")
  let destino=param.get("destino")
  let dias=new Date(q).toLocaleDateString('es',{weekday:"long"})
  let dia_number=new Date().toLocaleDateString('es',{day:"numeric"})
  let fec=(new Date().toLocaleDateString('es', { dias, year:"numeric", month:"2-digit", dia_number}))
  let new_fecha=q.substring(0, q.length-2)
  let fecha_reemplaza=new_fecha+fecha
  
  window.location=`../yaviene/buscador_pasajes.html?origen=${origen}&destino=${destino}&fecha_salida=${fecha_reemplaza}`
}
