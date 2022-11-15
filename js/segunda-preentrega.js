class zapatilla {
    constructor(id, nombre, superficie, precio, tecnologia) {
        this.id = id
        this.nombre = nombre
        this.superficie = superficie
        this.precio = precio
        this.tecnologia = tecnologia
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

const wildhourse = new zapatilla(1, 'Nike Wildhourse', 'tierra', 24999, 'camara de aire')
const pegasusTrail = new zapatilla(2, 'Nike Pegasus Trail', 'tierra', 27999, 'react y camara de aire')
const vomero = new zapatilla(3, 'Nike Vomero', 'asfalto', 28999, 'camara de aire')
const alphafly = new zapatilla(4, 'Nike Alphafly', 'asfalto', 79999, 'placa de carbono')


const stock = []
stock.push(wildhourse, pegasusTrail, vomero, alphafly)
let medioDepago
const carrito = []
let ventaAdicional

let bienvenida = alert('bienvenido a Planeta running! Descubri los mejores calzados para tu actividad deportiva')



let filtrado = parseInt(prompt('Opciones de filtrado:  \n 1- menor a mayor precio.  \n 2- calzado de asfalto.  \n 3- Calzado para tierra.  \n 4-tecnologia'))


function filtrar (){

    while(isNaN(filtrado)){
        alert('por favor ingrese solo numeros')
        filtrado = parseInt(prompt('Opciones de filtrado:  \n 1- menor a mayor precio.  \n 2- calzado de asfalto.  \n 3- Calzado para tierra.  \n 4-tecnologia'))
    }
    while(filtrado=Number){
        switch(filtrado){
            
        }
    }
}

filtrar();