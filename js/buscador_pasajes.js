
function pasaje(){


let buscador=document.getElementById('buscador');
let buscar=document.createElement('div')
buscador.innerHTML=`<div class="forma mt-2 position-sticky">
<form class="">
  <div class="row g-3">
  <div class="col-auto">
  
</div>

<div class="col-auto">
  
</div>
  </div>
  
</form>
<form autocomplete="off" class="row g-3 mx-auto">
  <div class="col-lg-2 col-sm-6 cajasBuscador">
  <div class="row row g-3 origenPasaje">
  <div class="col-1 origenIcono"><label for="inputtext" class=""><i class="icon fa fa-dot-circle-o" style="color:#009ee2" aria-hidden="true"></i>   </label></div>
  <div class="col-7 origenInput autocomplete" ><input id="inputOrigen" type="text"  class="form-control inputOrigen"  placeholder="Origen" required><button id="invertirDestino" class="btn btn-alert-danger invertirDestino"><i class="icon bi bi-arrow-left-right" style="color:white" aria-hidden="true"></i></button></div>
  
  </div>
  </div>
  
  <div class="col-lg-2 col-sm-6 cajasBuscador">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono">    <label for="inputtext" class=""><i class="icon fa fa-map-marker" style="color:#009ee2" aria-hidden="true"></i>  </label>
  </div>
  <div class="col-7 origenInput autocomplete"><input id="inputDestino" type="text" class="form-control inputOrigen"  placeholder="Destino" required></div>
  </div>
  </div>

  
    
  <div class="col-lg-2 col-sm-6 cajasBuscador">
  <div class="row origenPasaje">
  <div class="col-1 origenIcono"> <label for="inputtext" class=""> <i class="icon fa fa-calendar"  style="color:#009ee2" aria-hidden="true"></i></label>
  </div>
  <div class="col-7 origenInput"><input type="date" min class="form-control inputOrigen" id="fechaActual" min="2022-11-01" value="" placeholder="Fecha de viaje"></div>
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
   <a href="#"><button  id="buscar_pasajes"  class="btn ov-btn-grow-skew  ">Buscar</button></a>
  </div>
</form>


</div>
</div> `
buscador.appendChild(buscar);
}
pasaje();

window.onload = function(){
  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes //agrega cero si el menor de 10
  document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
  
}





