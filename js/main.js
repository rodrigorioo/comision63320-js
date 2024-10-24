/**
 * OPERADOR ++
 */

// let numero = 10;
//
// // numero = numero + 1;
// numero++;
// numero++;
//
// console.log(numero);

/**
 * FOR
 */

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Ciclo que cuenta del 1 al 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Ciclo que cuenta los pares del 0 al 20
// for (let i = 0; i <= 20; i = i + 2) {
//     console.log(i);
// }

/**
 * EJEMPLO CON FOR
 */

// Sin bucles
// const numero1 = parseInt(prompt("Ingrese un número"));
// const numero2 = parseInt(prompt("Ingrese un número"));
// const numero3 = parseInt(prompt("Ingrese un número"));
// const numero4 = parseInt(prompt("Ingrese un número"));
// const numero5 = parseInt(prompt("Ingrese un número"));
//
// const resultado = numero1 + numero2 + numero3 + numero4 + numero5;

// Con ciclo for
// let resultado = 0;
// for (let i = 0; i < 5; i++) {
//     const numero = parseInt(prompt("Ingrese un número"));
//     resultado = resultado + numero;
// }
//
// console.log(resultado);

/**
 * SENTENCIA BREAK Y CONTINUE
 */

// for (let i = 0; i <= 20; i = i + 2) {
//     if (i >= 15) {
//         break;
//     }
//
//     console.log(i);
// }
//
// console.log("Finaliza el ciclo for");

// for (let i = 0; i <= 20; i = i + 2) {
//     if(i === 6 || i === 8 || i === 10) {
//         continue;
//     }
//
//     console.log(i);
// }

/**
 * WHILE
 */

// Sin bucle while
// const nombre = prompt("Ingrese el nombre");
// const edad = parseInt(prompt("Ingrese la edad"));
//
// if(isNaN(edad)) {
//     alert("Edad inválida");
// } else {
//     alert("Bienvenido " + nombre);
// }

// Con bucle while
// const nombre = prompt("Ingrese el nombre");
//
// let edad = parseInt(prompt("Ingrese la edad"));
//
// Valido que la edad sea un número
// while(isNaN(edad)) {
//     alert("Edad inválida");
//     edad = parseInt(prompt("Ingrese la edad"));
// }
//
// Valido que la edad sea un número y sea mayor a 18
// while(isNaN(edad) || edad < 18) {
//
//     if(isNaN(edad)) {
//         alert("Edad inválida");
//     } else if(edad < 18) {
//         alert("Edad menor a 18");
//     }
//
//     edad = parseInt(prompt("Ingrese la edad"));
// }
//
// alert("Bienvenido " + nombre);

/*
    SENTENCIA BREAK Y CONTINUE EN WHILE
 */

// const nombre = prompt("Ingrese un nombre");
//
// let edad = parseInt(prompt("Ingrese la edad"));

// Break
// while (true) {
//     if(isNaN(edad)) {
//         alert("Edad inválida");
//         edad = parseInt(prompt("Ingrese la edad"));
//     } else if (edad < 18) {
//         alert("Edad es menor a 18");
//         edad = parseInt(prompt("Ingrese la edad"));
//     } else {
//         break;
//     }
// }

// Continue
// while(isNaN(edad) || edad < 18) {
//
//     if(isNaN(edad)) {
//         alert("Edad inválida");
//     } else if(edad < 18) {
//         alert("Edad menor a 18");
//     }
//
//     edad = parseInt(prompt("Ingrese la edad"));
// }
//
// alert("Bienvenido " + nombre);

/**
 * DO WHILE
 */

// const nombre = prompt("Ingrese el nombre");
//
// let edad = parseInt(prompt("Ingrese la edad"));

// Esto con while ♥
// while(isNaN(edad) || edad < 18) {
//     if(isNaN(edad)) {
//         alert("Edad inválida");
//     } else if(edad < 18) {
//         alert("Edad menor a 18");
//     }
//
//     edad = parseInt(prompt("Ingrese la edad"));
// }

