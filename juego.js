// juego de piedra, papel o tijera
let jug1;
let jug2;

console.log("Bienvenido al juego de piedra, papel o tijera");

function partida() {
    switch (prompt("Escoge una opcion: 1.iniciar, 2.volver a jugar, 3.salir")) {
        case "1":
            jug1 = prompt("Jugador 1, elige tu jugada: piedra, papel o tijera");
            jug2 = prompt("Jugador 2, elige tu jugada: piedra, papel o tijera");

            if (jug1 === jug2) {
                console.log("Empate");
            } 
            else if (
                jug1 === "piedra" && jug2 === "tijera" ||
                jug1 === "papel" && jug2 === "piedra" ||
                jug1 === "tijera" && jug2 === "papel"
            ) {
                alert("Gana el jugador 1");
            }
            else {
                alert("Gana el jugador 2");
            }
        break;
        case "2":
            console.log("Volvienndo a jugar");
            partida();
        break;
        case "3":
            console.log("salir del juego");
        break;
        default:
            console.log("Opción invalida");
        break;
    }
}
partida();