// const peticion = fetch("https://rickandmortyapi.com/api/character");
//
// function renderizarPersonajes(personajes) {
//     const container = document.getElementById("container");
//
//     for(const personaje of personajes) {
//         container.innerHTML += `
//             <div class="personaje">
//                 <h3>${personaje.name}</h3>
//                 <h5>${personaje.species}</h5>
//             </div>
//         `;
//     }
// }
//
// let siguientePagina = "";
//
// const siguiente = document.getElementById("siguiente");
//
// siguiente.addEventListener("click", () => {
//     fetch(siguientePagina).then( (response) => {
//         return response.json();
//     }).then( (json) => {
//         siguientePagina = json.info.next;
//         renderizarPersonajes(json.results);
//     });
// });
//
// Forma 1
// peticion.then( (response) => {
//     const body = response.json();
//
//     body.then( (json) => {
//         console.log(json);
//     });
// });
//
// Forma 2
// peticion.then( (response) => {
//     return response.json();
// }).then( (json) => {
//
//     siguientePagina = json.info.next;
//
//     renderizarPersonajes(json.results);
// });

/**
 * POST
 */

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({
//         title: 'Titulo del post',
//         body: 'Body del post',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// }).then( (response) => {
//     return response.json();
// }).then( (json) => {
//     console.log(json);
// })

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: "DELETE",
// }).then( (response) => {
//     return response.json();
// }).then( (json) => {
//     console.log(json);
// })

/**
 * ASYNC-AWAIT
 */

// Funciones
// function renderizarPersonajes(personajes) {
//     console.log("Renderizar personajes");
//
//     const container = document.getElementById("container");
//
//     for(const personaje of personajes) {
//         container.innerHTML += `
//             <div class="personaje">
//                 <h3>${personaje.name}</h3>
//                 <h5>${personaje.species}</h5>
//             </div>
//         `;
//     }
// }
//
// async function ejecutarRequest() {
//     // Sin async await
//     // fetch("https://rickandmortyapi.com/api/character")
//     //     .then( (response) => {
//     //         return response.json();
//     //     })
//     //     .then( (json) => {
//     //
//     //         siguientePagina = json.info.next;
//     //
//     //         renderizarPersonajes(json.results);
//     //     });
//
//     // Con async await
//     const response = await fetch("https://rickandmortyapi.com/api/character");
//     const json = await response.json();
//
//     siguientePagina = json.info.next;
//     renderizarPersonajes(json.results);
//
//     // console.log("asd");
// }
//
// // Inicio del programa
// // let siguientePagina = "";
// //
// // const siguiente = document.getElementById("siguiente");
// //
// // siguiente.addEventListener("click", () => {
// //     fetch(siguientePagina).then( (response) => {
// //         return response.json();
// //     }).then( (json) => {
// //         siguientePagina = json.info.next;
// //         renderizarPersonajes(json.results);
// //     });
// // });
// //
// ejecutarRequest();

/**
 * ARCHIVOS JSON
 */

fetch("/json/datos.json")
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        console.log(json);
    })