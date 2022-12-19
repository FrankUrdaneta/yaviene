function mostrarBarraBuscador() {


  let buscador = document.getElementById('buscador');
  let buscar = document.createElement('div')
  buscador.innerHTML = `<div class="forma mt-2 position-sticky">
    
    <form autocomplete="off" class="row g-3 mx-auto needs-validation">
      <div class="col-lg-2 col-sm-6 cajasBuscador">
      <div class="row row g-3 origenPasaje">
      <div class="col-1 origenIcono"><label for="inputtext" class=""><i class="icon fa fa-dot-circle-o" style="color:#009ee2" aria-hidden="true"></i>   </label></div>
      <div class="col-7 origenInput autocomplete" ><input id="inputOrigen" type="text" name="origen"  class="form-control inputOrigen"  placeholder="Origen" required><div onclick="invertirDestino()" id="invertirDestino" class="btn btn-alert-danger invertirDestino"><i class="icon bi bi-arrow-left-right" style="color:white" aria-hidden="true"></i></div></div>
      
      </div>
      </div>
      
      <div class="col-lg-2 col-sm-6 cajasBuscador">
      <div class="row origenPasaje">
      <div class="col-1 origenIcono">    <label for="inputtext" class=""><i class="icon fa fa-map-marker" style="color:#009ee2" aria-hidden="true"></i>  </label>
      </div>
      <div class="col-7 origenInput autocomplete"><input id="inputDestino" type="text" name="destino" class="form-control inputOrigen"  placeholder="Destino" required></div>
      </div>
      </div>

      
        
      <div class="col-lg-2 col-sm-6 cajasBuscador">
      <div class="row origenPasaje">
      <div class="col-1 origenIcono"> <label for="inputtext" class=""> <i class="icon fa fa-calendar"  style="color:#009ee2" aria-hidden="true"></i></label>
      </div>
      <div class="col-7 origenInput"><input type="date" min class="form-control inputOrigen" id="fechaActual" min="2022-11-01" value="" placeholder="Fecha de viaje"></div>
      </div>
      </div>

      

      <div class="col-lg-2 col-sm-6">
      <a type="submit" id="buscar_pasajes" class="btn ov-btn-grow-skew  ">Buscar</a>
      
      </div>
      
    </form>
    ${window.location.pathname=='/yaviene/' || window.location.pathname=='/index.html'?``:`
    <button id="cerrarBusqueda" onclick="cerrarBusqueda()" class="btn ov-btn-grow-skew ">Cancelar</button>`}
    

    </div>
    </div> `
  buscador.appendChild(buscar);

  document.getElementById('buscar_pasajes').addEventListener('click',()=>{
    


    let origen=document.getElementById('inputOrigen').value
    let destino=document.getElementById('inputDestino').value
    let fecha_salida=document.getElementById('fechaActual').value
    
    //validamos que los campos se completen
   if(origen=="" || origen==null){
    alert("Debes completar el campo Origen")
    document.getElementById('inputOrigen').focus
    return false;
   }
   if(destino=="" || destino==null){
    alert("Debes completar el campo Destino")
    document.getElementById('inputDestino').focus
    return false;
   }
    window.location=`../buscador_pasajes.html?origen=${origen}&destino=${destino}&fecha_salida=${fecha_salida}`
 
    
   })
 let fech_completa=(new Date().toLocaleDateString( { year:"numeric",  month:"2-digit",day:"numeric" }))
   var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth() + 1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if (dia < 10)
    dia = '0' + dia; //agrega cero si el menor de 10
  if (mes < 10)
    mes = '0' + mes //agrega cero si el menor de 10
  document.getElementById('fechaActual').value = ano + "-" + mes + "-" + dia;

  cargarLocalidades()

}




// listo broderrrrrrrrrrrrrrrrrrrrrrrrrrrrrr anda facherito ahora
// cuando tocas cambiar busqueda se muestra el bloque para mostrar los botones
