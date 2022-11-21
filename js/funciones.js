/*function saludar (){
    alert('hola mundo')
}

saludar();

*/

//punto 2

/*let saludo = prompt('cual es tu nombre?')

function saludar(){
    alert ('hola '+saludo+', es un placer')
}

saludar();

*/

//punto 3 

/*let numero = Number(prompt('escriba un numero'))
let producto = 1

    for(let i=numero;i>0;i--){
        producto*=i;
    }

    alert(producto)

    */

//punto 4

/*
let factura = Number(prompt('indique el valor de la factura'))

let iva = Number(prompt('indique el valor del iva'))



function final (primerNumero,segundoNumero){
return primerNumero +(primerNumero*segundoNumero/100)

}

let resultado = final(factura,iva);

console.log(resultado)
*/

//punto 5







//punto 6

/*
let primerNumero= Number(prompt('escriba un primer numero'))

let segundoNumero=Number(prompt('escriba un segundo numero'))

let tercerNumero = Number(prompt('escriba un tercer numero'))

function promedio (primero,segundo,tercero){
    return (primero+segundo+tercero)/3
}
let resultado = promedio(primerNumero,segundoNumero,tercerNumero);

console.log(resultado)
*/


class zapatilla {
    constructor(id, nombre, superficie, precio, tecnologia, img) {
        this.id = id
        this.nombre = nombre
        this.superficie = superficie
        this.precio = precio
        this.tecnologia = tecnologia
        this.img = img
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

const wildhourse = new zapatilla(1, 'Nike Wildhourse', 'tierra', 24999, 'camara de aire', '../images/wildhorse.jpg')
const pegasusTrail = new zapatilla(2, 'Nike Pegasus Trail', 'tierra', 27999, 'react y camara de aire', '../images/pegasus-trail.jpg')
const vomero = new zapatilla(3, 'Nike Vomero', 'asfalto', 28999, 'camara de aire', '../images/vomero.jpg')
const alphafly = new zapatilla(4, 'Nike Alphafly', 'asfalto', 79999, 'placa de carbono', '../images/vaporfly.jpg')
const winflo = new zapatilla(5, 'Nike zoom Winflo', 'asfalto', 22999, 'camara de aire', '../images/winflo.jpg')
const terra = new zapatilla(6, 'Nike Terra Kiger', 'tierra', 34999, 'camara de aire', '../images/terra-kiger.jpg')


const productos =[]
productos.push(wildhourse, pegasusTrail, vomero, alphafly, winflo, terra)



console.log(productos)