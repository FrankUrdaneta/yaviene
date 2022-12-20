//obtener parametro de get
function getParameterByName(name, url=window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&$]" + name + "(=([^&#$]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



function anchoPantalla(){
    document.documentElement.clientWidth;
    //capturamos el ancho de la pantalla para decidir como estructurar la pagina
}

function capturarDatoGetSearch(){
    const param=new URLSearchParams(window.location.search);
    let q=param.get("fecha_salida")
}


function capturarFechaCalendario(){
      let dia_semana=new Date().toLocaleDateString('es',{weekday:"long"})
      let dia_number=parseInt( new Date().toLocaleDateString('es',{day:"numeric"}))
      let mes_number=parseInt( new Date().toLocaleDateString('es',{month:"2-digit"}))
      let ano_number=parseInt( new Date().toLocaleDateString('es',{year:"numeric"}))
      let fecha_completa=(new Date().toLocaleDateString('es', {  year:"numeric", month:"2-digit", day:"numeric"}))
      let fec=(new Date().toLocaleDateString('es', {  year:"numeric", month:"2-digit", dia_number}))

}

function horaActual(){
    new Date().toLocaleTimeString('es')
    //con esto podemos calcular la hora en curso hora minutos segundos
}

function horaActualMilitar(){
    new Intl.DateTimeFormat(undefined, { timeStyle: "short" }).format(new Date());
    //solo muestro hora y minutos
}