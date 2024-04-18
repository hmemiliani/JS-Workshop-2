

const destino = prompt("A donde quiere viajar? Digite el destino: ");
let cantidadDias = parseInt(prompt("Cuantos dias te vas de viaje: "));
let presupuesto = parseInt(prompt("Por favor, ingresa tu presupuesto para el viaje en USD:"));

const costoDiario = 50; // Costo diario estimado y definido
const costoTotal = cantidadDias * costoDiario;

if (presupuesto >= costoTotal) {
    alert("¡Tienes suficiente dinero para el viaje!!!!!!!!!!!!!");
} else {
    alert("El presupuesto actual no te alcanza.");
    const ajustePresupuesto = costoTotal - presupuesto;
    alert(`Amistad, no te alcanza. Necesitas por lo menos ${ajustePresupuesto} USD para este viaje o considerar quedarte menos tiempo.`);
}