// Con do while
// do {
//     if(isNaN(edad)) {
//         alert("Edad inválida");
//         edad = parseInt(prompt("Ingrese la edad"));
//     } else if(edad < 18) {
//         alert("Edad menor a 18");
//         edad = parseInt(prompt("Ingrese la edad"));
//     }
// } while(isNaN(edad) || edad < 18)

// alert("Bienvenido " + nombre);

/**
 * SWITCH
 */

// const menu = "Ingrese 1- Marketing, 2- Soporte técnico, 3- Darse de baja, 4- Promociones";
// const opcion = parseInt(prompt("Ingrese la opción: " + menu));

// Sin switch
// if (opcion === 1) {
//     // Marketing...
// } else if(opcion === 2) {
//     // Soporte técnico..
// } else if(opcion === 3) {
//     // Darse de baja
// } else if(opcion === 4) {
//     // Promociones
// } else {
//     alert("Opción inválida. " + menu);
// }

// Switch
// switch (opcion) {
//     case 1:
//         // Marketing...
//
//         break;
//
//     case 2:
//         // Soporte técnico
//
//         break;
//
//     case 3:
//         // Darse de baja
//
//         break;
//
//     case 4:
//         // Promociones
//
//         break;
//
//     case 5:
//         // ...
//
//         break;
//
//     default:
//         alert("Opción inválida " + menu);
//         break;
// }

/**
 * COMBINAR ESTRUCTURAS
 */

// const menu = "Ingrese 1- Marketing, 2- Soporte técnico, 3- Darse de baja, 4- Promociones";
// let opcion = parseInt(prompt("Ingrese la opción: " + menu));
//
// while(isNaN(opcion)) {
//     alert("Ingrese un número válido");
//     opcion = parseInt(prompt("Ingrese la opción: " + menu));
// }
//
// switch (opcion) {
//
//     case 1:
//         alert("Marketing");
//         break;
//
//     case 2:
//
//         const menuDeSoporteTecnico = "Ingrese 1- Soporte de internet, 2- Soporte de televisión, 3- Otros problemas";
//         let opcionDeSoporteTecnico = parseInt(prompt("Ingrese la opción " + menuDeSoporteTecnico));
//
//         while(isNaN(opcionDeSoporteTecnico)) {
//             alert("Ingrese un número válido");
//             opcionDeSoporteTecnico = parseInt(prompt("Ingrese la opción " + menuDeSoporteTecnico));
//         }
//
//         switch(opcionDeSoporteTecnico) {
//             case 1:
//                 alert("Soporte de internet");
//                 break;
//
//             case 2:
//                 alert("Soporte de televisión");
//                 break;
//
//             case 3:
//                 alert("Otro problema");
//                 break;
//
//             default:
//                 alert("Opción inválida");
//                 break;
//         }
//
//         break;
//
//     // ...
//     // RESTO DE OPCIONES
//     // ....
// }

/**
 * EJERCICIO 9
 * Realice un programa en donde se le solicite un número al usuario y le muestre en pantalla cuántos dígitos tiene. (Ej: Si ingreso 27, tiene que mostrarme 2. Si ingreso 115 me tiene que mostrar 3).
 * AYUDA: Dividir por 10 a un número le remueve un dígito.
 */

// let numero = parseInt(prompt("Ingrese un número"));
//
// while(isNaN(numero)) {
//     numero = parseInt(prompt("Ingrese un número"));
// }
//
// // Forma 1
// let cantidadDeDigitos = 1;
// let resultado = numero / 10;
//
// while (resultado > 1) {
//     resultado = resultado / 10;
//
//     console.log(resultado);
//
//     cantidadDeDigitos++;
// }
//
// // Forma 2
// // let cantidadDeDigitos = 0;
// //
// // while (numero > 1) {
// //     numero = numero / 10;
// //
// //     cantidadDeDigitos++;
// // }
//
// console.log("La cantidad de dígitos es: " + cantidadDeDigitos);
