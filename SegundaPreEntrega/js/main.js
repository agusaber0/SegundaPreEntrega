function anunciarReserva() {
    alert("Reserva tus entradas para la avant premiere de la película'");
}


function solicitarDatosUsuario() {
    let reserva = {};

    reserva.nombreCompleto = prompt("Por favor ingresa tu nombre completo:");
    

    reserva.numeroTelefono = prompt("Por favor ingresa tu número de teléfono:");

    return reserva;
}


function seleccionarFecha() {
    let fechas = ['Viernes 16 de Agosto', 'Sábado 17 de Agosto'];
    let fechaElegida = '';

    while (fechaElegida === '') {
        let opcion = prompt("Seleccione la fecha: \n1. Viernes 16 de Agosto\n2. Sábado 17 de Agosto");
        
        if (opcion === '1') {
            fechaElegida = 'Viernes 16 de Agosto';
        } else if (opcion === '2') {
            fechaElegida = 'Sábado 17 de Agosto';
        } else {
            alert("Esa opción no es válida. Por favor elija 1 o 2.");
        }
    }

    return fechaElegida;
}


function solicitarCantidadEntradas() {
    let cantidad = 0;
    while (cantidad <= 0) {
        cantidad = parseInt(prompt("Ingresa la cantidad de entradas:"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor ingresa un número válido de entradas.");
            cantidad = 0;
        }
    }
    return cantidad;
}


function seleccionarUbicacion() {
    let ubicaciones = ['Platea Baja', 'Platea Alta', 'Palcos'];
    let ubicacionElegida = '';

    while (ubicacionElegida === '') {
        let opcion = prompt("Selecciona la ubicación: \n 1. Platea Baja\n 2. Platea Alta\n 3. Palcos");
        
        if (opcion === '1') {
            ubicacionElegida = 'Platea Baja';
        } else if (opcion === '2') {
            ubicacionElegida = 'Platea Alta';
        } else if (opcion === '3') {
            ubicacionElegida = 'Palcos';
        } else {
            alert("Esa opción no es válida. Por favor, elija 1, 2 o 3.");
        }
    }

    return ubicacionElegida;
}


function validarCantidadEntradas(ubicacion, cantidad) {
    if (ubicacion === 'Palcos') {
        alert('Por favor comunicate al número 0096113379790 para reservar entradas en palcos.');
        return false;
    } else if (ubicacion === 'Platea Baja' || ubicacion === 'Platea Alta') {
        if (cantidad < 1 || cantidad > 6) {
            alert('Debes seleccionar entre 1 y 6 entradas.');
            return false;
        }
    }
    return true;
}


function confirmarReserva(reserva) {
    let confirmacion = '';
    while (confirmacion !== 'si' && confirmacion !== 'no') {
        alert(`Por favor confirma los siguientes datos de tu reserva:\nNombre Completo: ${reserva.nombreCompleto}\nNúmero de Teléfono: ${reserva.numeroTelefono}\nFecha: ${reserva.fecha}\nCantidad de Entradas: ${reserva.cantidadEntradas}\nUbicación: ${reserva.ubicacion}`);
        
        confirmacion = prompt('Son correctos estos datos? (si/no):').toLowerCase();
        
        if (confirmacion !== 'si' && confirmacion !== 'no') {
            alert('Responda con "si" o "no" para procesar su solicitud.');
        }
    }
    return confirmacion === 'si';
}


function reservarEntradas() {
    anunciarReserva();
    
    let reserva = solicitarDatosUsuario();
    reserva.fecha = seleccionarFecha();
    reserva.cantidadEntradas = solicitarCantidadEntradas();
    reserva.ubicacion = seleccionarUbicacion();

    if (validarCantidadEntradas(reserva.ubicacion, reserva.cantidadEntradas)) {
        if (confirmarReserva(reserva)) {
            alert('El equipo de producción te agradece por reservar tus entradas \n Ya están disponibles para retirar en la boletería del cine\n Direccion: Calle A esq. B s/n \n Lunes a Domingos de 15 a 23 horas.');
        } else {
            alert('Reserva cancelada. Por favor comience de nuevo.');
        }
}
}

reservarEntradas();

