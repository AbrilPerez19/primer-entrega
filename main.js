
console.log("Boletín virtual del Instituto del Prado");


let ingresarNombre = prompt("Ingrese su nombre");
/* Le pido al usuario que ingrese su nombre */

switch (ingresarNombre) {
    case "Marina":
        alert("¡Hola Marina!")
        const notaDesaprobada = 3
        break;

    case "Rocio":
        alert("¡Hola Rocio!")
        const notaAprobada = 9
        break;

    case "Agustin":
        alert("¡Hola Agustín!")
        const notaAprobada = 10
        break;

    case "Leonel":
        alert("¡Hola Leonel!")
        const notaDesaprobada = 5
        break;

    default:
        alert("Usted no pertenece a la institución")
        break;
}
ingresarNombre = prompt("Ingrese su nombre")


const notaAprobada = 7; 8; 9; 10;
const notaDesaprobada = 6; 5; 4; 3; 2; 1;

if (ingresarNombre == notaAprobada) {
    alert("¡Felicitaciones!, usted ha aprovado el primer trimestre")
} else (ingresarNombre == notaDesaprobada); {
    alert("Usted a desaprobado el primer trimestre")
}
