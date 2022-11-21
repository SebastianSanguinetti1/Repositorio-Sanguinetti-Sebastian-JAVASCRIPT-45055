//MENU OBJETO ARRAY//


let menu = [
    {id:1, nombre: "Campito",cantidad: 1,desc:"Carne, Queso Cheddar, Jamon, Huevo", precio: 1400, img:'./../assets/PNG/campito.png'},
    {id:2, nombre: "Tripton",cantidad: 1,desc: "Carne,Queso Cheddar, Panceta, Salsa 1/4 de Libra" , precio: 1250, img:'./../assets/PNG/TRIPTON.png'},
    {id:3, nombre: "Blue",cantidad: 1,desc:"Carne, Queso Roquefort, Queso Dambo, Aros de Cebolla, Tomate" , precio: 1300, img:'./../assets/PNG/blue.png'},
    {id:4, nombre: "Chesse Chesse",cantidad: 1,desc:"Carne, Queso Cheddar, Queso Dambo, Panceta, Lechuga y Tomate" , precio: 1200, img:'./../assets/PNG/chesse.png'},
    {id:5, nombre: "BBQ Mix",cantidad: 1,desc: "Carne,Barbacoa,Panceta, Queso Cheddar y Queso Dambo", precio: 1120, img:'./../assets/PNG/bbqmix.png'},
    {id:6, nombre: "BBQ Smoke",cantidad: 1,desc:"Carne,Barbacoa,Panceta, Queso Dambo,Lechuga y Tomate" , precio: 1450, img:'./../assets/PNG/bbqsmoke.png'},
    {id:7, nombre: "Classica",cantidad: 1,desc:"Carne,Queso Cheddar,Panceta,Huevo,Lechuga y Tomate" , precio: 1100, img:'./../assets/PNG/CLASSICA.png'},
    {id:8, nombre: "Dorito's",cantidad: 1,desc:"Carne,Queso Cheddar,Panceta,Doritos,Salsa Cuarto de Libra" , precio: 1600, img:'./../assets/PNG/DORITOS.png'},
    {id:9, nombre: "Jessie Pinkman",cantidad: 1,desc:"Carne,Queso Cheddar,Salsa Alioli,Cebolla,Lechuga y Tomate" , precio: 1900, img:'./../assets/PNG/jessiepigman.png'},
    {id:10, nombre: "Oli",cantidad: 1,desc:"Carne,Salsa Alioli,Queso Cheddar,Panceta" , precio: 1420, img:'./../assets/PNG/OLI.png'},
    {id:11, nombre: "Suprema",cantidad: 1,desc:"Carne,Queso Cheddar,Panceta,Cebolla Caramelizada" , precio: 1270, img:'./../assets/PNG/suprema.png'},
    {id:12, nombre: "TapaBoca",cantidad: 1,desc:"Carne,Queso Muzzarella,Panceta" , precio: 1380, img:'./../assets/PNG/TAPABOCA.png'},
    ];



let carrito = []

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        renderCarrito();

    }
})


//MENU OBJETO ARRAY//






// MODAL ///

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', ()=>{
    // contenedorModal.classList.toggle('modal-active')
    botonCerrar.click()
})

modalCarrito.addEventListener('click', (event)=>{
    // console.log(event)
    event.stopPropagation()
})




// MODAL ///


//DOOM//
let contedendorMenu = document.querySelector("#contenedor-menu")
const contenedorCarrito = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const contadorPrecioTotal = document.querySelector('#precioTotal')
const eliminarCarrito = document.querySelector('.boton-eliminar')
const botonVaciar = document.getElementById('vaciar-carrito')







menu.forEach((productos) => {
const div = document.createElement('div')

div.classname = 'row'

div.innerHTML = `
             <img src= ${productos.img} class="card-img-top alt="">
             <h2 class="card-title">${productos.nombre}</h2>
             <p class="card-text">${productos.desc}</p> 
             <p class="card-text">$${productos.precio}</p></div>`


const button = document.createElement("button")
button.className = "boton-agregar"
button.innerHTML = `Agregar <i class="fas fa-shopping-cart"></i>`

button.addEventListener('click', () => {
    agregarAlCarrito(productos.id)
})

div.append(button)

contedendorMenu.append(div)
})

const agregarAlCarrito = (id) => {
const existe = carrito.some(productos => productos.id === id)

if(existe){
    const productos = carrito.map(productos => {
        if(productos.id === id){
            productos.cantidad++
        }
    })
} else {
    const producto = menu.find( (item) => item.id === id)
    carrito.push(producto)

    console.log(carrito)
    
}
renderCarrito()
}

const eliminarProducto = (id) => {
    const item = carrito.find((productos) => productos.id === id)

const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    renderCarrito();
}


botonVaciar.addEventListener('click' , () =>{
carrito.length = 0
renderCarrito();
})


const renderCarrito = () => {
    contenedorCarrito.innerHTML = ``

    carrito.forEach((productos) =>{
    const div = document.createElement('div')
    div.className =  "productoEnCarrito"
    div.innerHTML = `
    <p>Hamburguesa: ${productos.nombre}</p>
    <p>Precio: $${productos.precio}</p>
    <p>Cantidad:${productos.cantidad}</p>
    `
    const buttonEliminar = document.createElement('button')
    buttonEliminar.className = "boton-eliminar"
    buttonEliminar.innerHTML = `<i class="fas fa-trash-alt"></i>`

    buttonEliminar.addEventListener('click',() =>{
        eliminarProducto(productos.id)
    })

    div.append(buttonEliminar)   
    contenedorCarrito.append(div)

    localStorage.setItem('carrito', JSON.stringify(carrito))
    })


    renderCantidadCarrito();
    renderTotalCarrito();
}





const renderCantidadCarrito = () => {
 contadorCarrito.innerHTML = carrito.length
}

const renderTotalCarrito = () =>{
    let total = 0

    carrito.forEach((productos) => {
        total += productos.precio
    })
    contadorPrecioTotal.innerHTML = total
}


















































































/* 
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

 */

