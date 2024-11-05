// const nombres = ["Marcos", "Juan", "Pedro", "Martin"];

// console.log(nombres);

// console.log(nombres[2]);

// for(let i = 0; i < 4; i++) {
//     const nombre = nombres[i];
//
//     console.log(nombre);
// }

/**
 * PROPIEDADES Y MÉTODOS DE ARRAYS
 */

// const nombres = ["Marcos", "Juan", "Pedro"];

// for(let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

// Agregar elementos al final
// nombres.push("Lautaro");
// nombres.push("Federico");
//
// console.log(nombres);

// Agregar elementos al principio
// nombres.unshift("Martin");
// nombres.unshift("Matias");
// console.log(nombres);

// Eliminar al final
// const nombre = nombres.pop();
// console.log(nombre);
// console.log(nombres);

// Eliminar al principio
// nombres.shift();
// console.log(nombres);

/**
 * SPLICE
 */

// const nombres = ["Marcos", "Juan", "Pedro", "Matias", "Lautaro"];

// Elimino a Juan, Pedro y Matias
// nombres.splice(1, 3);

// nombres.splice(2, 1);

// console.log(nombres);

/**
 * JOIN
 */

// const listaDeNombres = nombres.join("/");
//
// console.log(listaDeNombres);
// console.log(nombres);

/**
 * CONCAT
 */

// const nombres1 = ["Marcos", "Juan"];
// const nombres2 = ["Agustin", "Pedro", "Matias"];
//
// const nombres = nombres1.concat(nombres2);

// console.log(nombres);

/**
 * SLICE
 */

// const nombres = ["Marcos", "Juan", "Pedro", "Matias", "Lautaro"];
//
// const nuevosNombres = nombres.slice(1, 3);
//
// console.log(nombres);
// console.log(nuevosNombres);

/**
 * INDEX OF
 */

// const nombres = ["Marcos", "Juan", "Pedro", "Matias", "Lautaro", "Juan"];
//
// console.log(nombres.indexOf("Juan"));

/**
 * INCLUDES
 */

// const nombres = ["Marcos", "Juan", "Pedro", "Matias", "Lautaro", "Juan"];
//
// console.log(nombres.includes("jkeqwkjeqwkjeqwkj"));

/**
 * REVERSE
 */

// const nombres = ["Marcos", "Juan", "Pedro", "Matias", "Lautaro", "Juan"];
//
// nombres.reverse();
//
// console.log(nombres);

/**
 * ARRAYS DE OBJETOS
 */

// Objetos
// class Producto {
//     constructor (nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// Función
// function buscarProducto(nombre) {
//
//     let encontrado;
//
//     for(let i = 0; i < productos.length; i++) {
//         const producto = productos[i];
//
//         if(producto.nombre === nombre) {
//             encontrado = producto;
//             break;
//         }
//     }
//
//     return encontrado;
// }

// Inicio del programa
// const productos = [
//     new Producto("Fideos", 50),
//     new Producto("Arroz", 60),
//     new Producto("Lechuga", 30),
// ];

// console.log(productos);
// const producto = productos[1];

// console.log(buscarProducto("dsajkdsakjdsajk"));

/**
 * ARRAYS DE OBJETOS POR REFERENCIA
 */

// const array = ["Juan", "Pedro"];
// let a = "Marcos";
//
// array.push(a);
//
// a = "Federico";
//
// console.log(array); // ["Juan", "Pedro", "Marcos"]
// console.log(a);

/*
    CON OBJETOS
 */

// const array = [
//     {
//         nombre: "Lechuga",
//         precio: 50,
//     },
//     {
//         nombre: "Leche",
//         precio: 25,
//     },
// ];
// const a = {
//     nombre: "Tomates",
//     precio: 50,
// };
//
// array.push(a);
//
// a.nombre = "Fideos";
//
// console.log(array);

/*
    CON ARRAYS
 */

// const array = [
//     [1, 2],
//     [3, 4],
// ];
// const a = [5, 6];
//
// array.push(a);
//
// a.push(7);
//
// console.log(array);

/**
 * FOR OF
 */

// const array = ["Marcos", "Pedro", "Juan"];
//
// for(const nombre of array) {
//     console.log(nombre);
// }

/**
 * EJEMPLO 1
 */

// // Clases
// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }
//
// // Funciones
// function opcionValida() {
//
//     while(opcion < 0 || opcion > 3) {
//         alert("OPCIÓN INVÁLIDA");
//
//         opcion = parseInt(prompt(opcionesMenu));
//     }
//
//     if(opcion === 0) {
//         alert("GRACIAS POR UTILIZAR NUESTRO SISTEMA");
//         return false;
//     }
//
//     return true;
// }
//
// function buscarIndiceDeProducto(nombreDeProducto) {
//     let indice = -1;
//
//     for(let i = 0; i < productos.length; i++) {
//
//         const producto = productos[i];
//
//         if(
//             producto.nombre.toUpperCase() === nombreDeProducto.toUpperCase()
//         ) {
//             indice = i;
//             break;
//         }
//     }
//
//     return indice;
// }
//
// function eliminarProducto() {
//
//     // Pido el nombre del producto a eliminar
//     let nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
//     let indiceProducto = buscarIndiceDeProducto(nombreProducto);
//
//     while(indiceProducto === -1) {
//         alert("EL PRODUCTO NO EXISTE");
//         nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
//         indiceProducto = buscarIndiceDeProducto(nombreProducto);
//     }
//
//     // Elimino el producto
//     productos.splice(indiceProducto, 1);
// }
//
// function agregarProducto() {
//
//     const nombre = prompt("Nombre del producto");
//     const precio = parseFloat(prompt("Precio del producto"));
//
//     // Creamos el producto
//     const producto = new Producto(nombre, precio);
//
//     // Agregamos el producto a la lista
//     productos.push(producto);
//
//     alert("Producto agregado satisfactoriamente!");
// }
//
// function calcularTotal() {
//
//     let total = 0;
//
//     // Recorremos los productos
//     for(let i = 0; i < productos.length; i++) {
//         total = total + (productos[i].precio);
//     }
//
//     alert("EL TOTAL ES: $" + total);
// }
//
// // Inicio del programa
// const opcionesMenu = "1- Agregar Producto, 2- Eliminar producto, 3- Calcular total, 0- Salir";
// let opcion = parseInt(prompt(opcionesMenu));
//
// let productos = [
//     new Producto("Papa", 30),
//     new Producto("Tomates", 50),
//     new Producto("Lechuga", 25),
// ];
//
// while(opcionValida()) {
//
//     switch(opcion) {
//         case 1:
//             agregarProducto();
//             break;
//
//         case 2:
//             eliminarProducto();
//             break;
//
//         case 3:
//             calcularTotal();
//             break;
//     }
//
//     opcion = parseInt(prompt(opcionesMenu));
// }

