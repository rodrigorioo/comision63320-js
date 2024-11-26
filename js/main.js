/**
 * SUGAR SYNTAX
 */

// let numero1 = 5;
// const numero2 = 10;

// Forma vieja
// numero1 = numero1 + numero2;

// Sugar syntax
// numero1 += numero2;
// numero1 -= numero2;

// console.log(numero1);

/**
 * OPERADOR TERNARIO
 */

// const edad = 15;

// forma vieja
// if(edad > 18) {
//     console.log("Usted es mayor a 18");
// } else {
//     console.log("Usted es menor a 18");
// }

// (edad > 18) ? console.log("Usted es mayor a 18") : console.log("Usted es menor a 18");

/*
    RETURN IMPLÍCITO
 */

// const edad = 20;
//
// let esMayorA18;

// Forma vieja
// if(edad > 18) {
//     esMayorA18 = true;
// } else {
//     esMayorA18 = false;
// }

// Operador ternario
// esMayorA18 = (edad > 18) ? true : false;
//
// console.log(esMayorA18);

/*
    OPERADOR TERNARIO ANIDADO
 */

// const edad = 20;
// const nombre = "Javier";
//
// (edad > 18) ? ( (nombre === "Javier") ? console.log("Bienvenido Javier que es mayor a 18") : console.log("El nombre no es Javier") ) : console.log("La edad no es mayor a 18");

/**
 * OPERADOR LÓGICO AND
 */

// const nombre = "Fernando";

// Forma vieja
// if(nombre === "Javier") {
//     console.log("El nombre es Javier");
// }

// (nombre === "Javier") && console.log("El nombre es Javier");

/*
    RETURN IMPLÍCITO
 */

// let esJavier;

// Forma vieja
// if(nombre === "Javier") {
//     esJavier = true;
// }

// esJavier = (nombre === "Javier") && true;
//
// console.log(esJavier);

/**
 * OPERADOR OR
 */

// Objetos
// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
//
//     obtenerSubtotal() {
//         return this.precio * this.cantidad;
//     }
// }
//
// // Funciones
// function obtenerDeLS() {
//     // Con operador de OR
//     return JSON.parse(localStorage.getItem("productos")) ?? [
//         new Producto("Tomates", 20, 2),
//         new Producto("Lechuga", 30, 3),
//         new Producto("Yogurt", 50, 4),
//     ];
//
//     // Forma vieja
//     // const productosJSON = localStorage.getItem("productos");
//     //
//     // if(productosJSON === null) {
//     //     return [
//     //         new Producto("Tomates", 20, 2),
//     //         new Producto("Lechuga", 30, 3),
//     //         new Producto("Yogurt", 50, 4),
//     //     ];
//     // } else {
//     //     const productos = [];
//     //     const productosLiterales = JSON.parse(productosJSON);
//     //
//     //     for(const productoLiteral of productosLiterales) {
//     //         productos.push(
//     //             new Producto(
//     //                 productoLiteral.nombre, productoLiteral.precio, productoLiteral.cantidad,
//     //             )
//     //         )
//     //     }
//     //
//     //     return productos;
//     // }
// }
//
// obtenerDeLS();

/**
 * ACCESO CONDICIONAL A UN OBJETO
 */

// const persona = {
//     nombre: "Pedro",
//     apellido: "Perez",
//     profesion: {
//         nombre: "Profesor",
//     }
// }
//
// const persona2 = {
//     nombre: "Pedro",
//     apellido: "Sanchez",
//     profesion: {
//         nombre: "Profesor",
//         institucion: {
//             nombre: "Coderhouse",
//         }
//     }
// }
//
// console.log(persona2.profesion?.institucion?.nombre);

/**
 * DESESTRUCTURACIÓN
 */

// const producto = {
//     nombre: "Tomates",
//     precio: 50,
//     cantidad: 3,
// }

// Forma vieja
// const nombre = producto.nombre;
// const precio = producto.precio;
// const cantidad = producto.cantidad;

