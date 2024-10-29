/**
 * FUNCIONES
 */

// function imprimirNombre() {
//     console.log("Hola Juan!");
// }
//
// imprimirNombre();

/**
 * PARAMETROS
 */

// function imprimirNombre(nombreAImprimir) {
//     console.log("Hola " + nombreAImprimir + "!");
// }
//
// const nombre = prompt("Ingrese un nombre");
// imprimirNombre(nombre);

// function sumar(numero1, numero2) {
//     console.log(numero1);
//     console.log(numero2);
//
//     const resultado = numero1 + numero2;
//
//     console.log("La suma es: " + resultado);
// }

// const numerito1 = 10;
// const numerito2 = 30;
//
// sumar(numerito1, numerito2);
// sumar(50, 10);

// ...

// sumar(10);

/**
 * RETURN
 */

// Funciones
// function obtenerSaludo(nombre) {
//     if(nombre === "Mark") {
//         return "Hello";
//     } else if(nombre === "Paulinho") {
//         return "Bom dia";
//     } else {
//         return "Hola";
//     }
// }
//
// function saludar(nombre) {
//     const saludo = obtenerSaludo(nombre);
//
//     console.log(saludo + " " + nombre + "!");
// }

// Inicio del programa
// const nombre = prompt("Ingrese su nombre");
//
// saludar(nombre);

/**
 * EJEMPLO DE RETURN 2
 */

// function multiplicar(numero1, numero2) {
//     const resultado = numero1 * numero2;
//
//     return resultado;
// }
//
// function suma(numero1, numero2) {
//     const resultado = numero1 + numero2;
//
//     return resultado;
// }
//
// const resultadoSuma = suma(10, 30);
// const resultadoMultiplicacion = multiplicar(resultadoSuma, 2);
//
// console.log(resultadoSuma);
// console.log(resultadoMultiplicacion);

/**
 * SCOPE
 */

// const nombre = "Pepe";
// const edad = 40;
//
// if (nombre === "Pepe") {
//
//     const edad = 20;
//
//     if(edad === 20) {
//
//         const edad = 30;
//
//         console.log(nombre);
//         console.log(edad);
//     }
// }

// Scope en funciones
// function sumar(numero1, numero2) {
//     const resultado = numero1 + numero2;
//     return resultado;
// }
//
// function restar(numero1, numero2) {
//     const resultado = numero1 - numero2;
//     return resultado;
// }
//
// console.log(sumar(10, 20));
// console.log(restar(20, 10));

// const num = 5;
//
// switch(num) {
//     case 5:
//         const num = 10;
//         console.log(num);
//         break;
// }

/**
 * FUNCIONES ANONIMAS
 */

// const saludar = function (nombre) {
//     console.log("Hola " + nombre);
// }

/**
 * FUNCIONES FLECHAS
 */

// Forma vieja
// const saludar = function (nombre) {
//     console.log("Hola " + nombre);
// }

// Forma con función flecha
// const saludar = (nombre) => {
//     console.log("Hola " + nombre);
// }

//
// saludar("Juan");

/*
    FUNCIÓN FLECHA CON RETURN
 */

// const suma = (a, b) => a + b;
// const suma = (a, b) => {
//     a = a * 2;
//     b = b * 2;
//
//     return a + b;
// }

// console.log(suma(10, 30));