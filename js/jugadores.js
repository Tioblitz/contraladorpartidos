// Definiendo funciones
let listadoJugadores;
let listaEquipo1;
let listaEquipo2;

if (sessionStorage.getItem("listadoJugadores")) {
    listaJugadores = JSON.parse((sessionStorage.getItem("listadoJugadores")));
    let nombreEquipo1 = document.querySelector("#primerEquipo").innerHTML;
    listaEquipo1 = (listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo1)) ? listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo1) : [];
    let nombreEquipo2 = document.querySelector("#segundoEquipo").innerHTML;
    listaEquipo2 = (listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo2)) ? listaJugadores.filter((jugador) => (jugador.equipo) === nombreEquipo2) : [];
}
else {
    listaEquipo1 = [];
    listaEquipo2 = [];

}

(function () {
    let espacioEquipo1 = document.querySelector("#jugadoresEquipo1");
    let espacioEquipo2 = document.querySelector("#jugadoresEquipo2");
    if (listaEquipo1) {
        listaEquipo1.forEach((jugador) => {
            espacioEquipo1.innerHTML += `<li> [${jugador.serie}] ${jugador.nombre} ${jugador.apellido}</li>`;
        })
    }
    else {
        espacioEquipo1.innerHTML = `
        <ul>No hay jugadores inscritos para el partido</ul>
        `
    };
    if (listaEquipo2) {
        listaEquipo2.forEach((jugador) => {
            espacioEquipo2.innerHTML += `<li> [${jugador.serie}] ${jugador.nombre} ${jugador.apellido}</li>`;
        })
    }
    else {
        espacioEquipo2.innerHTML = `
        <ul>No hay jugadores inscritos para el partido</ul>
        `
    }
})()