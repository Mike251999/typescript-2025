let text: string = 'hola';  // inferir explicito
let text2 = 'mundo';        // inferir no explicito


function printCoord(pt: { x: number; y: number}) {
    console.log('el valor de la coordenada x es:' + pt.x)
    console.log('el valor de la coordenada y es:' + pt.y)
}

printCoord({x: 2, y: 4})

function print() {

}

let persona = { id: 1, name: 'juan', print }
persona = { id:2, name: 'rosa', print: () => {} }

let oficinista = {id: 1, name: 'Pedro', print: () => {}, capturar: () => 2}

// tipado pato, para ts el oficinista paso hacer persona y omite sus demás propiedades
persona = oficinista
oficinista.capturar()
persona.print()

// ambitos LET

let index = 0

if (index === 0) {
    let index = 2
    console.log(index)
}

console.log(index)


// UNION TYPES

type StringOrNumber = string | number;

function imprimirTextONumeros(arg1: StringOrNumber, arg2: StringOrNumber) {
    if (typeof arg1 === 'string') {
        console.log(arg1 + arg2)
        return;
    }

    if (typeof arg2 === 'number') {
        console.log(arg1 + arg2)
    }
}

imprimirTextONumeros('h', 1)
imprimirTextONumeros(1, 1)
