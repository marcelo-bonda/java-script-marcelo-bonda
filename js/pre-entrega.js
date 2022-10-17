class zapatilla {
    constructor(nombre,superficie,precio){
        this.nombre=nombre
        this.superficie=superficie
        this.precio=precio
    }
    restarEfectivo(){
        this.precio= this.precio -(this.precio *0.15)
    }
    restaDebito(){
        this.precio = this.precio -(this.precio *0.10)
    }
    sumaCredito(){
        this.precio = this.precio + (this.precio * 0.35)
    }
}

const wildhourse =new zapatilla('Nike Wildhourse','tierra',24999)
const pegasusTrail=new zapatilla('Nike Pegasus Trail','tierra',27999)
const vomero= new zapatilla('Nike Vomero','asfalto',28999)
const alphafly=new zapatilla('Nike Alphafly','asfalto',79999)

let medioDepago


let bienvenida = alert('bienvenido a Planeta running! Descubri los mejores calzados para tu actividad deportiva')


//primera pregunta

let superficie =prompt('En esta seccion te ayudaremos a encontrar tu calzado ideal.En que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')

while ((superficie!='1') && (superficie!='2')){
    alert('Por favor, elegi una opcion valida')
    superficie = prompt('En que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')
}


//segunda pregunta

let frecuencia = prompt('Con que frecuencia semanal corres? Elegi una opcion: \n  1 - 1 a 3 veces por semana \n 2- 3 a 5 veces por semana')

while ((frecuencia!='1') && (frecuencia!='2')){
    alert('Por favor, elegi una opcion valida')
    frecuencia = prompt('Con que frecuencia semanal corres? Elegi una opcion: \n  1 -1 a 3 veces por semana \n 2- 3 a 5 veces por semana')
}

//tercera pregunta

let medioDePago = prompt('Que medio de pago preferis?Elegi una opcion \n 1- Efectivo (15% de descuento) \n 2 -Debito (10% de descuento) \n 3 -tarjeta de credito (35% de recargo)')

while ((medioDePago!='1') && (medioDePago!='2')&&(medioDePago!='3')){
    alert('Por favor, Elegi una opcion valida')
        medioDePago= prompt('Que medio de pago preferis?Elegi una opcion \n 1 -Efectivo (15% de descuento) \n 2 -debito (10% de descuento) \n 3 -Tarjeta de crédito (35% de recargo)')
}





// respuesta de recomendacion zapatilla wildhourse

if ((superficie === '1') && (frecuencia === '1')&&(medioDePago==='1')){

    wildhourse.restarEfectivo();
    recomendacion = prompt(`Te recomendamos las ${wildhourse.nombre} y su precio en efectivo es de $ ${wildhourse.precio}Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}
else if ((superficie === '1') && (frecuencia === '1')&&(medioDePago==='2')){

    wildhourse.restaDebito();
    recomendacion = prompt(`Te recomendamos las ${wildhourse.nombre} y su precio con debito es de $ ${wildhourse.precio}Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '1') && (frecuencia === '1')&&(medioDePago==='3')){

    wildhourse.sumaCredito();
    recomendacion = prompt(`Te recomendamos las ${wildhourse.nombre} y su precio con tarjeta de credito es de $ ${wildhourse.precio}Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}









//respuesta de recomendacion zapatilla pegasus trail

if ((superficie === '1') && (frecuencia === '2')&&(medioDePago==='1')){

    pegasusTrail.restarEfectivo();

    recomendacion = prompt(`Te recomendamos las ${pegasusTrail.nombre} y su precio en efectivo es de $ ${pegasusTrail.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}
else if ((superficie === '1') && (frecuencia === '2')&&(medioDePago==='2')){

    pegasusTrail.restaDebito();

    recomendacion = prompt(`Te recomendamos las ${pegasusTrail.nombre} y su precio con debito es de $ ${pegasusTrail.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '1') && (frecuencia === '2')&&(medioDePago==='3')){

    pegasusTrail.sumaCredito();

    recomendacion = prompt(`Te recomendamos las ${pegasusTrail.nombre} y su precio con tarjeta de credito es de $ ${pegasusTrail.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}





//respuesta de recomendacion zapatilla vomero

if ((superficie === '2') && (frecuencia === '1')&&(medioDePago==='1')){

    vomero.restarEfectivo();
    recomendacion = prompt(`Te recomendamos las ${vomero.nombre} y su precio en efectivo es de $ ${vomero.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '1')&&(medioDePago==='2')){

    vomero.restaDebito();

    recomendacion = prompt(`Te recomendamos las ${vomero.nombre} y su precio con debito es de $ ${vomero.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '1')&&(medioDePago==='3')){

    vomero.sumaCredito();
    recomendacion = prompt(`Te recomendamos las ${vomero.nombre} y su precio en efectivo es de $ ${vomero.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}
//respuesta de recomendacion zapatilla alphafly

if ((superficie === '2') && (frecuencia === '2')&&(medioDePago==='1')){

    alphafly.restarEfectivo();

    recomendacion = prompt(`Te recomendamos las ${alphafly.nombre} y su precio con debito es de $ ${alphafly.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '2')&&(medioDePago==='2')){

    alphafly.restaDebito();

    recomendacion = prompt(`Te recomendamos las ${alphafly.nombre} y su precio con tarjeta de credito es de $ ${alphafly.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}

else if ((superficie === '2') && (frecuencia === '2')&&(medioDePago==='3')){

    alphafly.sumaCredito();

    recomendacion = prompt(`Te recomendamos las ${alphafly.nombre} y su precio con tarjeta de credito es de $ ${alphafly.precio}.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)
}
