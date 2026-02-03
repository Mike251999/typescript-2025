
export class Module1 {
    print() {
        localPrint("imprimiendo desde modulo 1")
    }
}

function localPrint(text: string) {
    console.log(text)
}
