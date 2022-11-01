let div = document.getElementById("app") //capturar
let parrafo = document.getElementById("parrafo")  
parrafo.innerText = "bienvenidos"   //modificar
console.log(div.innerHTML);            //muestra el html en consola
console.log(parrafo.innerHTML)         



let opciones = document.getElementsByClassName('opciones')

console.log(opciones)

for(let i=0;i<opciones.length;i++){
    console.log(opciones[i])
}