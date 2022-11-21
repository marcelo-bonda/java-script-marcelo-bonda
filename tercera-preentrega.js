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
const productos = []
let carritoGuardado = []
productos.push(wildhourse, pegasusTrail, vomero, alphafly, winflo, terra)


/* toma de botones y contenedores ---*/


let botonAsfalto = document.getElementById("filtroAsfalto")
let botonTierra = document.getElementById("filtroTierra")
let botonMenorPrecio = document.getElementById("filtroMenorPrecio")
let botonMayorPrecio = document.getElementById("filtroMayorPrecio")
let botonTodos = document.getElementById("filtroTodos")
let contador = document.getElementById("contador")
let contenedorProductos = document.getElementById("contenedorProductos")


/*---------------botones de filtros------------------*/

botonAsfalto.onclick = () => {
    let productosFiltrados = productos.filter(producto => producto.superficie.includes('asfalto'))
    renderizarProductos(productosFiltrados)


}

botonTierra.onclick = () => {
    let productosFiltrados = productos.filter(producto => producto.superficie.includes('tierra'))
    renderizarProductos(productosFiltrados)
}
botonTodos.onclick = () => {
    renderizarProductos(productos)
}

botonMenorPrecio.onclick = () => {
    let productosFiltrados = productos.sort((a, b) => a.precio - b.precio)

    renderizarProductos(productosFiltrados)
}


botonMayorPrecio.onclick = () => {
    let productosFiltrados = productos.sort((a, b) => b.precio - a.precio)

    renderizarProductos(productosFiltrados)
}






/*mostrar productos disponibles en pantalla*/


renderizarProductos()

function renderizarProductos(productosFiltrados) {
    let productosARenderizar = productos
    if (productosFiltrados) {
        productosARenderizar = productosFiltrados
    }
    contenedorProductos.innerHTML = ''
    for (producto of productosARenderizar) {
        contador.innerHTML = `<p class='cantidadEncontrada'>productos encontrados: ${productosARenderizar.length}</p>`
        let tarjetaProductos = document.createElement('div')
        tarjetaProductos.className = 'box col-md-4'
        tarjetaProductos.innerHTML = `<h2 class="tituloTarjetas"> ${producto.nombre}</h2>
                                <img src=${producto.img}>
                                <p>$ ${producto.precio}</p>
                                <button class ="boton" id="${producto.id}">agregar al carrito</button>`


        contenedorProductos.append(tarjetaProductos)

    }
}


/*-----------boton agregar productos------------*/

let botones = document.getElementsByClassName('boton')

let carrito = document.getElementById("carrito")

for (const boton of botones) {
    boton.onclick = (e) => {
        let productoBuscado = productos.find(producto => producto.id == e.target.id)

        let posicionCarrito = carritoGuardado.findIndex((producto) => producto.id == productoBuscado.id)


        if (posicionCarrito != -1) {
            carritoGuardado[posicionCarrito].unidades++
            carritoGuardado[posicionCarrito].subtotal = carritoGuardado[posicionCarrito].precioUnidad * carritoGuardado[posicionCarrito].unidades
        }
        else {
            carritoGuardado.push({ id: productoBuscado.id, nombre: productoBuscado.nombre, precioUnidad: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio, total: productoBuscado.precio })
        }


        const carritoJson = localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
        localStorage.getItem('carrito')

        renderizarCarrito()
    }

}


/*--------------local storage------------------*/


if (localStorage.getItem('carrito')) {
    carritoGuardado = JSON.parse(localStorage.getItem('carrito'))
}

renderizarCarrito()

function renderizarCarrito() {
    carrito.innerHTML = `<div class="itemCarrito">
        <p> nombre</p>
        <p>Precio por unidad</p>
        <p> unidades</p>
        <p>subtotal</p>
        </div>
        `
    let total = 0
    for (item of carritoGuardado) {
        total += item.subtotal
        carrito.innerHTML += `<div class="itemCarrito">
        <p> ${item.nombre}</p>
        <p>${item.precio}</p>
        <p>x ${item.unidades} unidades</p>
        <p>${item.subtotal}</p>
        
        </div>
        `
        

    }
    carrito.innerHTML += `<div class="total">
    <p> Total : ${total}</p>
    <button id="vaciar">vaciar</button>
    </div>`

    let vaciar = document.getElementById('vaciar')
vaciar.onclick=()=>{
    localStorage.clear()
    carrito.innerHTML=""
    

}
}

