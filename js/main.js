/**
 * GET ELEMENT BY ID
 */

// const div = document.getElementById("contenedor");
// const parrafo = document.getElementById("parrafo1");

// console.log(div);
// console.log(parrafo);

// const titulo = document.getElementById("titulo4");
//
// console.log(titulo);

/**
 * GET ELEMENTS BY CLASS NAME
 */

// const parrafitos = document.getElementsByClassName("parrafito");

// console.log(parrafitos);

// console.log(parrafitos[1]);

// for(const parrafito of parrafitos) {
//     console.log(parrafito);
// }

/**
 * GET ELEMENTS BY TAG NAME
 */

// const parrafos = document.getElementsByTagName("p");
//
// console.log(parrafos);

/**
 * INNERHTML E INNERTEXT
 */

// const parrafo1 = document.getElementById("parrafo1");

// console.log(parrafo1.innerHTML);
// console.log(parrafo1.innerText);

// Modificar HTML
// parrafo1.innerHTML = "HOLA <strong>MI NOMBRE ES RODRIGO</strong>";
// parrafo1.innerText = "HOLA MI NOMBRE ES RODRIGO <strong>MI NOMBRE ES RODRIGO</strong>";

// Cambiar textos de los parrafitos

// const parrafitos = document.getElementsByClassName("parrafito");
//
// for(const parrafito of parrafitos) {
//
//     // Edito el HTML
//     parrafito.innerHTML = parrafito.innerHTML + " <strong>EDITADO</strong>";
//
//     console.log(parrafito.innerHTML);
//
//     // Edito el texto
//     // parrafito.innerText = parrafito.innerText + " EDITADO";
// }

/**
 * CLASS NAME
 */

// const parrafitos = document.getElementsByClassName("parrafito");
//
// for(const parrafito of parrafitos) {
//     parrafito.className =
//         parrafito.className + " parrafo-verde";
// }

/**
 * CREAR Y AGREGAR NODOS
 * ELIMINAR NODO
 */

// const h2 = document.createElement("h2");
// h2.innerText = "TITULO H2";
//
// const p = document.createElement("p");
// p.className = "parrafo-verde";
// p.innerHTML = "<strong>TEXTO EN NEGRITA</strong>";
//
// // Obtener el div
// const div = document.getElementById("contenedor");
// div.append(h2);
// div.append(p);

// Eliminar elemento
// h2.remove();

/**
 * INPUTS
 */

// const input = document.getElementById("inputsito");
//
// console.log(input.value);

/**
 * PLANTILLAS DE TEXTO
 */

// const nombres = ["Pedro", "Ramiro", "Juan"];
//
// const div = document.getElementById("contenedor");
//
// for(const nombre of nombres) {
//     // div.innerHTML = div.innerHTML + "" +
//     //     "<p>El nombre es: " +
//     //     "<strong>" + nombre + "" +
//     //     "</strong>";
//
//     div.innerHTML = div.innerHTML + `
//         <p>El nombre es:
//         <strong>${nombre}</strong>
//     `;
// }

/**
 * QUERY SELECTORS
 */

// const parrafo3 = document.querySelector("#contenedor p.parrafo-azul");
//
// console.log(parrafo3);

// const parrafos = document.querySelectorAll("#contenedor p");
//
// for(const parrafo of parrafos) {
//     console.log(parrafo);
// }

// const parrafo2 = document.querySelector("#contenedor p:nth-child(2)");
//
// console.log(parrafo2);

/**
 * EJEMPLO DE DOM
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

    renderizarTablaProductos();
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

    renderizarTablaProductos();
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

function renderizarTablaProductos() {

    tbodyProductos.innerHTML = "";

    for(const producto of productos) {

        // Forma 1
        // tbodyProductos.innerHTML = tbodyProductos.innerHTML + `
        //     <tr>
        //         <td>${producto.nombre}</td>
        //         <td>$${producto.precio}</td>
        //         <td>${producto.cantidad}</td>
        //     </tr>
        // `;

        // Forma 2
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.cantidad}</td>
        `;
        tbodyProductos.append(tr);
    }
}

// Inicio del programa
const tbodyProductos = document.getElementById("tbodyProductos");

const productos = [
    new Producto("Tomates", 20, 2),
    new Producto("Lechuga", 30, 3),
    new Producto("Yogurt", 50, 4),
];

renderizarTablaProductos();

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