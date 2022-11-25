
function pasaje(){


let buscador=document.getElementById('buscador');
let buscar=document.createElement('div')
buscador.innerHTML=`<div class="forma mt-2 position-sticky">
<form class="">
  <div class="row g-3">
    
  </div>
  
</form>
<form class="row g-3 mx-auto">
  <div class="col-lg-2 col-sm-6">
  <div class="row row g-3 origenPasaje">
  <div class="col-1 origenIcono"><label for="inputtext" class=""><i class="icon fa fa-dot-circle-o" style="color:#009ee2" aria-hidden="true"></i>   </label></div>
  <div class="col-7 origenInput" id="origenInput"><input type="text"  class="form-control inputOrigen" id="button" placeholder="Origen"><button class="btn btn-alert-danger invertirDestino"><i class="icon bi bi-arrow-left-right" style="color:white" aria-hidden="true"></i></button></div>
  
  </div>
  </div>
  
  <div class="col-lg-2 col-sm-6">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono">    <label for="inputtext" class=""><i class="icon fa fa-map-marker" style="color:#009ee2" aria-hidden="true"></i>  </label>
  </div>
  <div class="col-7 origenInput"><input type="text" class="form-control inputOrigen" id="input" placeholder="Destino"></div>
  </div>
  </div>

  <div class="col-lg-2 col-sm-6">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono"> <label for="inputtext" class=""></label><i class="icon fa fa-users" style="color:#009ee2" aria-hidden="true"></i> </label>
  </div>
  <div class="col-7 origenInput"><input type="number" class="form-control inputOrigen" min="1" id="input" placeholder="Pasajeros"></div>
  </div>
  </div>  
    
  <div class="col-lg-2 col-sm-6">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono"> <label for="inputtext" class=""> <i class="icon fa fa-calendar"  style="color:#009ee2" aria-hidden="true"></i></label>
  </div>
  <div class="col-7 origenInput"><input type="date"  class="form-control inputOrigen" id="staticEmail2" placeholder="Fecha de viaje"></div>
  </div>
  </div>

  <div class="col-lg-2 col-sm-6">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono"> <label for="inputtext" class=""> <i class="icon fa fa-calendar"  style="color:#009ee2" aria-hidden="true"></i></label>
  </div>
  <div class="col-7 origenInput"><input type="text"  class="form-control inputOrigen" id="staticEmail2" placeholder="Añadir Vuel..."></div>
  </div>
  </div>

  <div class="col-lg-2 col-sm-6">
   <button  id="buscar_pasajes"  class="btn ov-btn-grow-skew botonBuscarPasajes">Buscar</button>
  </div>
</form>


</div>
</div> `
buscador.appendChild(buscar);
}
pasaje();


