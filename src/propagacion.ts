let obj1: object = { id: 2, name: 'juan' }

let obj2: object = {lastName: 'Uribe'}

// la propagacion puede sobreescribir las propiedades ya declaradas  de un objeto
let obj3: object = {edad: 1, ...obj1, ...obj2}

console.log(("obj3: " + JSON.stringify(obj3)))

// las tuplas nos sirven para equipar un arreglo para mayor rigidez
let arreglo1: number[] = [1,2,3]
let arreglo2: number[] = [1,2,3]

console.log([...arreglo1, ...arreglo2])

let arreglo3: [string, number] = ["", 2]

// destructuracion de objetos

let objetoCompleto = {
    name: "juan",
    age: 20,
    subscrito: true
}

let { name, age, subscrito } = objetoCompleto

age = age + 20

console.log(name, age, subscrito, objetoCompleto)
