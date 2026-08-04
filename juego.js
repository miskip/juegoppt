// juego de piedra, papel o tijera
let jug1;
let jug2;

console.log("Bienvenido al juego de piedra, papel o tijera");

function partida() {
    switch (prompt("Escoge una opcion: 1.iniciar, 2.volver a jugar, 3.salir")) {
        case "1":
            jug1 = prompt("Jugador 1, escribe tu jugada: piedra, papel o tijera").toLowerCase();
            jug2 = prompt("Jugador 2, escribe tu jugada: piedra, papel o tijera").toLowerCase();
            if (
                (jug1 !== "piedra" && jug1 !== "papel" && jug1 !== "tijera") ||
                (jug2 !== "piedra" && jug2 !== "papel" && jug2 !== "tijera")
               ) 
            {
                alert("Opcion inválida, Solo puedes escribir piedra, papel o tijera");
            }
            else if (jug1 === jug2) 
            {
                alert("Empate");
            }
            else if (
                jug1 === "piedra" && jug2 === "tijera" ||
                jug1 === "papel" && jug2 === "piedra" ||
                jug1 === "tijera" && jug2 === "papel"
            ) 
            {
                alert("Gana el jugador 1");
            }
            else
            {
                alert("Gana el jugador 2");
            }
            case "2":
                console.log("volvienndo a jugar");
                partida();
            break;
            case "3":
                console.log("salir del juego");
            break;
            default:
                console.log("opción invalida");
            break;
        }
}
partida();