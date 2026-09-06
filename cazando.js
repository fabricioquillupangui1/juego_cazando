let canvas = document.getElementById('areaJuego');
let ctx = canvas.getContext("2d");
const ALTURA_GATO = 40;
const ANCHO_GATO = 30;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
    
function graficarGato() {
    ctx.fillStyle = "#300";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTURA_GATO);
}

function graficarComida() {
    ctx.fillStyle = "#003"; 
    ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function iniciarJuego() {
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTURA_GATO / 2);
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}