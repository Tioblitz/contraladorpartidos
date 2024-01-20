// Definiendo funciones
let listadoJugadores;
let listaEquipo1;
let listaEquipo2;

// Recoger datos del sessionStorage
if (sessionStorage.getItem("listadoJugadores")) {
    listaJugadores = JSON.parse((sessionStorage.getItem("listadoJugadores")));
    let nombreEquipo1 = document.querySelector("#equipo1").innerHTML;
    listaEquipo1 = (listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo1)) ? listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo1) : [];
    let nombreEquipo2 = document.querySelector("#equipo2").innerHTML;
    listaEquipo2 = (listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo2)) ? listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo2) : [];
}
else {
    listaEquipo1 = [];
    listaEquipo2 = [];

}

// Funcion para agregar goles
function agregarGoles(equipo) {
    if (equipo == 1) {
        let resultado = document.querySelector("#score-1");
        let tiempo = document.querySelector("#reloj").innerHTML;
        let listaNombres1 = listaEquipo1.map(jugador => (`${jugador.id} ${jugador.nombre} ${jugador.apellido}`));;
        let idJugador;
        let player;
        // Lista de jugadores con Sweet Alert 2 
        let { value: fruit } = Swal.fire({
            title: 'Selecciona un jugador',
            input: 'select',
            inputOptions: listaNombres1,
            inputPlaceholder: 'Selecciona un jugador',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                // Validar que se haya seleccionado un jugador
                return new Promise((resolve) => {
                    if (value !== '') {
                        resolve();
                    } else {
                        resolve('Debes seleccionar un jugador');
                    }
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const jugadorSeleccionado = result.value;
                idJugador = listaNombres1[jugadorSeleccionado].split(" ")[0];
                player = (listaJugadores.find((jugador) => parseInt(jugador.id) === parseInt(idJugador))) ? listaJugadores.find((jugador) => parseInt(jugador.id) === parseInt(idJugador)) : console.log("Jugador no encontrado");
                tiempoCortado = tiempo.split(":")[0]
                let goles1 = document.querySelector("#goles-equipo1");
                resultado.innerHTML++;
                goles1.innerHTML += `
                <ul id="equipo1-gol${resultado}">${(player.nombre).slice(0,1)}. ${player.apellido} ${tiempoCortado}' </ul>
                `;

            }
        });

    }
    else {
        
        let resultado = document.querySelector("#score-2");
        let tiempo = document.querySelector("#reloj").innerHTML;
        let listaNombres2 = listaEquipo2.map(jugador => (`${jugador.id} ${jugador.nombre} ${jugador.apellido}`));;
        let idJugador;
        let player;
        let { value: fruit } = Swal.fire({
            title: 'Selecciona un jugador',
            input: 'select',
            inputOptions: listaNombres2,
            inputPlaceholder: 'Selecciona un jugador',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                // Validar que se haya seleccionado un jugador
                return new Promise((resolve) => {
                    if (value !== '') {
                        resolve();
                    } else {
                        resolve('Debes seleccionar un jugador');
                    }
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const jugadorSeleccionado = result.value;
                idJugador = listaNombres2[jugadorSeleccionado].split(" ")[0];
                player = (listaJugadores.find((jugador) => parseInt(jugador.id) === parseInt(idJugador))) ? listaJugadores.find((jugador) => parseInt(jugador.id) === parseInt(idJugador)) : console.log("Jugador no encontrado");
                tiempoCortado = tiempo.split(":")[0]
                let goles2 = document.querySelector("#goles-equipo2");
                resultado.innerHTML++;
                goles2.innerHTML += `
                <ul id="equipo2-gol${resultado}">${(player.nombre).slice(0,1)}. ${player.apellido} ${tiempoCortado}' </ul>
                `;

            }
        });

    
    }
}

// Función para iniciar partido
function iniciarPartido() {
    // Modificamos el HTML para nuestro controlador de partidos
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = `
    <h2><span id="equipo1"> Caleuche </span> <span id="score-1"> 0 </span> - <span id="score-2"> 0 </span>  <span id="equipo2"> Bocheros </span></h2>
    <h3 id="division">Senior</h3>
    <h4 id="cancha">Cancha 1</h4>
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
    botonGoles1.addEventListener("click", () => {
        return agregarGoles(1);
    });
    let botonGoles2 = document.querySelector("#botonGoles-2");
    botonGoles2.addEventListener("click", () => {
        return agregarGoles(2);
    });

    // Reloj partido
    let inicioTiempoPartido = new Date().getTime();
    let reloj = setInterval(function Reloj() {
        let tiempoActualPartido = new Date().getTime();
        let tiempoPartido = tiempoActualPartido - inicioTiempoPartido;
        let minutos = Math.floor((tiempoPartido % (1000 * 60 * 60)) / (1000 * 60));
        minutos += 39;
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

}

// Función para terminar el partido
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
    // Subimos nuestro resultado al localStorage
    resultado = JSON.stringify(resultado);
    localStorage.setItem("Partido 1", resultado);

    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = `
    <h2>Caleuche 0 - 0 Bocheros</h2>
    <h3>Senior</h3>
    <h4>Cancha 1</h3>
    <div>
        <button class="boton-iniciar" id="boton-iniciarPartido">Iniciar partido</button>
        <button class="boton" disabled>Agregar Jugador</button>
        <button class="boton-cancelar" disabled>Cancelar partido</button>
    </div>
    `;
    // Alerta de Sweet Alert 2
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Resultado subido a Resultados!"
    });
    let botonIniciarPartido = document.querySelector("#boton-iniciarPartido");
    botonIniciarPartido.addEventListener("click", iniciarPartido);

}

// Agregamos los eventos para el botón de "Iniciar Partido"
let botonIniciarPartido = document.querySelector("#boton-iniciarPartido");
botonIniciarPartido.addEventListener("click", iniciarPartido);