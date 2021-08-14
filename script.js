function parser(op){
    let result
    if (op == 0){
        result = "Piedra"
    }
    else if(op == 1){
        result = "Papel"
    }
    else{
        result = "Tijera"
    }
    return result
}

function engineGame(user, machine) {
    let message_win = "Felicidades Ganaste"
    let message_lost = "Lamentablemente Perdiste"
    let message_equalize = "Upss Empate"

    if (user == 0) {
        if (machine == 0) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_equalize} `)
        } else if (machine == 1) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_lost} `)
        } else if (machine == 2) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_win} `)
        }
    } else if (user == 1) {
        if (machine == 0) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_win} `)
        } else if (machine == 1) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_equalize} `)
        } else if (machine == 2) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_lost} `)
        }
    } else if (user == 2) {
        if (machine == 0) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_lost} `)
        } else if (machine == 1) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_win} `)
        } else if (machine == 2) {
            alert(`Resultado: Tu sacaste ${parser(user)} y la Maquina ${parser(machine)}\n ${message_equalize} `)
        }
    }
}

let quantity = +prompt('Ingrese la cantidad de veces que deseas jugar:')
let cont = 1
let random = Math.floor(Math.random() * 3)
let op

while (cont <= quantity) {
    do {
        if (op < 0 || op > 2) {
            op = +prompt(`***Juego ${cont} de ${quantity}*** \n Numero no corresponde a una opcion validad vuelve a seleccionar \n Piedra = 0\n Papel = 1 \n Tijera = 2`)
        } else {
            op = +prompt(`***Juego ${cont} de ${quantity}*** \n Ingrese una Opcion \n Piedra = 0\n Papel = 1 \n Tijera = 2`)
        }
    } while (op < 0 || op > 2);

    engineGame(op, random)
    cont++
}



