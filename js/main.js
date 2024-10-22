// const nombre = "Pepe";
// const edad = 15;
//
// const resultado = 10 + 15;
//
// if (true) {
//     console.log(resultado);
//     console.log("h");
//     console.log("a");
//     console.log("b");
//     console.log("c");
//     console.log("d");
// }
//
// console.log(edad);
// console.log(nombre);

/**
 * IF
 */

// const nombre = "Pepe";
//
// if (nombre == "Pepe") {
//     console.log("Hola pepe");
// }

// let edad = 15;
//
// if (edad == 18) {
//     console.log("Tiene 15");
// }

/**
 * IF - ELSE
 */

// const nombre = "Pepe";
//
// if (nombre == "Pepe") {
//
//     console.log("Hola Pepe");
//
// } else {
//
//     console.log("Hola persona que no es Pepe");
//
// }

// const nombre = prompt("Ingrese el nombre");
//
// if (nombre == "Juan") {
//     console.log("Hola Juan");
// } else {
//     console.log("Hola quien quiera que seas");
// }

/**
 * IF - ELSE IF
 */

// const nombre = "Marcos";
//
// if (nombre == "Lautaro") {
//     console.log("Hola Lautaro");
// } else if (nombre == "Pepe") {
//     console.log("Hola pepe");
// } else if (nombre == "Juan") {
//     console.log("Hola Juan");
// } else {
//     console.log("Hola persona que no es Lautaro, ni Juan ni Pepe");
// }

/**
 * EJEMPLOS IF
 */

// const nombre = prompt("Ingrese su nombre");
// const edad = parseInt(prompt("Ingrese la edad"));
//
// if (edad < 18) {
//     alert("Acceso prohibido");
// } else {
//     alert("Bienvenido " + nombre);
// }

/**
 * EJEMPLO COMPARANDO EL NaN
 */

// const nombre = prompt("Ingrese su nombre");
// const edad = parseInt(prompt("Ingrese la edad"));
//
// if(isNaN(edad)) {
//     alert("Ingrese un número válido");
// } else {
//     if (edad < 18) {
//         alert("Acceso prohibido");
//     } else {
//         alert("Bienvenido " + nombre);
//     }
// }

/**
 * EJEMPLO 2
 * IF
 */

// const numero1 = parseFloat(prompt("Ingrese numero 1"));
// const numero2 = parseFloat(prompt("ingrese número 2"));
//
// const resultado = numero1 + numero2;
//
// // if (resultado > 10) {
// //     alert("El resultado es mayor que 10");
// // } else {
// //     alert("El resultado no es mayor a 10");
// // }
//
// if (resultado < 10) {
//     alert("El resultado es menor que 10");
// } else if(resultado < 20) {
//     alert("El resultado es menor que 20");
// } else if(resultado < 30) {
//     alert("El resultado es menor a 30");
// } else {
//     alert("El resultado es mayor que 30");
// }

/**
 * VARIABLES BOOLEANAS
 */

// const booleana = false;
//
// if (booleana) {
//     console.log("La variable es true");
// }

// const numero = 15;
// // const esNumero10 = (numero == 10);
// const esMayorA20 = (numero > 20);
//
// if (esMayorA20) {
//
// }
//
// // ..
// // ..
//
// if (esMayorA20) {
//
// }

/**
 * ES DISTINTO
 */

// const numero1 = 15;
// const numero2 = 15;

// if (numero1 == numero2) {
//     console.log("Son iguales");
// }

// if (numero1 != numero2) {
//     console.log("Es distinto");
// }

/**
 * ESTRICTAMENTE IGUAL Y ESTRICTAMENTE DISTINTO
 */

// const numero1 = 15;
// const numero2 = 20;
//
// if (numero1 == numero2) {
//     console.log("Son iguales");
// }
//
// if (numero1 === numero2) {
//     console.log("Son estrictamente iguales");
// } else {
//     console.log("No son estrictamente iguales");
// }

// const numero1 = 15;
// const numero2 = "15";
//
// if (numero1 != numero2) {
//     console.log("Son distintos");
// } else {
//     console.log("No son distintos");
// }
//
// if (numero1 !== numero2) {
//     console.log("Son estrictamente distintos");
// }

/**
 * AND Y OR
 */

// AND

// const nombre = "Pepe";
// const edad = 25;
//
// if ( (nombre == "Pepe") && (edad == 20) ) {
//     console.log("El nombre es Pepe y la edad es 20");
// }

// OR

// const nombre = "Marcos";
//
// if ( (nombre == "Juan") || (nombre == "Pedro") ) {
//     console.log("Bienvenido Juan y Pedro");
// }

/**
 * EJEMPLO CON AND Y OR
 */

// const nombre = prompt("Ingrese un nombre"); // Pedro o Juan
// const edad = parseInt(prompt("Ingrese la edad")); // >= 18
//
// if (
//     (nombre == "Juan" || nombre == "Pedro") &&
//     edad >= 18
// ) {
//     console.log("Bienvenido " + nombre + " al sistema");
// } else {
//     console.log("Acceso denegado");
// }

/**
 * OPERADOR NOT
 */

// const numero = 10;
//
// const esNumero10 = (numero === 10);
// const noEsNumero10 = !esNumero10;
//
// console.log(esNumero10);
// console.log(noEsNumero10);

// Si el número es igual a 10
// if (esNumero10) {
//     console.log("Es numero 10");
// }

// ..
// ..

// Si el número no es igual a 10
// if (!esNumero10) {
//     console.log("No es número 10");
// }

