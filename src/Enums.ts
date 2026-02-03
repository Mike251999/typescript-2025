// enum con indices por defecto
enum DoorState {
    Open,
    Closed
}

const enum DoorStateSpecificValues {
    Open = 100,
    Closed = 200
}

function printDoorState(state: DoorState) {
    console.log('Valor del enum ' + state)
    switch (state) {
        case DoorState.Open:
            console.log('La puerta esta abierta')
            break;
        case DoorState.Closed:
            console.log('La puerta esta cerrada')
            break;
    }
}

printDoorState(DoorState.Open)
printDoorState(DoorState.Closed)
