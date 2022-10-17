//punto 1

let nombre = prompt('cual es tu nombre?')


//punto 2

let salida = alert ('hola'+' '+nombre)



// punto numero 5


let horasTrabajadas = parseInt(prompt('cuantas horas haz trabajado esta semana?'))

let costeHoras = parseInt(prompt('cual es el valor por hora?'))


let resultado = horasTrabajadas * costeHoras

alert('su salario es de '+' '+'$'+resultado)



//punto 6

let peso = parseFloat(prompt('cual es tu peso?'))

let altura = parseFloat(prompt('cuanto medis?'))

let indiceMcorporal = peso / (Math.pow(altura,2))

alert('su indice de masa corporal es de '+ indiceMcorporal)



//punto 8

let monto = parseFloat(prompt('ingrese el capital a invertir en el plazo fijo'))

let interes = parseFloat(prompt('ingrese el interes anual'))

let tiempo = parseFloat(prompt('ingrese la cantidad de tiempo expresado en años'))

let inversion = (monto * interes / 100) *tiempo

alert('el capital obtenido en'+' '+tiempo+'años es de '+ ' $'+inversion)


//punto 9

let pesoPayaso = 112

let pesoMuneca = 75

let payaso = parseFloat(prompt('cuantos payasos se vendienron en el pedido actual?'))

let muneca = parseFloat(prompt('cuantas muñecas se vendieron en el pedido actual?'))

let total = (pesoPayaso*payaso)+(pesoMuneca*muneca)

alert('el peso total del pedido es de '+' '+total +' '+'gramos')



//punto 10

let pan= 3.49



let panViejo = pan-(pan*0.60)

let barrasViejas = parseFloat(prompt('cuantas barras de pan que no son de hoy se vendieron?'))

let costoPanViejo = barrasViejas*panViejo

alert('el costo total es de $'+' '+costoPanViejo)





