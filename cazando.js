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
let puntaje = 0;
let tiempo = 10;
let intervalo;
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTURA_GATO, "#300");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#003");
}

function iniciarJuego() {
    if(intervalo){clearInterval(intervalo);}
    intervalo=setInterval(restarTiempo,1000);
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTURA_GATO / 2);
    reaparecerComida();
    mostrarEnSpan("tiempo",tiempo);
    mostrarEnSpan("puntos",puntaje);
    actualizarPantalla();
}

function reaparecerComida(){
comidaX = generarAleatorio(0,canvas.width - ANCHO_COMIDA);
comidaY = generarAleatorio(0,canvas.height - ALTO_COMIDA);
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva (){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    gatoX= gatoX -10;
    actualizarPantalla();
}

function moverDerecha(){
    gatoX= gatoX +10;
    actualizarPantalla();
}

function moverArriba(){
    gatoY= gatoY -10;
    actualizarPantalla();
}

function moverAbajo(){
    gatoY= gatoY +10;
    actualizarPantalla();
}

function detectarColision (){
    if(gatoX + ANCHO_GATO>comidaX && 
        gatoX<comidaX + ANCHO_COMIDA &&
        gatoY + ALTURA_GATO>comidaY && 
        gatoY<comidaY + ALTO_COMIDA
    ){
    //alert("ATRAPADO!!");
    puntaje = puntaje +1;
    mostrarEnSpan("puntos",puntaje);
    if(puntaje==6){clearInterval(intervalo);
        alert("!GANADOR!");}
    reaparecerComida();
    actualizarPantalla();
    }
}

function restarTiempo(){
tiempo = tiempo -1;
mostrarEnSpan("tiempo",tiempo);

    if(tiempo<=0){clearInterval(intervalo);
        alert("GAME OVER");}
}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

