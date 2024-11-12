// console.log(
//     Math.min(5, 4, 7, 8, 1, 2, -Infinity),
// )

// console.log(
//     Math.max(3, 5, 8, 9, 1, 2, Infinity),
// )

/**
 * REDONDEO
 */

// console.log(Math.ceil(3.999999))
// console.log(Math.floor(3.0000001))

// console.log(Math.round(3.3))

/**
 * ABS
 */

// console.log(
//     Math.abs(-500)
// )

/**
 * RANDOM
 */

// console.log(
//     Math.round(
//         Math.random() * 30 + 20
//         // Math.random() * 10
//     )
// )

/**
 * DATE
 */

// const fechaHoy = new Date();
// const fechaAyer = new Date(
//     2024, 10, 11, 10, 30, 20
// );

// console.log(fechaHoy);
// console.log(fechaAyer);

// console.log(fechaAyer.toDateString())
// console.log(fechaAyer.toLocaleString())

// console.log(
//     fechaAyer.getDate() + "_" + parseInt(fechaAyer.getMonth() + 1) + "_" + fechaAyer.getFullYear()
// )

// const diferencia = Math.abs(fechaHoy - fechaAyer);
//
// const milisegundosPorDia = 86400000;
//
// const diferenciaEnDias = Math.floor(
//     diferencia / milisegundosPorDia
// );
//
// console.log(diferenciaEnDias);

/**
 * SIMULAR DE PRE ENTREGA 2
 */

// Objetos
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerSubtotal() {
        return this.precio * this.cantidad;
    }
}

// Funciones
function obtenerProductoPorNombre() {
    let nombreProducto = prompt("Ingrese el nombre del producto que quiere modificar");

    let productoEncontrado = productos.find( (el) => {
        return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
    });

    // Mientras el find no encuentre nada y devuelva undefined quedamos encerrados en el while
    while(productoEncontrado === undefined) {
        alert("PRODUCTO NO EXISTE");

        nombreProducto = prompt("Ingrese el nombre del producto que quiere modificar");

        productoEncontrado = productos.find( (el) => {
            return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
        });
    }

    return productoEncontrado;
}

function modificarProducto() {
    const productoEncontrado = obtenerProductoPorNombre();

    const nuevoPrecio = parseFloat(prompt("Ingrese nuevo precio"));
    const nuevaCantidad = parseInt(prompt("Ingrese nueva cantidad"));

    productoEncontrado.precio = nuevoPrecio;
    productoEncontrado.cantidad = nuevaCantidad;

    alert("PRODUCTO MODIFICADO");
}

function mostrarTotal() {
    const total = productos.reduce( (acc, el) => {
        // Forma 1
        // return acc + (el.cantidad * el.precio);

        // Forma 2
        return acc + el.obtenerSubtotal();
    }, 0);

    alert("EL TOTAL ES: $" + total);
}

function obtenerNombreDeProductoUnico() {
    let nombreProducto = prompt("Ingrese nombre de producto");

    let productoExiste = productos.some( (el) => {
        return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
    });

    while(productoExiste) {
        alert("PRODUCTO YA EXISTE!");
        nombreProducto = prompt("Ingrese nombre de producto");
        productoExiste = productos.some( (el) => {
            return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
        });
    }

    return nombreProducto;
}

function crearProducto() {
    // Pedimos los datos del producto
    const nombreProducto = obtenerNombreDeProductoUnico();
    const precioProducto = parseFloat(prompt("Ingrese precio de producto"));
    const cantidad = parseInt(prompt("Ingrese cantidad"));

    // Creamos el producto
    const producto = new Producto(
        nombreProducto,
        precioProducto,
        cantidad,
    );

    // Agregamos el producto al array
    productos.push(producto);

    alert("PRODUCTO AGREGADO");
}

function opcionValida() {

    // Chequeamos si la opción es menor a 0 o mayor a 3
    while(opcion < 0 || opcion > 3) {
        alert("OPCIÓN INVÁLIDA");
        opcion = parseInt(prompt(opciones));
    }

    // Si ingresó 0 para SALIR, retornamos false
    if(opcion === 0) {
        alert("SALIR");
        return false;
    }

    return true;
}

// Inicio del programa
const productos = [
    new Producto("Tomates", 20, 2),
    new Producto("Lechuga", 30, 3),
    new Producto("Yogurt", 50, 4),
];

const opciones = "1- Crear un producto, 2- Mostrar total de productos, 3- Modificar producto, 0- Salir";
let opcion = parseInt(prompt(opciones));

while(opcionValida()) {

    switch(opcion) {
        case 1:
            crearProducto();
            break;

        case 2:
            mostrarTotal();
            break;

        case 3:
            modificarProducto();
            break;
    }

    // Volver a pedir la opción para no quedarse en un bucle infinito
    opcion = parseInt(prompt(opciones));
}