function toastN(texto, modo = 'gris') {
    var btn = document.createElement("div");
    btn.setAttribute("id", "toastN123579");
    btn.innerHTML = texto;
    if (modo == 'rojo') {
        btn.style.background = "rgba(255,0,0,0.5)";
        btn.style.color = "white";
    } else if (modo == 'verde') {
        btn.style.background = "rgba(0,130,0,0.5)";
        btn.style.color = "white";
    } else if (modo == 'azul') {
        btn.style.background = "rgba(0,0,255,0.5)";
        btn.style.color = "white";
    } else if (modo == 'amarillo') {
        btn.style.background = "rgba(255,233,0,0.5)";
        btn.style.color = "black";
    } else {
        btn.style.background = "rgba(0,0,0,0.5)";
        btn.style.color = "white";
    }

    document.body.appendChild(btn);
    btn.className = "show";
    setTimeout(function () { document.body.removeChild(btn); }, 3000);

}