let clima = parseInt(prompt("Como esta el clima:\n 1.Lluvioso\n 2. Soleado\n 3.Desconocido\nEscoja una opcion:"));
let pesoTotal = parseFloat(prompt("Cual es el peso maximo permitido de la maleta"));
let pesoActual = 16;//el peso que julian ya lleva en la maleta


if (clima == "1") {
    alert("Llevar un paraguas es recomendable.");
} else if (clima == "2") {
    alert("No olvides llevar protector solar y gafas de sol.");
} else {
    alert("El clima es desconocido. Considera llevar una chaqueta ligera.");
}

if (pesoTotal < pesoActual) {
    alert("Tu equipaje esta muy pesado. Considera dejar algunos articulos.");
} else {
    alert("Tienes suficiente espacio y el peso esta dentro del limite.");
}

if (clima == "1" && pesoTotal > pesoActual) {
    alert("Ademas del paraguas, podrias llevar una chaqueta impermeable.");
} else if (clima == "2" && pesoTotal > pesoActual) {
    alert("Si tienes espacio, una camara seria genial para capturar momentos.");
}