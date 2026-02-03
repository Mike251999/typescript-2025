interface IdName {
    id: number;
    name: string;
}

interface DescrValue {
    descr: string;
    value: number;
}

function getDescrOrName(obj: IdName | DescrValue): string {
    if ("id" in obj) {
        return obj.name
    }

    return obj.descr
}

console.log(getDescrOrName({id: 1, name: "Alejandra"}))
console.log(getDescrOrName({value: 2, descr: "test"}))

// operador keyof

type PropiedadNombreOId = keyof IdName

function getProperty(key: PropiedadNombreOId, obj: IdName) {
    console.log(`${key}: ${obj[key]}`)
}

getProperty("id", {id: 1, name: "Alejandra"})
getProperty("name", {id: 1, name: "Alejandra"})

