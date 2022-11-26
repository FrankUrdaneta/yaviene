
function pasaje(){


let buscador=document.getElementById('buscador');
let buscar=document.createElement('div')
buscador.innerHTML=`<div class="forma mt-2 position-sticky">
<form class="">
  <div class="row g-3">
  <div class="col-auto">
  <select class="form-select idayVuelta" id="inputGroupSelect01">
  <option selected>Ida y vuelta</option>
  <option value="1">Ida</option>
</select>
</div>

<div class="col-auto">
  <select class="form-select pasajero" id="inputGroupSelect01">
  <option >1 Pasajero</option>
</select>
</div>
  </div>
  
</form>
<form class="row g-3 mx-auto">
  <div class="col-lg-2 col-sm-6 cajasBuscador">
  <div class="row row g-3 origenPasaje">
  <div class="col-1 origenIcono"><label for="inputtext" class=""><i class="icon fa fa-dot-circle-o" style="color:#009ee2" aria-hidden="true"></i>   </label></div>
  <div class="col-7 origenInput" id="origenInput"><input type="text"  class="form-control inputOrigen" id="button" placeholder="Origen"><button class="btn btn-alert-danger invertirDestino"><i class="icon bi bi-arrow-left-right" style="color:white" aria-hidden="true"></i></button></div>
  
  </div>
  </div>
  
  <div class="col-lg-2 col-sm-6 cajasBuscador">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono">    <label for="inputtext" class=""><i class="icon fa fa-map-marker" style="color:#009ee2" aria-hidden="true"></i>  </label>
  </div>
  <div class="col-7 origenInput"><input type="text" class="form-control inputOrigen" id="input" placeholder="Destino"></div>
  </div>
  </div>

  
    
  <div class="col-lg-2 col-sm-6 cajasBuscador">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono"> <label for="inputtext" class=""> <i class="icon fa fa-calendar"  style="color:#009ee2" aria-hidden="true"></i></label>
  </div>
  <div class="col-7 origenInput"><input type="date"  class="form-control inputOrigen" id="staticEmail2" placeholder="Fecha de viaje"></div>
  </div>
  </div>

  <div class="col-lg-2 col-sm-6 cajasBuscador">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono"> <label for="inputtext" class=""> <i class="icon fa fa-calendar"  style="color:#009ee2" aria-hidden="true"></i></label>
  </div>
  <div class="col-7 origenInput"><input type="text"  class="form-control inputOrigen" id="staticEmail2" placeholder="Añadir Vuel..."></div>
  </div>
  </div>

  <div class="col-lg-2 col-sm-6">
   <a href="buscador_pasajes.html"><button  id="buscar_pasajes"  class="btn ov-btn-grow-skew botonBuscarPasajes">Buscar</button></a>
  </div>
</form>


</div>
</div> `
buscador.appendChild(buscar);
}
pasaje();


