(function () {
    let resultado = JSON.parse(localStorage.getItem("Partido 1"));
    if (resultado) {
        let equipo1 = resultado.primerEquipo;
        let equipo2 = resultado.segundoEquipo;
        let goles1 = resultado.golesEquipo1;
        let goles2 = resultado.golesEquipo2;
        let division = resultado.Division;
        let cancha = resultado.Cancha;
        document.querySelector("#resultados").innerHTML = `
            <h2> ${equipo1} ${goles1} - ${goles2} ${equipo2} </h2>
            <h6> División ${division} - ${cancha} </h3>
        `
        }
    else {
        document.querySelector("#resultados").innerHTML = `
            <p>No se encontraron partidos.</p>
        `
    }
})();
