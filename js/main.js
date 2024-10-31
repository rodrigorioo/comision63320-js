// for(let i = 0; i < 5; i++) {
//     const nombre = prompt("Ingrese el nombre");
//     const apellido = prompt("Ingrese el apellido");
//     const profesion = prompt("Ingrese la profesión");
//     const edad = parseInt(prompt("Ingrese la edad"));
//
//     const persona = {
//         nombre: nombre,
//         apellido: apellido,
//         profesion: profesion,
//         edad: edad,
//     }
// }

// Forma 1 - Creando variables para cada prompt
// const nombre = prompt("Ingrese el nombre");
// const apellido = prompt("Ingrese el apellido");
// const profesion = prompt("Ingrese la profesión");
// const edad = parseInt(prompt("Ingrese la edad"));

// // Forma 2 - Poniendo los prompt adentro del objeto
// const persona = {
//     nombre: prompt("Ingrese el nombre"),
//     apellido: prompt("Ingrese el apellido"),
//     profesion: prompt("Ingrese la profesión"),
//     edad: parseInt(prompt("Ingrese la edad")),
// }
//
// console.log(persona);

/**
 * ACCEDER PROPIEDADES DE UN OBJETO
 */

// const persona = {
//     nombre: "Pepe",
//     apellido: "Ramirez",
//     profesion: "Gasista",
//     edad: 40,
// }

// Forma 1 - Notación de punto
// console.log(persona.edad);

// Forma 2 - Notación de array
// const nombreDePropiedad = "edad";
// console.log(persona[nombreDePropiedad]);

/**
 * SETEAR PROPIEDADES DE OBJETOS
 */

// const persona = {
//     nombre: "Pepe",
//     apellido: "Ramirez",
//     profesion: "Electricista",
// }

// persona.nombre = "Juan";
// persona["nombre"] = "Pedro";
//
// persona.edad = 40;

// console.log(persona);

/**
 * CONSTRUCTORES
 */

// function Persona(nombre, apellido, profesion, edad, sexo) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.profesion = profesion;
//     this.edad = edad;
//     this.sexo = sexo;
// }
//
// const persona1 = new Persona(
//     "Pepe",
//     "Ramirez",
//     "Gasista",
//     40,
//     "Hombre",
// );
// const persona2 = new Persona(
//     "Marcos",
//     "Perez",
//     "Electricista",
//     50,
//     "Hombre",
// );

// console.log(persona1);
// console.log(persona2);

// function Producto(nombre, precio, vendido = false) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = vendido;
// }
//
// const producto = new Producto("Lechuga", 30, true);
//
// console.log(producto);

/**
 * MÉTODOS
 */

// const nombre = "Pepe";
// console.log(nombre.toUpperCase());

// const edad = 50.1238721738;
// console.log(edad.toFixed(4));
// ESTO TIRA ERROR PORQUE EL MÉTODO TO UPPERCASE ES DE LOS STRINGS SOLAMENTE
// console.log(edad.toUpperCase());

// const bool = true;
// console.log(typeof bool);

/**
 * MÉTODOS PERSONALIZADOS
 */

// function Producto(nombre, precio, vendido = false) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = vendido;
//
//     // Forma vieja
//     // this.calcularIva = function(precio) {
//     //     return precio * 0.21;
//     // }
//
//     // Forma nueva
//     this.calcularIva = () => this.precio * 0.21;
//
//     this.imprimirNombre = () => {
//         console.log("El nombre del producto es: " + this.nombre);
//     }
//
//     this.vender = () => {
//         this.vendido = true;
//     }
// }
//
// const producto = new Producto("Leche", 30);
// const producto2 = new Producto("Yogurt", 50);

// console.log(producto.calcularIva());
// console.log(producto2.calcularIva());

// producto.imprimirNombre();
// producto2.imprimirNombre();

/**
 * FOR IN
 */

// const producto = {
//     nombre: "Lechuga",
//     precio: 20,
//     vendido: true,
// }

// console.log("nombre" in producto) // true
// console.log("eqwkjeqwjke" in producto) // false

// for (const propiedad in producto) {
//     const valor = producto[propiedad];
//
//     console.log("Propiedad: " + propiedad + " - Valor: " + valor);
// }

/**
 * CLASES
 */

// class Producto {
//     constructor(nombre, precio, vendido = false) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.vendido = vendido;
//     }
//
//     calcularIva() {
//         return this.precio * 0.21;
//     }
//
//     imprimirNombre() {
//         console.log("El nombre del producto es: " + this.nombre);
//     }
//
//     vender() {
//         this.vendido = true;
//     }
// }
//
// const producto = new Producto("Leche", 30);
// const producto2 = new Producto("Yogurt", 50);
//
// console.log(producto.calcularIva());
// console.log(producto2.calcularIva());

/**
 * REFERENCIA
 */

// let a = "HOLA";
// let b = a;
//
// a = "HOLA2";
//
// console.log(a);
// console.log(b);

// let a = {
//     nombre: "Pepe",
//     edad: 20,
// }
// let b = a;
//
// // a.nombre = "Gonzalo";
// b.nombre = "Juan";
//
// console.log(a);
// console.log(b);

/**
 * OBJETOS ANIDADOS
 */

const producto = {
    nombre: "Yogurt",
    precio: 20,
    categoria: {
        nombre: "Lacteos",
        posicion: 10,
    },
    stock: {
        deposito: {
            nombre: "Zona Norte",
        },
        cantidad: 20,
    }
}

console.log(producto.stock.deposito.nombre);