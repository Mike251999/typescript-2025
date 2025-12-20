interface Print {
    print: () => void;
}

class Persona implements Print {
    readonly suscribe: boolean; // nos sirve como si fuera una constante

    constructor(private _id: number) {
        this.suscribe = true
    }

    get id (): number {
        console.log("getId")
        return this._id
    }

    set id (id: number) {
        console.log("setId")
        this._id = id
    }

    private privatePrint(): void {
        console.log("imprimiendo...." + this._id)
        // this.suscribe = false
    }

    print(): void {
        this.privatePrint()
    }
}

class Gerente implements Print {
    print(): void {
        console.log("Gerente esta imprimiendo....")
    }
}

const persona = new Persona(10)
persona.print()
persona.id = 20
persona.id
console.log(persona.suscribe)

function imprimir(obj: Print) {
    obj.print()
}

const gerente = new Gerente()

imprimir(persona)
imprimir(gerente)
