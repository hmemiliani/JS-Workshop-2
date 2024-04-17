let presupuestoInicial = parseFloat(prompt("Ingrese su presupesto inicial:" ));
let costoViaje = parseFloat(prompt("Ingrese el costo total estimado del viaje:"));
let articulosElegidos = [];

while (true) {

    let nombreArticulo = prompt("Ingrese el nombre del Articulo que quiere llevar:");
    let precioArticulo = parseFloat(prompt("Ingrese el precio del articulo:"));

    if (!isNaN(precioArticulo)) {
        if(presupuestoInicial - costoViaje >= precioArticulo) {
            articulosElegidos.push(
                {nombre: nombreArticulo, precio: precioArticulo}
            );

        }  else {
            console.log("El precio del articulo excede su presupuesto restante. Por favor, elija otro articulo.");
        }
    } else {
        console.log("Por favor, ingrese un precio valido para el articulo.");
    }
    let respuesta = confirm("¿Desea agregar otro articulo?");
    if (respuesta == false){
        break;
    }
    
}
console.log("Lista de articulos elegidos:");
articulosElegidos.forEach(articulo => {
    console.log(`- ${articulo.nombre}: ${articulo.precio}`);
});


// Calculo el presupuesto restante
let presupuestoRestanteDespuesCompras = presupuestoInicial - costoViaje - articulosElegidos.reduce((total, articulo) => total + articulo.precio, 0);

console.log(`Presupuesto restante despues de comprar los articulos: ${presupuestoRestanteDespuesCompras.toFixed(2)}`); //formatea un numero flotante a la cantidad de numeros deseada

// posibilidad de articulo extra
if (presupuestoRestanteDespuesCompras >= 0) {
    console.log("Te queda algo de presupuesto");
} else {
    console.log("Te quedaste sin presupuesto, no puedes comprar nada extra");
}