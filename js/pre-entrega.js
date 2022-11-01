class zapatilla {
    constructor(nombre, superficie, precio) {
        this.nombre = nombre
        this.superficie = superficie
        this.precio = precio
    }
    restarEfectivo() {
        this.precio = this.precio - (this.precio * 0.15)
    }
    restaDebito() {
        this.precio = this.precio - (this.precio * 0.10)
    }
    sumaCredito() {
        this.precio = this.precio + (this.precio * 0.35)
    }
}

const wildhourse = new zapatilla('Nike Wildhourse', 'tierra', 24999)
const pegasusTrail = new zapatilla('Nike Pegasus Trail', 'tierra', 27999)
const vomero = new zapatilla('Nike Vomero', 'asfalto', 28999)
const alphafly = new zapatilla('Nike Alphafly', 'asfalto', 79999)


const deposito=[]


let medioDepago
const carrito = []
let ventaAdicional
let recomendacion
let recomendacionUno
let recomendacionDos
let recomendacionTres
let recomendacionCuatro

let bienvenida = alert('bienvenido a Planeta running! Descubri los mejores calzados para tu actividad deportiva')

let opciones=prompt('indique la opcion deseada: \n 1-ver los calzados disponibles \n 2- Deseo asesoramiento')

//primera pregunta
if(opciones=='2'){
let superficie = prompt('En esta seccion te ayudaremos a encontrar tu calzado ideal.En que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')

while ((superficie != '1') && (superficie != '2')) {
    alert('Por favor, elegi una opcion valida')
    superficie = prompt('En que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')
}


//segunda pregunta

let frecuencia = prompt('Con que frecuencia semanal corres? Elegi una opcion: \n  1 - 1 a 3 veces por semana \n 2- 3 a 5 veces por semana')

while ((frecuencia != '1') && (frecuencia != '2')) {
    alert('Por favor, elegi una opcion valida')
    frecuencia = prompt('Con que frecuencia semanal corres? Elegi una opcion: \n  1 -1 a 3 veces por semana \n 2- 3 a 5 veces por semana')
}

//tercera pregunta

let medioDePago = prompt('Que medio de pago preferis?Elegi una opcion \n 1- Efectivo (15% de descuento) \n 2 -Debito (10% de descuento) \n 3 -tarjeta de credito (35% de recargo)')

while ((medioDePago != '1') && (medioDePago != '2') && (medioDePago != '3')) {
    alert('Por favor, Elegi una opcion valida')
    medioDePago = prompt('Que medio de pago preferis?Elegi una opcion \n 1 -Efectivo (15% de descuento) \n 2 -debito (10% de descuento) \n 3 -Tarjeta de crédito (35% de recargo)')
}
}




// respuesta de recomendacion zapatilla wildhourse

if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '1')) {

    wildhourse.restarEfectivo();
    recomendacionUno = prompt(`Te recomendamos las ${wildhourse.nombre} y su precio en efectivo es de $ ${wildhourse.precio}Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}
else if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '2')) {

    wildhourse.restaDebito();
    recomendacionUno = prompt(`Te recomendamos las ${wildhourse.nombre} y su precio con debito es de $ ${wildhourse.precio}Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '3')) {

    wildhourse.sumaCredito();
    recomendacionUno = prompt(`Te recomendamos las ${wildhourse.nombre} y su precio con tarjeta de credito es de $ ${wildhourse.precio}Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}









//respuesta de recomendacion zapatilla pegasus trail

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '1')) {

    pegasusTrail.restarEfectivo();

    recomendacionDos = prompt(`Te recomendamos las ${pegasusTrail.nombre} y su precio en efectivo es de $ ${pegasusTrail.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}
else if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '2')) {

    pegasusTrail.restaDebito();

    recomendacionDos = prompt(`Te recomendamos las ${pegasusTrail.nombre} y su precio con debito es de $ ${pegasusTrail.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '3')) {

    pegasusTrail.sumaCredito();

    recomendacionDos = prompt(`Te recomendamos las ${pegasusTrail.nombre} y su precio con tarjeta de credito es de $ ${pegasusTrail.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}





//respuesta de recomendacion zapatilla vomero

if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '1')) {

    vomero.restarEfectivo();
    recomendacionTres = prompt(`Te recomendamos las ${vomero.nombre} y su precio en efectivo es de $ ${vomero.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '2')) {

    vomero.restaDebito();

    recomendacionTres = prompt(`Te recomendamos las ${vomero.nombre} y su precio con debito es de $ ${vomero.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '3')) {

    vomero.sumaCredito();
    recomendacionTres = prompt(`Te recomendamos las ${vomero.nombre} y su precio en efectivo es de $ ${vomero.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}
//respuesta de recomendacion zapatilla alphafly

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '1')) {

    alphafly.restarEfectivo();

    recomendacionCuatro = prompt(`Te recomendamos las ${alphafly.nombre} y su precio con debito es de $ ${alphafly.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '2')) {

    alphafly.restaDebito();

    recomendacionCuatro = prompt(`Te recomendamos las ${alphafly.nombre} y su precio con tarjeta de credito es de $ ${alphafly.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '3')) {

    alphafly.sumaCredito();

    recomendacionCuatro = prompt(`Te recomendamos las ${alphafly.nombre} y su precio con tarjeta de credito es de $ ${alphafly.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}



//seccion de agregar al carrito


if(recomendacionUno==='1'){
    carrito.push(wildhourse)
    console.log(carrito)
}

if(recomendacionDos==='1'){
    carrito.push(pegasusTrail)
    console.log(carrito)
}

if(recomendacionTres==='1'){
    carrito.push(vomero)
    console.log(carrito)
}

if(recomendacionCuatro==='1'){
    carrito.push(alphafly)
    console.log(carrito)
}

if((recomendacionUno==='2')||(recomendacionDos==='2')||(recomendacionTres==='2')||(recomendacionCuatro==='2')){
    alert('muchas gracias por utilizar las recomendaciones de calzado, volve cuando quieras')
}