// const saludo = "Hola";
// const numero1 = 10;
// const numero2 = 20;
//
// for(let i = 0; i < 10000000; i++) {
//
// }
//
// const resultado = numero1 + numero2;
//
// console.log(saludo);
// console.log(resultado);

/**
 * SET TIMEOUT
 */

// setTimeout( () => {
//     console.log("Se ejecutó el timeout");
// }, 1000);
//
// console.log("Hola");
//
// setTimeout( () => {
//     console.log("Se ejecutó el timeout 2");
// }, 2000);
//
// console.log("Hola 2");

// EJEMPLO 2

// for (let letra of "hola") {
//     setTimeout( () => {
//         console.log(letra);
//     }, 1000);
// }
//
// for (let letra of "mundo") {
//     setTimeout( () => {
//         console.log(letra);
//     }, 2000);
// }

// EJEMPLO 3

// console.log("HOLA");
//
// setTimeout( () => {
//     console.log("CÓMO ESTÁS?");
// }, 0);
//
// console.log("MI NOMBRE ES RODRIGO");
//
// console.log("AAAA");
//
// console.log("BBBBBB");

/**
 * CALL STACK
 */

// function funcion3() {
//
//     debugger;
//
//     return "HOLA";
// }
//
// function funcion2() {
//
//     debugger;
//
//     const var2 = funcion3();
//
//     debugger;
//
//     return var2 + " COMO ESTAS";
// }
//
// function funcion1() {
//     debugger;
//
//     const var1 = funcion2();
//
//     debugger;
//
//     return var1 + " MI NOMBRE ES RODRIGO";
// }
//
// const saludo = funcion1();
//
// console.log(saludo);

/**
 * SET INTERVAL
 */

// const interval = setInterval( () => {
//     console.log("HOLA");
// }, 1000);

// let timeout = setTimeout( () => {
//
//     // clearInterval(interval);
//
//     console.log("HOLA");
//
// }, 2000);
//
// setTimeout( () => {
//     clearTimeout(timeout);
// }, 1000);

/**
 * PROMESAS
 */

// const numero = 5;
//
// const promesa = new Promise( (resolve, reject) => {
//
//     // Sincrónico
//     // if(numero === 5) {
//     //     resolve();
//     // } else {
//     //     reject();
//     // }
//
//     // Asincrónico
//     setTimeout( () => {
//         if(numero === 5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1000);
// });
//
// promesa
//     .then( () => {
//         console.log("Se resolvió la promesa");
//     })
//     .catch( () => {
//         console.log("Se rechazó la promesa");
//     })
//     .finally( () => {
//         console.log("FINALIZÓ");
//     });

// EJEMPLO 2

// const promesa = new Promise( (resolve, reject) => {
//
//     const productos = [
//         {
//             id: 1,
//             nombre: "Papa",
//         },
//         {
//             id: 2,
//             nombre: "Tomates",
//         },
//         // ...
//     ];
//
//     setTimeout( () => {
//         const random = Math.round(Math.random() * 10);
//
//         if(random >= 5) {
//             resolve(productos);
//         } else {
//             reject("Error al obtener los productos");
//         }
//
//     }, 1000);
// });
//
// promesa
//     .then( (productosRecibidos) => {
//         console.log("Productos: ");
//         console.log(productosRecibidos);
//     })
//     .catch( (mensajeDeError) => {
//         console.log("Error: " + mensajeDeError);
//     })
//     .finally( () => {
//         console.log("Se terminaron de obtener los productos");
//     })
// ;
//
// console.log("HOLA");
//
// for(let i = 0; i < 500; i++) {
//     console.log(i);
// }

