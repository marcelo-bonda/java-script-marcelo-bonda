const numeros = [1,2,3,4,5]

numeros.forEach((num)=>{
    console.log(num)
})


const bicicltas = [
    {marca:"venzo",modelo:"loki",precio:1450},
    {marca:"vairo",modelo:"xr",precio:4500},
    {marca:"sars",modelo:"windstar",precio:3500}
]


// funcion find (guarda en un array nuevo todo aquel producto que concuerde con la descripcion)

const producto = bicicltas.find(bicicleta => bicicleta.precio === 3500)

console.log(producto)


//funcion some (muestra true o false si existe algo de acuerdo con la descripcion)

const existe = bicicltas.some(bicicleta => bicicleta.marca ==="sars")

console.log(existe)

//funcion filter ( muestra todo aquel que este x debajo o x arriba del monto especificado)

const barato = bicicltas.filter(producto => producto.precio<4000)

console.log(barato)

//funcion map (muestra el valor especificado )

const precios= bicicltas.map(el => el.precio)

console.log(precios)



//RANDOM genera numeros al azar . ROUND  redondea para abajo numeros decimales
const generadorNumeros = () =>{
    return Math.round(Math.random()*100)
}

console.log(generadorNumeros())

