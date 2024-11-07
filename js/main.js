/**
 * ABSTRACCIÓN
 */

// function sumarRango(inicio, fin) {
//     let total = 0;
//
//     for(let i = inicio; i <= fin; i++) {
//         total += i;
//     }
//
//     return total;
// }
//
// const resultado = sumarRango(10, 50);
//
// console.log(resultado);

/**
 * RETORNAR FUNCIONES
 */

// Forma sin funciones de órden superior
// function descuentoDel15(total) {
//     return total * 0.15;
// }
//
// function descuentoDel20(total) {
//     return total * 0.20;
// }
//
// function descuentoDel50(total) {
//     return total * 0.50;
// }

// Función que retorne funciones
// function generarDescuento(porcentaje) {
//     return (total) => total * porcentaje;
// }
//
// const descuentoDel15 = generarDescuento(0.15); // (total) => total * 0.15;
// const descuentoDel20 = generarDescuento(0.20); // (total) => total * 0.20;
// const descuentoDel50 = generarDescuento(0.50); // (total) => total * 0.50;
//
// console.log(descuentoDel15(100));
// console.log(descuentoDel20(100));
// console.log(descuentoDel50(100));

/**
 * RECIBIR FUNCION COMO PARÁMETRO
 */

// Sin recibir función
// function saludarEnEspaniol(nombre) {
//     return 'Hola! Cómo estás? ' + nombre;
// }
//
// function saludarEnIngles(nombre) {
//     return 'Hey! How are you? ' + nombre;
// }
//
// function saludarEnPortugues(nombre) {
//     return 'Salve ' + nombre;
// }

// Función que recibe funciones
// function saludar(saludo, nombre) {
//     return saludo() + nombre;
// }
//
// const saludoEnEspaniol = saludar(
//     () => 'Hola! Cómo estás? ',
//     "Pepe",
// );
//
// console.log(saludoEnEspaniol);

/*
    OTRO EJEMPLO
 */

// function porCadaUno(arr, fn) {
//     for (const el of arr) {
//         fn(el);
//     }
// }
//
// const numeritos = [1, 2, 3, 4];

// porCadaUno(numeritos, (n) => console.log(n));
// porCadaUno(numeritos, (n) => console.log(n * 2));

/**
 * METODOS DE ÓRDEN SUPERIOR
 */

/**
 * FOR EACH
 */

// const nombres = ["Pepe", "Juan", "Matias"];
//
// nombres.forEach( (el) => {
//     console.log("Hola! " + el);
// })

// Ejemplo 2
// const numeros = [1, 2, 3, 4, 5];
// let total = 0;
//
// numeros.forEach( (el) => {
//     total += el;
// });
//
// console.log(total);

/*
    OTRA FORMA
 */
// function saludar(nombre) {
//     console.log("Hola! " + nombre);
// }
//
// const saludar = (nombre) => {
//     console.log("Hola! " + nombre);
// }
// nombres.forEach(saludar);

/**
 * FIND
 */

// const productos = [
//     {
//         nombre: "Tomates",
//         precio: 1500,
//         vendido: true,
//     },
//     {
//         nombre: "Lechuga",
//         precio: 2000,
//         vendido: false,
//     },
//     {
//         nombre: "Papa",
//         precio: 3000,
//         vendido: true,
//     }
// ];
//
// const lechuga = productos.find( (el) => {
//     return el.nombre === "Lechuga";
// });
// const papa = productos.find( (el) => {
//     return el.nombre === "Papa";
// });
// const yogurt = productos.find( (el) => {
//     return el.nombre === "Yogurt";
// });
// const vendido = productos.find( (el) => {
//     return el.vendido;
// });
//
// console.log(vendido);

/**
 * FILTER
 */

// const productos = [
//     {
//         nombre: "Tomates",
//         precio: 1500,
//         vendido: true,
//     },
//     {
//         nombre: "Lechuga",
//         precio: 2000,
//         vendido: false,
//     },
//     {
//         nombre: "Papa",
//         precio: 3000,
//         vendido: true,
//     }
// ];
//
// const vendidos = productos.filter( (el) => {
//     return el.vendido;
// });
// const precioMayorA5000 = productos.filter( (el) => {
//     return el.precio > 5000;
// });

/**
 * SOME
 */

// const productos = [
//     {
//         nombre: "Tomates",
//         precio: 1500,
//         vendido: true,
//     },
//     {
//         nombre: "Lechuga",
//         precio: 2000,
//         vendido: false,
//     },
//     {
//         nombre: "Papa",
//         precio: 3000,
//         vendido: true,
//     }
// ];

// const estaVendido = productos.some( (el) => {
//     return el.vendido;
// });

// const precioMayora5000 = productos.some( (el) => {
//     return el.precio > 5000;
// });
//
// console.log(precioMayora5000);

/**
 * MAP
 */

// const productos = [
//     {
//         nombre: "Tomates",
//         precio: 1500,
//         vendido: true,
//     },
//     {
//         nombre: "Lechuga",
//         precio: 2000,
//         vendido: false,
//     },
//     {
//         nombre: "Papa",
//         precio: 3000,
//         vendido: true,
//     }
// ];
//
// const nombresDeProductos = productos.map( (el) => {
//     return el.nombre;
// });
//
// const nuevosProductos = productos.map( (el) => {
//      // el.precio = el.precio * 1.20;
//
//      return {
//          nombre: el.nombre,
//          precio: el.precio * 1.20,
//          vendido: el.vendido,
//      };
// });
//
// console.log(productos);
// console.log(nuevosProductos);

/**
 * REDUCE
 */

// const productos = [
//     {
//         nombre: "Tomates",
//         precio: 1500,
//         vendido: true,
//     },
//     {
//         nombre: "Lechuga",
//         precio: 2000,
//         vendido: false,
//     },
//     {
//         nombre: "Papa",
//         precio: 3000,
//         vendido: true,
//     }
// ];
//
// const total = productos.reduce( (acc, el) => {
//     return acc + el.precio;
// }, 0);
//
// console.log(total);

/**
 * SORT
 */

const productos = [
    {
        nombre: "Tomates",
        precio: 1500,
        vendido: true,
    },
    {
        nombre: "Lechuga",
        precio: 2000,
        vendido: false,
    },
    {
        nombre: "Papa",
        precio: 3000,
        vendido: true,
    },
    {
        nombre: "Yogurt",
        precio: 2500,
        vendido: false,
    },
    {
        nombre: "lEcHe",
        precio: 1000,
        vendido: true,
    },
    {
        nombre: "Albahaca",
        precio: 5000,
        vendido: false,
    }
];

// Menor a mayor
// productos.sort( (a, b) => {
//     if (a.precio > b.precio) {
//         return 1;
//     } else if(a.precio < b.precio) {
//         return -1;
//     }
//
//     return 0;
// });

// Mayor a menor
// productos.sort( (a, b) => {
//     if (a.precio < b.precio) {
//         return 1;
//     } else if(a.precio > b.precio) {
//         return -1;
//     }
//
//     return 0;
// });

// Ordenar por strings de menor a mayor
productos.sort( (a, b) => {
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
    } else if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1;
    }

    return 0;
});

console.log(productos);