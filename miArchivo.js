

let carritoGuardado = []

const tienda = async () => {
    const response = await fetch('./arrObjetos.json')
    const productos = await response.json()




/* toma de botones y contenedores ---*/


let botonAsfalto = document.getElementById("filtroAsfalto")
let botonTierra = document.getElementById("filtroTierra")
let botonMenorPrecio = document.getElementById("filtroMenorPrecio")
let botonMayorPrecio = document.getElementById("filtroMayorPrecio")
let botonTodos = document.getElementById("filtroTodos")
let contador = document.getElementById("contador")
let contenedorProductos = document.getElementById("contenedorProductos")


/*---------------botones de filtros------------------*/


botonTodos.onclick = () => {
    renderizarProductos()
}

botonMenorPrecio.onclick = () => {
    let productosFiltrados = productos.sort((a, b) => a.precio - b.precio)

    renderizarProductos(productosFiltrados)
}


botonMayorPrecio.onclick = () => {
    let productosFiltrados = productos.sort((a, b) => b.precio - a.precio)

    renderizarProductos(productosFiltrados)
}


const crearTarjeta = (boton) => {
    boton.onclick = () => {
        contenedorProductos.innerHTML = ''
        let productosFiltrados = productos.filter(producto => producto.superficie.includes(boton.value))
        productosFiltrados.forEach((prod) => {
            contador.innerHTML = `<p class='cantidadEncontrada'>productos encontrados: ${productosFiltrados.length}</p>`
            let tarjetaProductos = document.createElement('div')
            tarjetaProductos.className = 'box'
            tarjetaProductos.innerHTML = `<h2 class="tituloTarjetas"> ${prod.nombre}</h2>
                                    <img src=${prod.img}>
                                    <p>$ ${prod.precio}</p>
                                    <button class ="boton" id="${prod.id}">agregar al carrito</button>`
            contenedorProductos.append(tarjetaProductos)
            const boton = document.getElementById(`${prod.id}`);
            boton.addEventListener('click', () => {
                agregarAlCarrito(prod.id);
            });
        })
    }

}


crearTarjeta(botonAsfalto);
crearTarjeta(botonTierra);



renderizarProductos()

function renderizarProductos(productosFiltrados) {
    contenedorProductos.innerHTML = ''
    productos.forEach((prod) => {
        contador.innerHTML = `<p class='cantidadEncontrada'>productos encontrados: ${productos.length}</p>`
        let tarjetaProductos = document.createElement('div')
        tarjetaProductos.className = 'box'
        tarjetaProductos.innerHTML = `<h2 class="tituloTarjetas"> ${prod.nombre}</h2>
                                <img src=${prod.img}>
                                <p>$ ${prod.precio}</p>
                                <button class ="boton" id="${prod.id}">agregar al carrito</button>`
        contenedorProductos.append(tarjetaProductos)
        const boton = document.getElementById(`${prod.id}`);
        boton.onclick = () => {
            agregarAlCarrito(prod.id);
        };
    })
}


const agregarAlCarrito = (id) => {
    let productoBuscado = productos.find(producto => producto.id == id)

    let posicionCarrito = carritoGuardado.findIndex((producto) => producto.id == productoBuscado.id)
    if (posicionCarrito != -1) {
        carritoGuardado[posicionCarrito].unidades++
        carritoGuardado[posicionCarrito].subtotal = carritoGuardado[posicionCarrito].precioUnidad * carritoGuardado[posicionCarrito].unidades
    } else {
        carritoGuardado.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnidad: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio,
            total: productoBuscado.precio
        })
    }

    
/* tostadita de producto agregado */

    const carritoJson = localStorage.setItem('carrito', JSON.stringify(carritoGuardado))
    localStorage.getItem('carrito')
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'producto agregado al carrito'
    })
    renderizarCarrito()
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
        <p>${item.precioUnidad}</p>
        <p>x ${item.unidades} unidades</p>
        <p>${item.subtotal}</p>
        
        </div>
        `


    }
    carrito.innerHTML += `<div class="total">
    <p> Total : ${total}</p>
    <button id="vaciar" class="boton">vaciar</button>
    </div>`

    let vaciar = document.getElementById('vaciar')
    vaciarCarrito();


}






function vaciarCarrito() {
    vaciar.onclick = (e) => {
        Swal.fire('carrito vaciado');
        setTimeout (()=>{
            location.reload()
            localStorage.clear()
        },1000) 
        
        
    }
}

}
tienda()
