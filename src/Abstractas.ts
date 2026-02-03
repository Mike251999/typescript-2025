abstract class EmpleadoBase {
    id: number
    name: string
    
    constructor(id: number, name:string) {
        this.id = id
        this.name = name
    }

    abstract trabajar(text: string): void

    abstract entrada(hora: string): void
}

class Empleado extends EmpleadoBase {
    entrada(hora: string): void {
        throw new Error("Method not implemented.")
    }
    constructor(name: string) {
        super(1, name)
    }

    trabajar(text: string): void {
        console.log(text)
    }
}

class Adminstrador extends EmpleadoBase {
    entrada(hora: string): void {
        throw new Error("Method not implemented.")
    }
    trabajar(text: string): void {
        console.log("hola mundo")
    }
}

let empleado = new Empleado("Ana")
