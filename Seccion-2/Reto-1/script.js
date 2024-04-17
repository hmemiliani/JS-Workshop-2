let estadoDeAnimo = parseInt(prompt("Buenos dias pues mor, del 1 al 10 como te sientes hoy:"));
let clima = confirm("Hay buen clima?");
let job = confirm("Tienes trabajo por hacer?");

if (estadoDeAnimo <= 3 ){
    alert("Es mejor que hoy no hagas nada y te quedes descansando");
}

if (estadoDeAnimo > 3 &&  estadoDeAnimo < 6 && job==true && clima == true){
    alert("Aunque no estas al 100% el clima esta bello, ve a trabajar, te cambiara el estado de animo");
}

if (estadoDeAnimo > 3 &&  estadoDeAnimo < 6 && job==true && clima == false){
    alert("El clima no esta muy bueno, ademas de que no estas al 100%, mejor trabaja desde casa hoy");
}

if (estadoDeAnimo > 3 &&  estadoDeAnimo < 6 && job==false && clima == true){
    alert("Mejor quedate descansando, el clima esta bien, pero si no estas al 100 mejor descansar, mira que hay de nuevo en netflix");
}

if (estadoDeAnimo > 3 &&  estadoDeAnimo < 6 && job==false && clima == false){
    alert("El clima esta perfecto para no hacer nada, a dormir y ver series");
}

if (estadoDeAnimo >= 6  && job==true && clima == true){
    alert("Estas de buen animo, el clima se ve genial! ve a trabajar, hoy sera un buen dia");
}

if (estadoDeAnimo >= 6  && job==true && clima == false){
    alert("Tienes buen animo, pero el clima no ayuda, puedes intentar ir a trabajar o quedarte, tu decide, que nada dañe tu dia");
}

if (estadoDeAnimo >= 6  && job==false && clima == true){
    alert("Tienes buen animo y no hay trabajo! puedes salir a pasear o hacer algo que desees");
}

if (estadoDeAnimo >= 6  && job==false && clima == false){
    alert("es un dia perfecto para quedarse en casa descansando, pasalo bien!");
}