let comprar=document.getElementById('comprar')
let hoy= new Date();
let dia= hoy.getDate();
let mes= hoy.getMonth();
let anio=hoy.getFullYear();

//AAAA-MM-DD
let salida=`${anio}-${mes}-${dia}`
let llegada=`${anio}-${mes}-${dia+1}`

comprar.addEventListener('click',()=>{
    let pasajes=document.createElement('div')

    pasajes.innerHTML=`<div id="card-group" class="card-group shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card encabezado">
      <div class="card-body">
        <h5 class="card-title">Empresa</h5>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Salida</h5>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Llegada</h5>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Comodidad</h5>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Informacion</h5>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Precio</h5>
       
      </div>
    </div>
  </div>
  <!--Cards cajas-->
  <div class="card-group border-danger shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card ">
      <div class="card-body">
        <img class="card-img-top" src="./images/logosEmpresas/ersa.png" alt="Card image cap">
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title"><i class="icon fa fa-arrow-right" aria-hidden="true"></i>${salida}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title"><i class="icon fa fa-map-marker" aria-hidden="true"></i>${llegada}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Cama</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Duracion: 14:50hs.
          Pasajes: 1</h6>
      </div>
    </div>
    <div class="card l-bg-green">
    
      <div class="card-body">
        <h6 class="card-text"><span class="text-italic">Ars</span> 11500</h6>
        <a href="#!" class="btn btn-success">Comprar</a>
      </div>
    </div>
  </div>

  <!--********empresa 2-->
  <div class="card-group border-danger shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src="./images/logosEmpresas/fonobus.jpg.crdownload" alt="Card image cap">
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${salida}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${llegada}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Cama</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Duracion: 14:50hs.
          Pasajes: 1</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-text">10500</h6>
        <a href="#!" class="btn btn-success">Comprar</a>
      </div>
    </div>
  </div>
  <!--3-->
  <div class="card-group border-danger shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src="./images/logosEmpresas/lumasa.png" alt="Card image cap">
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${salida}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${llegada}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Cama</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Duracion: 14:50hs.
          Pasajes: 1</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-text">12500</h6>
        <a href="#!" class="btn btn-success">Comprar</a>
      </div>
    </div>
  </div>
  <!--4 prueba-->
  <div class="card-group border-danger shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src="./images/logosEmpresas/transbus.png" alt="Card image cap">
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${salida}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${llegada}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Cama</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Duracion: 14:50hs.
          Pasajes: 1</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-text">9500</h6>
        <a href="#!" class="btn btn-success">Comprar</a>
      </div>
    </div>
  </div>

  <!--coata-->
  <div class="card-group border-danger shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src="./images/logosEmpresas/coata.png" alt="Card image cap">
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${salida}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${llegada}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Cama</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Duracion: 14:50hs.
          Pasajes: 1</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-text">10500</h6>
        <a href="#!" class="btn btn-success">Comprar</a>
      </div>
    </div>
  </div>

  <div class="card-group border-danger shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src="./images/logosEmpresas/buseslep.png" alt="Card image cap">
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${salida}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">${llegada}</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Cama</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Duracion: 14:50hs.
          Pasajes: 1</h6>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-text">10500</h6>
        <a href="#!" class="btn btn-success">Comprar</a>
      </div>
    </div>
  </div>`
    verPasaje.appendChild(pasajes);
    
})
