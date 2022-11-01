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

let bienvenida = alert('bienvenido a Planeta running! Descubri los mejores calzados para tu actividad deportiva')



let filtrado = prompt('elija lo opcion de filtrado para encontrar tu calzado ideal:  \n 1- menor a mayor precio.  \n 2- calzado de asfalto.  \n 3- Calzado para tierra. ')


if (filtrado == '1') {

    stock.sort((a, b) => {
        if (a.precio < b.precio) {
            return -1;
        }
    })
    menorAmayor = stock.map(function (modelo) {
        return (`
    ${modelo.id}- ${modelo.nombre}
    precio: $ ${modelo.precio}
    `)
    })
    comprar = prompt('calzados disponibles:\n' + menorAmayor + ' \n si queres agregar un producto al carrito escribi el numero del mismo, de lo contrario escribi no')
}

else if (filtrado == '2') {
    asfalto = stock.filter((para) => para.superficie.includes('asfalto'))
    opcionAsfato = asfalto.map(function (modelo) {
        return (` ${modelo.id}-  ${modelo.nombre} precio: $ ${modelo.precio}
`)
    })
    comprar = prompt('calzados disponibles:\n ' + opcionAsfato + '\n si queres agregar un producto al carrito escribi el numero del mismo,de lo contrario escribi no')
}

else if(filtrado=='3'){
    tierra = stock.filter((para) => para.superficie.includes('tierra'))
        opcionTierra = tierra.map(function (modelo) {
            return (`        
            ${modelo.id} ${modelo.nombre}
            precio: $ ${modelo.precio}
            `)
        })
        comprar=prompt(`calzados disponibles:\n ${opcionTierra} \n si queres agregar un producto al carrito escribi el numero del mismo,de lo contrario escribi no'`)
}

switch(comprar){

    case'1':
        carrito.push(wildhourse)
        seguirComprando=prompt('desea seguir comprando?\n 1- Si\n 2 -No')
        break;

    case '2':
        carrito.push(pegasusTrail)
        seguirComprando=prompt('desea seguir comprando?\n 1- Si\n 2 -No')
        break;

    case '3':
        carrito.push(vomero)
        seguirComprando=prompt('desea seguir comprando?\n 1- Si\n 2 -No')
        break;
        
    case'4':
    carrito.push(alphafly)
    seguirComprando=prompt('desea seguir comprando?\n 1- Si\n 2 -No')
    break;

    case'no':alert('gracias por visitarnos, vuelva pronto')
    break;

    
}


if(seguirComprando=='1'){
    filtrado = prompt('elija lo opcion de filtrado para encontrar tu calzado ideal:  \n 1- menor a mayor precio.  \n 2- calzado de asfalto.  \n 3- Calzado para tierra. ')
}