function mostrarJugadores() {
    // let padre = document.querySelector(".lista-jugadores");
    Jugadores.forEach((jugador) => {
        /* padre.innerHTML += `
            <li>${jugador.nombre} ${jugador.apellido} - Equipo: ${jugador.equipo} - Serie: ${jugador.serie}</li>
        `
         */
        console.log(`[${jugador.serie}][${jugador.equipo}] ${jugador.nombre} ${jugador.apellido}`)
    });
}

function Filtrar() {
    let nombre = prompt("Ingrese un nombre:");
    let apellido = prompt("Ingrese un apellido:");
    let equipo = prompt("Ingrese equipo (Caleuche/Bocheros):");
    let serie = prompt("Ingrese serie (Junior/Senior):");

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

    if (resultado.length > 0) {
        resultado.forEach((persona) => 
            console.log(`[${persona.serie}][${persona.equipo}] ${persona.nombre} ${persona.apellido}`)
        );
    } else {
        console.log("No se encontraron jugadores.");
    }
}

