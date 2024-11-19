/**
 * ADD EVENT LISTENER
 */

// const cuadradito = document.getElementById("cuadradito");

// cuadradito.addEventListener(
//     "click",
//     () => {
//         alert("SE CLICKEO EL CUADRADITO");
//     }
// );

/**
 * EVENTOS DEL MOUSE
 */

// const cuadradito = document.getElementById("cuadradito");

// cuadradito.addEventListener("mousedown", () => {
//     console.log("SE OPRIMIÓ EL BOTÓN DEL MOUSE");
// });
//
// cuadradito.addEventListener("mouseup", () => {
//     console.log("SE SOLTÓ EL BOTÓN DEL MOUSE");
// });
//
// cuadradito.addEventListener("mouseover", () => {
//     console.log("CUANDO EL PUNTERO DEL MOUSE ENTRA AL ELEMENTO");
// });
//
// cuadradito.addEventListener("mouseout", () => {
//     console.log("CUANDO EL PUNTERO DEL MOUSE SALE DEL ELEMENTO");
// });

// cuadradito.addEventListener("mousemove", () => {
//     console.log("PUNTERO SOBRE EL ELEMENTO");
// });

// cuadradito.addEventListener("click", () => {
//     console.log("click sobre elemento");
// });

/**
 * EVENTOS DEL TECLADO
 */

// const inputsito = document.getElementById("inputsito");
// const selectsito = document.getElementById("selectsito");

// inputsito.addEventListener("keydown", () => {
//     console.log("SE EJECUTÓ EL KEYDOWN");
// });
//
// inputsito.addEventListener("keyup", () => {
//     console.log("SE EJECUTÓ EVENTO DE KEYUP");
// });

// inputsito.addEventListener("change", () => {
//     console.log(`CHANGE - EL VALOR DEL INPUT ES: ${inputsito.value}`);
// });

// selectsito.addEventListener("change", () => {
//     console.log(`EL VALOR DEL SELECT ES: ${selectsito.value}`);
// });

// inputsito.addEventListener("input", () => {
//     console.log(`INPUT - EL VALOR DEL INPUT ES: ${inputsito.value}`);
// });

/**
 * EVENTO DE SUBMIT
 */

// const formsito = document.getElementById("formsito");
// const parametro1 = document.querySelector('input[name="parametro1"]');
// const parametro2 = document.querySelector('input[name="parametro2"]');
//
// parametro1.addEventListener("keydown", (e) => {
//     const vocales = ["a", "e", "i", "o", "u"];
//     const key = e.key;
//
//     if(vocales.includes(key)) {
//         e.preventDefault();
//     }
// });

// formsito.addEventListener("submit", (e) => {
//
//     console.log(e);
//
//     e.preventDefault();
//
//
//     console.log(`EL VALOR DEL PARAMETRO1 ES: ${parametro1.value}`);
//     console.log(`EL VALOR DEL PARAMETRO2 ES: ${parametro2.value}`);
//
// });

/**
 * EJEMPLO EVENTOS
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
function obtenerTotal() {
    return productos.reduce( (acc, el) => {
        // Forma 1
        // return acc + (el.cantidad * el.precio);

        // Forma 2
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
        producto.precio = inputPrecio.value;

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
        producto.cantidad = inputCantidad.value;

        // Volver a renderizar la tabla de productos
        renderizarTablaProductos();
    });

    // Agregar input al td
    tdPrecio.append(inputCantidad);

    // Ocultar span
    spanPrecio.className = "ocultar-elemento";
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

        // TODO: Eliminar producto

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

const productos = [
    new Producto("Tomates", 20, 2),
    new Producto("Lechuga", 30, 3),
    new Producto("Yogurt", 50, 4),
];

renderizarTablaProductos();

formAgregarProducto.addEventListener("submit", crearProducto);