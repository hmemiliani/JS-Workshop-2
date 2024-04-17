let presupuestoInicial = parseFloat(prompt("Ingrese su presupesto inicial:" ));
let costoViaje = parseFloat(prompt("Ingrese el costo total estimado del viaje:"));
let precioArticuloExtra = parseFloat(prompt("Ingrese el precio del artículo extra que desea comprar:"));
let presupuestoRestante = presupuestoInicial - costoViaje;
let umbral = 100; 

if (presupuestoRestante >= precioArticuloExtra + umbral) {
    console.log("Puedes comprar un artículo extra!");

    let opcionesArticulos = [
        { nombre: "Libro", precio: 20 },
        { nombre: "Cámara", precio: 200 },
        { nombre: "Botella de vino", precio: 50 }
    ];

    let opcionMasEconomica = null;
    let precioMasEconomico = presupuestoRestante;

    for (let i = 0; i < opcionesArticulos.length; i++) {
        if (opcionesArticulos[i].precio <= precioMasEconomico) {
            opcionMasEconomica = opcionesArticulos[i];
            precioMasEconomico = opcionesArticulos[i].precio;
        }
    }

    if (opcionMasEconomica) {
        console.log("La opción más económica es:", opcionMasEconomica.nombre);
    } else {
        console.log("Lo siento, no hay opciones asequibles dentro de tu presupuesto.");
    }
} else {
    console.log("Deberías reconsiderar la compra de un artículo extra para no exceder tu presupuesto.");
}
