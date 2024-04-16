
souvenirs =[];
while (true){
    let souvenirsName = prompt("Ingrese el nombre del Souvenir: ");
    let souvenirsPrice = prompt("Ingrese el precio del Souvenir");
    let dispo = confirm("El Souvenir esta disponible?: ");
    if(dispo==true){
        disponible="Disponible";
    } else {
        disponible="NO Disponible";
    }

    //Agregar al arreglo
    souvenirs.push(souvenirsName)
    souvenirs.push(souvenirsPrice)
    souvenirs.push(disponible)


    //Imprimir los tipos
    console.log(souvenirsName, typeof souvenirsName);
    console.log(souvenirsPrice, typeof souvenirsPrice);
    console.log(disponible, typeof dispo);

    //Salir
    let moresouvenirs = confirm("quiere agregar otro souvenir? ");
    if(moresouvenirs==false){
        for (let index = 0; index < souvenirs.length; index++) {
            console.log(souvenirs[index]);
        }
        break;
    }

}