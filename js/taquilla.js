let botonTaquilla=document.getElementById('btn')

botonTaquilla.addEventListener('click',()=>{
    console.log("di click")
    botonTaquilla.classList.toggle('btn-warning')
    botonTaquilla.style.color.toggle("red")
    
})

console.log("funca")