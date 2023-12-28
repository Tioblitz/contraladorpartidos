// Funciones para otras funciones
function agregarGoles(equipo) {
    if (equipo == 1) {
        let resultado = document.querySelector("#score-1");
        resultado.innerHTML++
    }
    else {
        let resultado = document.querySelector("#score-2");
        resultado.innerHTML++
    }
}

function gol1() {
    return agregarGoles(1);
}
function gol2() {
    return agregarGoles(2);
}

function iniciarPartido() {
    // Modificamos el HTML para nuestro controlador de partidos
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = `
    <h2 id="cancha">Cancha 1</h2>
    <h3 id="division">Senior</h3>
    <h4> <span id="equipo1"> Caleuche </span> <span id="score-1"> 0 </span> - <span id="score-2"> 0 </span>  <span id="equipo2"> Bocheros </span></h3>
    <div>
        <p id="reloj"> 00:00</p>
        <button class="boton-iniciar" id="botonGoles-1">Agregar gol</buttom>
        <button class="boton-iniciar" id="botonGoles-2">Agregar gol</buttom>
    </div>
    <div class="goles">
        <div id="goles-equipo1">
        </div>
        <div id="goles-equipo2">
        </div>
    </div>
    `

    let botonGoles1 = document.querySelector("#botonGoles-1");
    botonGoles1.addEventListener("click", gol1);
    let botonGoles2 = document.querySelector("#botonGoles-2");
    botonGoles2.addEventListener("click", gol2);

    // Reloj partido
    let inicioTiempoPartido = new Date().getTime(); 
    let reloj = setInterval(function Reloj() {
        let tiempoActualPartido = new Date().getTime();
        let tiempoPartido = tiempoActualPartido - inicioTiempoPartido;
        let minutos = Math.floor((tiempoPartido % (1000 * 60 * 60)) / (1000 * 60));
        minutos += 40;
        minutos = (minutos < 10) ? "0" + minutos : minutos;
        let segundos = Math.floor((tiempoPartido % (1000 * 60)) / 1000);
        segundos = (segundos < 10) ? "0" + segundos : segundos;
        document.querySelector("#reloj").innerHTML = minutos + ":" + segundos;

        if (minutos == 40) {
            clearInterval(reloj);
            document.querySelector("#reloj").innerHTML = "40:00";
            let cierre = document.querySelector("#contenedor div");
            cierre.innerHTML = `
            <p id="reloj">40:00</p>
            <button class="boton-cancelar" id="terminarPartido">Terminar partido</button>
            `
            let botonTerminarPartido = document.querySelector("#terminarPartido");
            botonTerminarPartido.addEventListener("click", terminarPartido)
        }
    }, 1000)

    // Agregamos event listeners

}

function terminarPartido() {
    let equipo1 = document.querySelector("#equipo1").innerHTML;
    let equipo2 = document.querySelector("#equipo2").innerHTML;
    let goles1 = document.querySelector("#score-1").innerHTML;
    let goles2 = document.querySelector("#score-2").innerHTML;
    let division = document.querySelector("#division").innerHTML;
    let cancha = document.querySelector("#cancha").innerHTML;
    resultado = {
        primerEquipo: equipo1,
        segundoEquipo: equipo2,
        golesEquipo1: goles1,
        golesEquipo2: goles2,
        Division: division,
        Cancha: cancha
    }
    resultado = JSON.stringify(resultado);
    localStorage.setItem("Partido 1", resultado);

    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = `
    <div class="alert alert-success" role="alert">
        Resultado subido a Resultados!
    </div>
    <h2>Cancha 1</h2>
    <h3>Senior</h3>
    <h4>Caleuche 0 - 0 Bocheros</h3>
    <div>
        <button class="boton-iniciar" id="boton-iniciarPartido">Iniciar partido</button>
        <button class="boton" disabled>Agregar Jugador</button>
        <button class="boton-cancelar" disabled>Cancelar partido</button>
    </div>
    `
    
    
}

function cancelarPartido() {
    
}

let botonIniciarPartido = document.querySelector("#boton-iniciarPartido");
botonIniciarPartido.addEventListener("click", iniciarPartido);