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