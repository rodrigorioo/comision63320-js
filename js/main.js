/**
 * GUÍA IF, ELSE
 * 6) Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muéstrele en pantalla con un alert el precio final..
 */

// const precio = parseFloat(prompt("Ingrese el precio del producto"));

/*
    Forma 1 con Regla de 3 simple
 */
// const iva = (21 * precio) / 100;

/*
    Forma 2 con multiplicación
 */
// const iva = precio * 0.21;

// const precioFinal = precio + iva;

/*
    Forma 3 con multiplicación
 */
// const precioFinal = precio * 1.21;
//
// alert("El precio final es: $" + precioFinal);

/**
 * GUÍA CICLOS
 * 11) Escriba un programa en el que el usuario ingrese un número y utilice bucles for anidados para generar un patrón de asteriscos como un triángulo. Por ejemplo, si el usuario ingresa 5, debería imprimir:
    *
    **
    ***
    ****
    *****
 */

// const numero = parseInt(prompt("Ingrese un número"));
//
// for(let i = 1; i <= numero; i++) {
//
//     let asteriscos = "";
//     for(let j = 0; j < i; j++) {
//         asteriscos = asteriscos + "*";
//     }
//
//     console.log(asteriscos);
// }

/**
 * FUNCIONES ANÓNIMAS vs FUNCIONES NORMALES
 */

// function iterar(funcion) {
//     for(let i = 0; i < 10; i++) {
//         funcion(i);
//     }
// }

// Inicio del programa
// const imprimir = (a) => {
//     console.log("El valor es: " + a);
// }
// const multiplicarPor2 = (a) => {
//     console.log(a * 2);
// }

// iterar(imprimir);
// iterar(multiplicarPor2);

/**
 * SIMULADOR PRE ENTREGA
 */

// Funciones
function opcionValida(opcionMenu) {

    while(isNaN(opcionMenu) || opcionMenu < 0 || opcionMenu > 3) {
        alert("OPCIÓN INVÁLIDA");
        opcionMenu = parseInt(prompt("Ingrese la opción: " + opcionesMenu));
    }

    if(opcionMenu === 0) {
        alert("GRACIAS POR USAR NUESTRO SISTEMA");
        return false;
    }

    return true;
}

function agregarProducto() {

    // Pedimos nombre y precio del producto
    const nombreDelProducto = prompt("Ingrese nombre del producto");
    const precioDelProducto = parseFloat(prompt("Ingrese precio del producto"));

    // Concatenamos el nombre chequeando si ya hay un nombre para agregarle la coma
    if(nombresDeProductos !== "") {
        nombresDeProductos = nombresDeProductos + ", ";
    }

    nombresDeProductos = nombresDeProductos + nombreDelProducto;
    total = total + precioDelProducto;

    alert("Producto: " + nombreDelProducto + " agregado con éxito!");
}

function listarProductos() {
    alert("Productos: " + nombresDeProductos);
}

function mostrarTotal() {
    alert("Total: $" + total);
}

// Inicio del programa
const opcionesMenu = "1- Agregar producto, 2- Listar productos, 3- Mostrar total, 0- Salir";
let opcion = parseInt(prompt("Ingrese la opción: " + opcionesMenu));

let nombresDeProductos = "";
let total = 0;

while(opcionValida(opcion)) {

    switch (opcion) {

        case 1:
            agregarProducto();
            break;

        case 2:
            listarProductos();
            break;

        case 3:
            mostrarTotal();
            break;
    }

    // Le volvemos a pedir la opción
    opcion = parseInt(prompt("Ingrese la opción: " + opcionesMenu));
}