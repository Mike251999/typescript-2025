// expresión condicional

const numero: number = 11;
const mensaje: string = numero > 10 ? 'Es mayor que 10' : 'es menor o igual que 10';
console.log(mensaje);

// coalescente nulo

function comprobarSiEsNuloIndefinido(a: string | null | undefined) {
    const valor = a ?? 'indefinido o nulo'
    console.log('a es: ' + valor)
}

comprobarSiEsNuloIndefinido('Hola')
comprobarSiEsNuloIndefinido(null)
comprobarSiEsNuloIndefinido(undefined)

// no es recomendable usar any, 
//solo cuando se trata de migrar algun proyecto o utilizar una libreria que no este hecha con ts
let random: any = 1

console.log(random)

random = 'texto'