// const { nombre, precio, cantidad } = producto;
//
// console.log(nombre, precio, cantidad);

/**
 * DESESTRUCTURACIÓN DE OBJETOS ANIDADOS
 */

// const producto = {
//     nombre: "Tomates",
//     precio: 50,
//     cantidad: 3,
//     categoria: {
//         nombre_categoria: "Verduras",
//         posicion: 3,
//         deposito: {
//             nombre_deposito: "Deposito 1",
//         }
//     }
// }
//
// const {
//     nombre,
//     precio,
//     cantidad,
//     categoria: {
//         nombre_categoria,
//         posicion,
//         deposito: {
//             nombre_deposito
//         }
//     }
// } = producto;
//
// console.log(nombre_categoria, posicion, nombre_deposito);

/**
 * ALIAS
 */

// const producto = {
//     nombre: "Tomates",
//     precio: 50,
//     cantidad: 3,
//     categoria: {
//         nombre: "Verduras",
//         posicion: 3,
//         deposito: {
//             nombre: "Deposito 1",
//         }
//     }
// }
//
// const {
//     nombre: nombreProducto,
//     precio,
//     cantidad,
//     categoria: {
//         nombre: nombreCategoria,
//         deposito: {
//             nombre: nombreDeposito,
//         }
//     }
// } = producto;
//
// console.log(nombreProducto, nombreCategoria, nombreDeposito);

/**
 * DESESTRUCTURACIÓN EN PARÁMETROS
 */

// const botonsito = document.getElementById("botonsito");
//
// botonsito.addEventListener("click", ({ offsetX, offsetY, target }) => {
//     console.log(target);
//     console.log(offsetX, offsetY);
// });

/**
 * DESESTRUCTURACIÓN DE ARRAYS
 */

// const nombres = ["Javier", "Pedro", "Matias"];
//
// // const [a, b, c, d] = nombres;
// //
// // console.log(a, b, c, d);
//
// const [, , c] = nombres;
//
// console.log(c);

