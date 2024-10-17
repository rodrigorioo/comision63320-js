// ESTE ES UN COMENTARIO DE UNA SOLA LÍNEA

/*
ESTA ES LA PRIMER LÍNEA DE UN COMENTARIO
ESTA ES LA SEGUNDA
ESTA ES LA TERCERA
 */

/**
 * VARIABLES
 */

// let edad = 30;
// let nombre;
//
// const anioDeNacimiento = 1930;
// const apellido = "Perez";

// NO ES LO MISMO 2020 EN NÚMERO
// QUE "2020" EN STRING
// const anio = 2020;
// const anio = "2020";

// let nombre = "Pepe";
//
// nombre = "Carlos"; // Nombre tiene el valor "Carlos"
// nombre = "Juan"; // Nombre tiene el valor "Juan"
// nombre = 2; // Nombre tiene el valor 2

/**
 * OPERACIONES CON VARIABLES
 */

// const numero1 = 10;
// const numero2 = 30;
//
// //                  10    +    30
// const resultado = numero1 + numero2; // La variable "resultado" tenga el valor de 40
//
// const resultadoMultiplicacion = numero1 * numero2; // 300
//
// const resultadoDivision = numero2 / numero1; // 3
//
// const resultadoResta = numero2 - numero1; // 20
//
// const resultado2 = 600 * 700 / 20;


// const cadena1 = "Hola";
// const cadena2 = "Como estás";
//
// //             "Hola"  + "Cómo estás"
// const saludo = cadena1 + cadena2; // El valor de la variable "saludo" va a ser: "HolaCómo estás"
//
// const saludo2 = cadena1 + " " + cadena2; // "Hola Como estás"
//
// const espacio = " ";
//
// const saludo3 = cadena1 + espacio + cadena2;


// const numero1 = 30;
// const saludo = "Hola como estas";
// const numero2 = 50;
// const numero3 = 60;
// const numero4 = 70;
// const numero5 = 80;
//
// const resultado = numero1 + saludo + numero2 + numero3 + numero4 + numero5; // "30Hola como estas50607080"
//
// const resultado2 = numero1 + numero2 + numero3 + numero4 + numero5;

/**
 * CONSOLE.LOG
 */

// const numero1 = 30;
// const saludo = "Hola como estas";
// const numero2 = 50;
// const numero3 = 60;
// const numero4 = 70;
// const numero5 = 80;
//
// const resultado = numero1 + saludo + numero2 + numero3 + numero4 + numero5; // "30Hola como estas50607080"
//
// console.log(resultado);
//
// const resultado2 = numero1 + numero2 + numero3 + numero4 + numero5;
//
// console.log(resultado2);

/**
 * PROMPT Y ALERT
 */

// const nombre = prompt("Ingrese un nombre");

// console.log("Bienvenido " + nombre);

// alert("Bienvenido " + nombre);
//
// console.log("Hola");

/**
 * EJEMPLO 1)
 * Pedir 3 números al usuario y calcule su suma
 */

// const numero1 = parseInt(prompt("Ingrese número 1"));
// const numero2 = parseInt(prompt("Ingrese número 2"));
// const numero3 = parseInt(prompt("Ingrese número 3"));
//
// const resultado = numero1 + numero2 + numero3;
//
// console.log("El resultado es: " + resultado);

/**
 * EJEMPLO 2)
 * Pedir 4 números y calcular el promedio
 */

// const numero1 = parseInt(prompt("Ingrese número 1"));
// const numero2 = parseInt(prompt("Ingrese número 2"));
// const numero3 = parseInt(prompt("Ingrese número 3"));
// const numero4 = parseInt(prompt("Ingrese número 4"));
//
// const sumaDeNumeros = numero1 + numero2 + numero3 + numero4;
// const promedio = sumaDeNumeros / 4;
//
// console.log("El promedio es: " + promedio);

// SI TRATO DE UTILIZAR PARSE INT CON UN VALOR QUE NO ES NUMÉRICO, ME VA A DEVOLVER NaN QUE ES UN VALOR QUE REPRESENTA ALGO QUE NO PUDO SER TRANSFORMADO A UN VALOR NUMÉRICO
// const numero = parseInt(prompt("Ingrese un número"));
//
// console.log(numero);

/**
 * EJEMPLO 3)
 * Sumar precios de un supermercado
 */

// const precio1 = parseFloat(prompt("Ingrese precio 1 del supermercado"));
// const precio2 = parseFloat(prompt("Ingrese precio 2 del supermercado"));
//
// const suma = precio1 + precio2;
//
// console.log("La suma es: " + suma);

/**
 * EJEMPLO 4)
 * Pedir un nombre y pedir un saludo
 */

// const nombre = prompt("Ingrese nombre");
// const saludo = prompt("Ingrese saludo");
//
// const saludoCompleto = saludo + " " + nombre;
//
// alert(saludoCompleto);