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
            console.log('La puerta está abierta');
            break;
        case DoorState.Closed:
            console.log('La puerta está cerrada');
            break;
    }
}

printDoorState(DoorState.Open);
printDoorState(DoorState.Closed);
