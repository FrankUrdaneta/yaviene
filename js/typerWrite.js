var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Viene')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Llegamos')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('<strong>Estamos aqui</strong>')
    .pauseFor(2500)
    .start();


    //agregamos autocompletar de la api google maps
//     var searchInput = 'search_input';

// $(document).ready(function () {
//     var autocomplete;
//     autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
//         types: ['geocode'],
//     });
        
//     google.maps.event.addListener(autocomplete, 'place_changed', function () {
//         var near_place = autocomplete.getPlace();
//         document.getElementById('loc_lat').value = near_place.geometry.location.lat();
//         document.getElementById('loc_long').value = near_place.geometry.location.lng();
                
//         document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
//         document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
//     });
// });

//eliminamos latitud y longitud
$(document).on('change', '#'+searchInput, function () {
    document.getElementById('latitude_input').value = '';
    document.getElementById('longitude_input').value = '';
        
    document.getElementById('latitude_view').innerHTML = '';
    document.getElementById('longitude_view').innerHTML = '';
});


//geolocalizacion con metodo getCurrentPosition 3 paramet

// const button=document.getElementById('button')

// button.addEventListener('click',()=>{
//     const geolocation=navigator.geolocation

//     geolocation.getCurrentPosition(getPosition, error, options)
// })

const options={
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge:0
}

const getPosition= (position=>{
    console.log(position)
})

const error= (error)=>console.log(error)