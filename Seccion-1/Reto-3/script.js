let presupuestoInicial = parseFloat(prompt("Ingrese su presupesto inicial:" ));
let costoViaje = parseFloat(prompt("Ingrese el costo total estimado del viaje:"));
let articulosElegidos = [];

while (true) {

    let nombreArticulo = prompt("Ingrese el nombre del Articulo que quiere llevar:");
    let precioArticulo = parseFloat(prompt("Ingrese el precio del artículo:"));

    if (!isNaN(precioArticulo)) {
        if(presupuestoInicial - costoViaje >= precioArticulo) {
            articulosElegidos.push(
                {nombre: nombreArticulo, precio: precioArticulo}
            );

        }  else {
            console.log("El precio del artículo excede su presupuesto restante. Por favor, elija otro artículo.");
        }
    } else {
        console.log("Por favor, ingrese un precio válido para el artículo.");
    }
    let respuesta = confirm("¿Desea agregar otro artículo?");
    if (respuesta == false){
        break;
    }
    
}
console.log("Lista de artículos elegidos:");
articulosElegidos.forEach(articulo => {
    console.log(`- ${articulo.nombre}: ${articulo.precio}`);
});


// Calculo el presupuesto restante
let presupuestoRestanteDespuesCompras = presupuestoInicial - costoViaje - articulosElegidos.reduce((total, articulo) => total + articulo.precio, 0);

console.log(`Presupuesto restante después de comprar los artículos: ${presupuestoRestanteDespuesCompras.toFixed(2)}`); //formatea un numero flotante a la cantidad de numeros deseada

// posibilidad de artículo extra
if (presupuestoRestanteDespuesCompras >= 0) {
    console.log("Te queda algo de presupuesto");
} else {
    console.log("Te quedaste sin presupuesto, no puedes comprar nada extra");
}