alert("Bienvenidos a Del Bajon, Si no desea pedir o desea terminar la operacion ingrese 0");
let seleccionarBurguer = Number(prompt("1-Tripton $1400 2-Campito $1250 3-Chesse $1500"));
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) =>{
    return cant * precio
}



while(seleccionarBurguer != 0){
    switch (seleccionarBurguer){
        case 1:
            seleccionarCantidad = prompt("La hamburguesa seleccionada es Tripton, indique la cantidad")
           total += cantidad(seleccionarCantidad , 1400)
            
            break;

        case 2:
            seleccionarCantidad = prompt("La hamburguesa seleccionada es Campito, indique la cantidad")
            total +=  cantidad(seleccionarCantidad , 1250)

            break;
        case 3:
            seleccionarCantidad = prompt("La hamburguesa  seleccionada es Chesse, indique la cantidad")
            total += cantidad(seleccionarCantidad , 1500)
            break;
            default:
                break;
    }
    seleccionarBurguer = Number(prompt("1-Tripton $1400 2-Campito $1250 3-Chesse $1500"));
}


alert("El total de su pedido es: " + total);


const envio = () => {
    if (total >= 2500){
        alert("El envio es gratis")
    }
    else{
        total += 250
        alert("El costo del envio es de 250 el total seria: " + total);
    }
}

envio();

const metodoDePago = () => {
    let metodo = prompt("Ingrese el metodo de pago, tarjeta o efectivo" )
    if (metodo == "tarjeta"){
        total *= 1.1
        console.log("Abonando con tarjeta tenes un recargo del 1.1%, el total es: " + total);

    }
    else(metodo == "efectivo")
    total -= 200
    alert("Abonando en efectivo tenes un descuento de 200, el total es: " + total)
}

metodoDePago();

let importeAbonado = parseInt(prompt("Ingrese con cuanto abona"));
if ( importeAbonado >= total){
alert("Su vuelto es de " + (importeAbonado - total));
}
else if (importeAbonado < total){
    alert("Lo siento no cuenta con el dinero suficiente");
}

alert("Muchas gracias por su compra");





