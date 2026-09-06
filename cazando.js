let canvas = document.getElementById('areaJuego');
let ctx = canvas.getContext("2d");
const ALTURA_GATO = 40;
const ANCHO_GATO = 30;
let gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
let gatoY = (canvas.height / 2) - (ALTURA_GATO / 2);
    
function graficarGato() {
    ctx.fillStyle = "#300";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTURA_GATO);
}
