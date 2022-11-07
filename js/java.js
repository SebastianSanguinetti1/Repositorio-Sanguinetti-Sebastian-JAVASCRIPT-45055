const menu = [
{nombre: "Campito", precio: 1400},
{nombre: "Tripton", precio: 1250},
{nombre: "Blue", precio: 1300},
{nombre: "Chesse Chesse", precio: 1200},
];

let carrito = []

let seleccion = prompt("Bienvenidos a Del Bajon, desea hacer un pedido (si o no)")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("Bienvenidos a Del Bajon, desea hacer un pedido?")
}

if(seleccion == "si"){
    alert("a continuacion te mostraremos nuestra carta")
    let nuestraCarta = menu.map((menu) => menu.nombre + " " + "$" + menu.precio )
    alert(nuestraCarta.join(" - "))

}else if (seleccion == "no"){
    alert("Hasta luego")
}

while (seleccion != "no"){
    let menu = prompt("Hace tu pedido " + " Burguers disponibles: Campito $1400 - Tripton $1250 - Blue $1300 - Chesse Chesse $1200 (Ingrese el nombre de la hamburguesa en minuscula)"  )
    let precio = 0


if ( menu == "campito" || menu == "tripton" ||  menu == "blue"  || menu == "chesse")
{ switch(menu){
    case "campito":
        precio = 1400
        break;
    case "tripton":
        precio = 1250
        break;
    case "blue":
        precio = 1300
        break;
    case "chesse":
        precio = 1200
        break;
        default:
        break;
    }


    let unidades = parseInt(prompt("Selecciona la cantidad de Hamburguesas"))
      carrito.push({menu, precio, unidades})
      console.log(carrito)
    } else {
        alert("No tenemos esa Burguer disponible")
    }

    seleccion = prompt("Desea agregar otro producto? (si o no)")
    while (seleccion === "no"){
        alert("A continuacion le diremos el total (en consola se mostrara el detalle de la compra)")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.menu}, unidades: ${carritoFinal.unidades},Total del producto ${carritoFinal.unidades * carritoFinal.precio}`)
})
break;
    }

}

let total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert("el total de su pedido es " + total);

let importeAbonado = parseInt(prompt("Ingrese con cuanto abona"));
if ( importeAbonado >= total){
alert("Su vuelto es de " + (importeAbonado - total) + " Muchas Gracias por su compra");
}
else if (importeAbonado < total){
    alert("Lo siento no cuenta con el dinero suficiente");
}


