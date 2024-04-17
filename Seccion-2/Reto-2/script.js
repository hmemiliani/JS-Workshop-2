let compras = [];
let saldoActual = 0 ;
let ahorro = 0;


alert("Bienvenido a tu Calculadora de presupuesto");
let presupuesto = parseFloat(prompt("Primero, cual es tu presupuesto de hoy:"));
saldoActual = presupuesto
while (true) {
    let menu = prompt("\n 1. Agregar una compra \n 2. Saldo Actual \n 3. Ahorro\n 4. Salir\n\n Digite el numero de la opcion:");

    if(menu == "4"){
        break;
    }

    if(menu == "1"){
        let nombreA = prompt("Ingrese el nombre del Articulo que quiere Comprar:");
        let precioA = parseFloat(prompt("Ingrese el precio del articulo:"));

        if(saldoActual < precioA){
            alert("No te alcansa para este acticulo.")
        } else {
            compras.push(
                {nombre: nombreA, precio: precioA}
            );
            saldoActual = saldoActual - compras.precio
            
            alert("Agregado con Exito");
        }

    
    }
    if(menu == "2"){
        compras.forEach(compras => {
            alert(`- ${compras.nombre}: ${compras.precio}`);
        });

        alert(`\n Saldo inicial ${presupuesto} \n Saldo Actual ${saldoActual}`);

    }
    if(menu == "3"){
        while (true){
            ahorro = parseFloat(prompt("Cuanto desea ahorrar:"));
            if(ahorro <= saldoActual){
                saldoActual=saldoActual-ahorro;
                alert("Ahorro reducido del presupuesto");
                break;
            }
            if(ahorro > saldoActual){
                alert("No tienes suficiente como para ahorrar esa cantidad");
                alert(`Su presupuesto es de ${saldoActual}`);
            }
            break;

        }
    }
}


