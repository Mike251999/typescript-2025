let obj1: object = {id: 2, name: 'juan'}

let obj2: object = {lastName: 'Uribe'}

// la propagación puede sobreescribir las propiedades ya declaradas de un objeto
let obj3: object = {edad: 1, ...obj1, ...obj2}

console.log("obj3: " + JSON.stringify(obj3))

// las tuplas nos sirven para tipar un arreglo con mayor rigidez
let arraglo1: number[] = [1,2,3]
let arraglo2: number[] = [3,4,5]

console.log([...arraglo1, ...arraglo2])

let arreglo3: [string, number] = ["", 2]

// destructuración de objetos

let objetoComplejo = {
    name: "juan",
    age: 20,
    subscrito: true
}

let { name, age, subscrito } = objetoComplejo

age = age + 20

console.log(name, age, subscrito, objetoComplejo)
