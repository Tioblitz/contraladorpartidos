// Función para mostrar todos los jugadores
function mostrarJugadores() {
    document.querySelector("#botonesFiltrar").innerHTML = `
    <h1>Controlador partido - Turno 1</h1>
    <div>
        <button class="boton" id="mostrarJugadores">Mostrar jugadores</button>
        <button class="boton-iniciar" id="filtrarJugadores">Filtrar jugadores</button>
    </div>
    <ul class="lista-jugadores">
    </ul>
    `;
    let botonMostrarJugadores = document.querySelector("#mostrarJugadores");
    botonMostrarJugadores.addEventListener("click", mostrarJugadores);
    // Filtrar Jugadores
    let botonFiltrarJugadores = document.querySelector("#filtrarJugadores");
    botonFiltrarJugadores.addEventListener("click", iniciarFiltrado);
    let padre = document.querySelector(".lista-jugadores");
    padre.innerHTML = "";
    Jugadores.forEach((jugador) => {
        padre.innerHTML += `<ul>[${jugador.serie}][${jugador.equipo}] ${jugador.nombre} ${jugador.apellido}</ul>`
    });
}

function iniciarFiltrado() {
    document.querySelector("#botonesFiltrar").innerHTML = `
    <h1>Controlador partido - Turno 1</h1>
    <div>
        <button class="boton" id="mostrarJugadores">Mostrar jugadores</button>
        <button class="boton-iniciar" id="filtrarJugadores">Filtrar jugadores</button>
    </div>
    <div class="row" id="inputsFiltrar">
        <div class="col">
            <input type="text" class="form-control" placeholder="Nombre" id="Nombre">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Apellido" id="Apellido">
        </div>
        <div class="col">
            <select class="form-select" id="Equipo">
                <option selected value="">Equipo...</option>
                <option value="Caleuche">Caleuche</option>
                <option value="Bocheros">Bocheros</option>
            </select>
        </div>
        <div class="col">
            <select class="form-select" id="Serie">
                <option selected value="">Serie...</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>
        </div>
    </div>
    <ul class="lista-jugadores">
    </ul>
    `;
    let botonMostrarJugadores = document.querySelector("#mostrarJugadores");
    botonMostrarJugadores.addEventListener("click", mostrarJugadores);
    // Filtrar Jugadores
    let botonFiltrarJugadores = document.querySelector("#filtrarJugadores");
    botonFiltrarJugadores.addEventListener("click", Filtrar);
}

// Función para filtrar y mostrar todos los jugadores
function Filtrar() {
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let equipo = document.getElementById("Equipo").value;
    let serie = document.getElementById("Serie").value;

    nombre = nombre ? nombre.toLowerCase() : '';
    apellido = apellido ? apellido.toLowerCase() : '';
    equipo = equipo ? equipo.toLowerCase() : '';
    serie = serie ? serie.toLowerCase() : '';

    let resultado = Jugadores.filter(jugador =>  
        (nombre === '' || jugador.nombre.toLowerCase().includes(nombre)) &&
        (apellido === '' || jugador.apellido.toLowerCase().includes(apellido)) &&
        (equipo === '' || jugador.equipo.toLowerCase() === equipo) &&
        (serie === '' || jugador.serie.toLowerCase() === serie)
    );

    let padre = document.querySelector(".lista-jugadores");
    padre.innerHTML = "";

    if (resultado.length > 0) {
        resultado.forEach((persona) => 
        padre.innerHTML += `<ul>[${persona.serie}][${persona.equipo}] ${persona.nombre} ${persona.apellido} </ul>`
        );
    } else {
        padre.innerHTML = `No se encontró jugadores.`;
    }
}


// Agregar un EventListener a nuestros botones
// Mostrar Jugadores
let botonMostrarJugadores = document.querySelector("#mostrarJugadores");
botonMostrarJugadores.addEventListener("click", mostrarJugadores);
// Filtrar Jugadores
let botonFiltrarJugadores = document.querySelector("#filtrarJugadores");
botonFiltrarJugadores.addEventListener("click", iniciarFiltrado);

// Falta harto por agregar, por si no lo entrego a tiempoooo