interface IdName {
    id: number;
    name: string;
}


const usuario: IdName = {
    id: 1,
    name: "juan"
}

const usuario2: IdName = {
    id: 2,
    name: "Alejandra"
}

const usuarios: IdName[] = [
    usuario,
    usuario2,
    {
        id: 3,
        name: "Pedro"
    }
]

console.log(usuarios)

interface OptionalName {
    id: number;
    name?: string
}

const opcional: OptionalName = {
    id: 1,
}
