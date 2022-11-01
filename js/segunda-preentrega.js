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



let filtrado = prompt('elija lo opcion de filtrado para encontrar tu calzado ideal:  \n 1- menor a mayor precio.  \n 2- calzado de asfalto.  \n 3- Calzado para tierra.  \n 4-tecnologia')


switch (filtrado) {
    case '1':
        stock.sort((a, b) => {
            if (a.precio < b.precio) {
                return -1;
            }
            menorAmayor = stock.map(function (modelo) {
                return (`
            ${modelo.id}- ${modelo.nombre}
            precio: $ ${modelo.precio}
            `)
            })

        });
        comprarUno = prompt('calzados disponibles:\n' + menorAmayor + ' \n si queres agregar un producto al carrito escribi el numero del mismo, de lo contrario escribi no')

        break;



    case '2':
        asfalto = stock.filter((para) => para.superficie.includes('asfalto'))
        opcionAsfato = asfalto.map(function (modelo) {
            return (` ${modelo.id}-  ${modelo.nombre} precio: $ ${modelo.precio}
`)
        })
        comprarDos = prompt('calzados disponibles:\n ' + opcionAsfato + '\n si queres agregar un producto al carrito escribi el numero del mismo,de lo contrario escribi no')
        break;


    case '3':
        tierra = stock.filter((para) => para.superficie.includes('tierra'))
        opcionTierra = tierra.map(function (modelo) {
            return (`        
            ${modelo.id}${modelo.nombre}
            precio: $ ${modelo.precio}`)
        })
        comprarTres = prompt('calzados disponibles:\n 1-' + opcionTierra[0] + '\n 2-' + opcionTierra[1] + '\n si queres agregar un producto al carrito escribi el numero del mismo,de lo contrario escribi no')

        break;

    case '4':
        tecnologia = stock.map((con) => {
            return (`      
            ${con.id}- ${con.nombre}
            precio: $ ${con.precio}
            tecnologia: ${con.tecnologia}
            `)
        })
        comprarCuatro = prompt('calzados disponibles:\n' + tecnologia + '\n si queres agregar un producto al carrito escribi el numero del mismo,de lo contrario escribi no')
}

if (comprarUno==='1') {
    
        carrito.push(wildhourse)
        agregarCompra =prompt('desea agregar algo mas al carrito?\n 1- Si\n 2-No')
        
}
    else if(comprarUno==='2'){
        carrito.push(pegasusTrail)
        agregarCompra =prompt('desea agregar algo mas al carrito?\n 1- Si\n 2-No')
        }

    else if(comprarUno==='3'){
        carrito.push(vomero)
        agregarCompra =prompt('desea agregar algo mas al carrito?\n 1- Si\n 2-No')
        }

    else if(comprarUno==='4'){
        carrito.push(alphafly)
        agregarCompra =prompt('desea agregar algo mas al carrito?\n 1- Si\n 2-No')
    }
    else if(comprarUno==='no'){
        agregarCompra= alert('muchas gracias por la visita')
}



if (agregarCompra==='1'){
    filtrado = prompt('elija lo opcion de filtrado para encontrar tu calzado ideal:  \n 1- menor a mayor precio.  \n 2- calzado de asfalto.  \n 3- Calzado para tierra.  \n 4-tecnologia')
    switch(filtrado){}
}

