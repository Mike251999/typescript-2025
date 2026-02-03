interface Id { 
    id: number | string;
}

interface Age {
    age: number
}

interface IdName extends Id, Age {
    id:  number;
    name: string;
}

class Persona implements IdName {
    age: number = 25;
    name = '';
    id = 1;
}

class BaseClass {
    private id: number;
    protected name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    printId() {
        console.log(this.id)
    }

    print(text: string, num: number) {
        console.log('Imprimiendo desde BaseClass ' + text)
    }
}

class MyClass extends BaseClass {
    constructor(id:number, name: string) {
        super(id, name)
        this.name = "Juan"
    }

    printName() {
        console.log(this.name)
    }

    print(text: string): void {
        console.log('imprimiendo desde MyClass ' + text)
        super.print(text, 1)
    }
}

const myClass: MyClass = new MyClass(1, 'Ana')

myClass.printName()
myClass.printId()