/**
 * EJEMPLO DE OPERADORES
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
function guardarEnLS() {
    const productosJSON = JSON.stringify(productos);

    localStorage.setItem("productos", productosJSON);
}

function transformarProductosLocalStorage(productosJSON) {
    if(productosJSON === null) {
        return null;
    }

    const productos = [];

    for(const productoLiteral of productosJSON) {
        productos.push(
            new Producto(
                productoLiteral.nombre,
                productoLiteral.precio,
                productoLiteral.cantidad,
            )
        )
    }

    return productos;
}

function obtenerDeLS() {
    return transformarProductosLocalStorage(
        JSON.parse(
            localStorage.getItem("productos")
        )
    ) || [
        new Producto("Tomates", 20, 2),
        new Producto("Lechuga", 30, 3),
        new Producto("Yogurt", 50, 4),
    ];
}

function obtenerTotal() {
    return productos.reduce( (acc, el) => {
        return acc + el.obtenerSubtotal();
    }, 0);
}

function nombreProductoExiste(nombre) {
    return productos.some( (el) => {
        return el.nombre.toLowerCase() === nombre.toLowerCase();
    });
}

function crearProducto(e) {
    e.preventDefault();

    // Obtener los inputs
    const inputNombreProducto = document.getElementById("nombreProducto");
    const inputPrecioProducto = document.getElementById("precioProducto");
    const inputCantidadProducto = document.getElementById("cantidadProducto");

    // Pedimos los datos del producto
    const nombreProducto = inputNombreProducto.value;
    const precioProducto = parseFloat(inputPrecioProducto.value);
    const cantidad = parseInt(inputCantidadProducto.value);

    // Limpiamos inputs
    inputNombreProducto.value = "";
    inputCantidadProducto.value = "";
    inputPrecioProducto.value = "";

    // Chequeamos si el nombre del producto no existe
    if(nombreProductoExiste(nombreProducto)) {
        alert("PRODUCTO YA EXISTE");
        return;
    }

    // Creamos el producto
    const producto = new Producto(
        nombreProducto,
        precioProducto,
        cantidad,
    );

    // Agregamos el producto al array
    productos.push(producto);

    // Guardamos en local storage
    guardarEnLS();

    alert("PRODUCTO AGREGADO");

    renderizarTablaProductos();
}

function renderizarTotal() {
    spanTotal.innerText = obtenerTotal();
}

function clickSpanPrecioProducto(tdPrecio, spanPrecio, producto) {
    // Crear input
    const inputPrecio = document.createElement("input");
    inputPrecio.type = "text";
    inputPrecio.value = producto.precio;

    inputPrecio.addEventListener("change", () => {
        // Cambiamos precio de producto
        producto.precio = parseFloat(inputPrecio.value);

        // Guardamos en local storage
        guardarEnLS();

        // Volver a renderizar la tabla de productos
        renderizarTablaProductos();
    });

    // Agregar input al td
    tdPrecio.append(inputPrecio);

    // Ocultar span
    spanPrecio.className = "ocultar-elemento";
}

function clickSpanCantidadProducto(tdPrecio, spanPrecio, producto) {
    // Crear input
    const inputCantidad = document.createElement("input");
    inputCantidad.type = "text";
    inputCantidad.value = producto.cantidad;

    inputCantidad.addEventListener("change", () => {
        // Cambiamos cantidad de producto
        producto.cantidad = parseInt(inputCantidad.value);

        // Guardamos en local storage
        guardarEnLS();

        // Volver a renderizar la tabla de productos
        renderizarTablaProductos();
    });

    // Agregar input al td
    tdPrecio.append(inputCantidad);

    // Ocultar span
    spanPrecio.className = "ocultar-elemento";
}

function eliminarProducto(producto) {
    // Forma 1
    // productos = productos.filter( (el) => {
    //     return el.nombre !== producto.nombre;
    // });

    // Forma 2
    const indiceElemento = productos.findIndex( (el) => {
        return el.nombre === producto.nombre;
    });

    productos.splice(indiceElemento, 1);

    // Guardar en el LS
    guardarEnLS();

    // Renderizar tabla
    renderizarTablaProductos();
}

function renderizarTablaProductos() {
    tbodyProductos.innerHTML = "";

    for(const producto of productos) {
        // Creamos tr
        const tr = document.createElement("tr");

        // Creamos tds
        const tdNombre = document.createElement("td");
        const tdPrecio = document.createElement("td");
        const tdCantidad = document.createElement("td");
        const tdAcciones = document.createElement("td");

        tdNombre.innerText = `${producto.nombre}`;

        const spanPrecio = document.createElement("span");
        spanPrecio.innerText = `$${producto.precio}`;
        spanPrecio.addEventListener("click", () => {
            clickSpanPrecioProducto(tdPrecio, spanPrecio, producto);
        });

        const spanCantidad = document.createElement("span");
        spanCantidad.innerText = `${producto.cantidad}`;
        spanCantidad.addEventListener("click", () => {
            clickSpanCantidadProducto(tdCantidad, spanCantidad, producto);
        });

        tdPrecio.append(spanPrecio);
        tdCantidad.append(spanCantidad);

        // TD acciones
        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            eliminarProducto(producto);
        });

        // Agregar boton al td
        tdAcciones.append(botonEliminar);

        // Agregar tds al tr
        tr.append(tdNombre, tdPrecio, tdCantidad, tdAcciones);

        tbodyProductos.append(tr);
    }

    // Renderizamos el total
    renderizarTotal();
}

// Inicio del programa
const formAgregarProducto = document.getElementById("formAgregarProducto");
const tbodyProductos = document.getElementById("tbodyProductos");
const spanTotal = document.getElementById("total");

let productos = obtenerDeLS();

renderizarTablaProductos();

formAgregarProducto.addEventListener("submit", crearProducto);