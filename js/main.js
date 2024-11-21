/**
 * SET ITEM
 */

// localStorage.setItem("nombre", "Rodrigo");
// localStorage.setItem("edad", 20);
// localStorage.setItem("nombre", "PEPE");

/**
 * GET ITEM
 */

// const nombre = localStorage.getItem("nombre");
//
// console.log(nombre);

/**
 * RECORRER STORAGE
 */

// for(let i = 0; i < localStorage.length; i++) {
//     const nombreClave = localStorage.key(i);
//
//     const dato = localStorage.getItem(nombreClave);
//
//     console.log(`Clave: ${nombreClave} - Dato: ${dato}`);
// }

/**
 * ELIMINAR DATOS
 */

// localStorage.removeItem("edad");
// localStorage.clear();

/**
 * OTRAS CONSIDERACIONES
 */

// localStorage.setItem("nombre", "Rodrigo");
// localStorage.setItem("edad", 20);

// const edad = localStorage.getItem("edad");
//
// console.log(edad);

// Guardar array
// const nombres = ["Pepe", "Juan", "Pedro"];
// localStorage.setItem("nombres", nombres);

// const nombres = localStorage.getItem("nombres").split(",");
//
// console.log(nombres);

/**
 * GUARDAR OBJETOS
 */

// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
// }
//
// const producto = new Producto("Tomates", 20, 3);

// const producto = {
//     nombre: "Tomates",
//     precio: 20,
//     cantidad: 3,
// };

// const productoJSON = JSON.stringify(producto);
//
// localStorage.setItem("producto", productoJSON);

// Obtener JSON de localStorage
// const productoJSON = localStorage.getItem("producto");
//
// const producto = JSON.parse(productoJSON);
//
// console.log(producto);

// const json = '{"nombre":"Tomates","precio":20,"cantidad":3}';
//
// const parsed = JSON.parse(json);
//
// console.log(parsed);

/**
 * ARRAYS DE OBJETOS
 */

// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
//
//     obtenerIva() {
//         return 21;
//     }
//
//     mostrarNombre() {
//         console.log(`El nombre es: ${this.nombre}`);
//     }
// }

/*
    Guardar en localstorage
 */
// const productos = [
//     new Producto("Tomates", 20, 3),
//     new Producto("Lechuga", 40, 1),
//     new Producto("Manzanas", 60, 5),
// ];
// const productosJSON = JSON.stringify(productos);
// localStorage.setItem("productos", productosJSON);

/*
    Obtener productos de localstorage
 */

// const productosJSON = localStorage.getItem("productos");
//
// // const productos = JSON.parse(productosJSON);
//
// const productos = [];
// const productosLiterales = JSON.parse(productosJSON);
// for(const productoLiteral of productosLiterales) {
//     productos.push(
//         new Producto(productoLiteral.nombre, productoLiteral.precio, productoLiteral.cantidad)
//     );
// }
//
// for(const producto of productos) {
//     console.log(producto.obtenerIva());
// }

/**
 * EJEMPLO DE LOCAL STORAGE
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

function obtenerDeLS() {
    const productosJSON = localStorage.getItem("productos");

    if(productosJSON === null) {
        return [
            new Producto("Tomates", 20, 2),
            new Producto("Lechuga", 30, 3),
            new Producto("Yogurt", 50, 4),
        ];
    } else {
        const productos = [];
        const productosLiterales = JSON.parse(productosJSON);

        for(const productoLiteral of productosLiterales) {
            productos.push(
                new Producto(
                    productoLiteral.nombre, productoLiteral.precio, productoLiteral.cantidad,
                )
            )
        }

        return productos;
    }
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