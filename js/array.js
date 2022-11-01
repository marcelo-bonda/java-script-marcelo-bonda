//punto 1


/*const asignaturas=['matematicas','lengua','literatura','educacion fisica']

alert(asignaturas)
*/




//punto 2
/*
const asignaturas=['matematicas','lengua','literatura','educacion fisica']
let estudio

for(let i=0;i<asignaturas.length;i++){
    console.log('yo estudio '+asignaturas[i])
}
*/


//punto 3 

/*
const asignaturas=['matematicas','lengua','literatura','educacion fisica']
let nota

for(let i=0;i<asignaturas.length;i++){
    nota=prompt('que nota sacaste en ' +asignaturas[i]+' ?')
    console.log('en '+asignaturas[i]+' sacaste '+nota)
}
*/

//punto 4


/*
const numeros =[]

for(let i=0;i<5;i++){
    let loteria=prompt('escriba el numero ganador de la loteria')
    numeros.push(loteria)

}

numeros.sort((a,b)=>a-b)

console.log(numeros)
*/




//punto 5

/*
const numeros =[1,2,3,4,5,6,7,8,9,10]

numeros.reverse()

console.log(numeros.join(" ,"))
*/


//punto 6

/*
const materias=['matematicas','lengua','literatura','educacion fisica','quimica','ingles']

const notasIngresadas=[]

for(let i=0;i<materias.length;i++){
    let notasAingresar =Number(prompt('que nota sacaste en '+' '+materias[i]))
    if(notasAingresar<7){
        notasIngresadas.push(materias[i])
    }
}

for(let i=0;i<notasIngresadas.length;i++){
    console.log('tenes que recursar '+notasIngresadas[i])
}

*/


//punto 7


const abecedario= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]


//punto 8




//punto 9

const numeros = [50,75, 46,
    22, 80, 65, 8]

    console.log(Math.min(...numeros));

    console.log(Math.max(...numeros));

