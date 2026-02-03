setTimeout(imprimir, 5000)

function imprimir() {
    console.log("Hola")
}


async function getItems(url: string) {
    const response = await fetch(url)
    const items = await response
    return items
}

async function get() {
    return await Promise.all([getItems("/users"), getItems("/products")])    
}

