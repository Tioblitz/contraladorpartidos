let lista = [1234567, 7654321, 13579246];

function comprobar() {
    let rut = Number(prompt("Ingrese rut del jugador (sin puntos ni digito verificador):"));
    
    if (rut == 0) {
        return;
    }
    else if (isNaN(rut)) {
        alert("El dato ingresado no es un número.");
        return;
    }
    for (let i = 0; i < lista.length; i++) {
        if (rut == lista[i]) {
            alert("Jugador rut " + rut + " existe en nuestra base de datos.");
            return;
        }
        else {
            continue;
        }
    }
    
    alert("Dato no encontrado.");
}

function agregar() {
    let dato = Number(prompt("Ingrese un rut"));
    if (isNaN(dato)) {
        alert("El dato ingresado no es un número.");
        return;
    }
    else if ((dato.length < 7 || dato.length > 8 )) {
        alert("El dato ingresado (" + dato + ") no es un rut válido.");
        return;
    }
    else {
        for (let i = 0; i < lista.length; i++) {
            if (dato == lista[i]) {
                alert("Este dato ya está ingresado en nuestra base de datos.");
                return;
            }
            else {
                continue;
            }
        }

        lista.push(dato);
        alert("Nuevo dato agregado.");
    }
}