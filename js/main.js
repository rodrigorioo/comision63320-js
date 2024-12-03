/**
 * SWEET ALERT
 */

// Swal.fire({
//     title: 'Eliminar',
//     text: 'Está seguro que quiere eliminar este elemento?',
//     icon: 'error',
//     confirmButtonText: 'Sí',
//     showCancelButton: true,
//     cancelButtonText: "No",
// }).then( (result) => {
//     if(result.isConfirmed) {
//         // Elimine el elemento...
//
//         Swal.fire({
//             title: 'Éxito!',
//             text: 'Se eliminó el elemento',
//             icon: 'success',
//             confirmButtonText: 'Ok',
//         });
//     } else {
//         Swal.fire({
//             title: 'No se eliminó',
//             text: 'El elemento no se eliminó',
//             icon: 'warning',
//             confirmButtonText: 'Ok',
//         })
//     }
// })

/**
 * TOASTIFY
 */

// Toastify({
//     text: "This is a toast",
//     duration: 1000,
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "right", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     // style: {
//     //     background: "linear-gradient(to right, #00b09b, #96c93d)",
//     // },
//     onClick: function(){
//         Toastify({
//             text: "Notificacion",
//             duration: 2000,
//             newWindow: true,
//             close: true,
//             gravity: "bottom", // `top` or `bottom`
//             position: "left", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of
//         }).showToast();
//
//     } // Callback after click
// }).showToast();

/**
 * LUXON
 */

const DateTime = luxon.DateTime;

// Instanciar una fecha
// const fecha = DateTime.fromObject({
//     day: 20, month: 11, year: 2023, hour: 10, minutes: 30,
// });
//
// console.log(fecha.toString());

// Parsear de ISO
// const fechaISO = '2023-11-20T10:30:00.000-03:00';
//
// const fecha = DateTime.fromISO(fechaISO);
// console.log(fecha);

// Instanciar la fecha actual
// const fechaActual = DateTime.now();
// console.log(fechaActual);

// console.log(fechaActual.minute);

// Cantidad de días del mes
// const fechaActual = DateTime.now();
// console.log(fechaActual.daysInMonth);

// const fechaJunio = DateTime.fromObject(
//     {day: 5, month: 6, year: 2023},
// );
// console.log(fechaJunio.zoneName);

/*
    FORMATEAR FECHAS
 */

// const fechaJunio = DateTime.fromObject(
//     {day: 5, month: 6, year: 2023},
// );

// console.log(
//     fechaJunio.setLocale('es').toLocaleString(DateTime.DATE_FULL)
// )

// console.log(
//     fechaJunio.setLocale('es').toLocaleString(DateTime.DATE_HUGE)
// )

// console.log(
//     fechaJunio.toFormat('dd - LL - yyyy hh:mm:ss')
// )

/*
    TRANSFORMACION
 */

// const fechaJunio = DateTime.fromObject(
//     {day: 5, month: 6, year: 2023, hour: 10},
// );

// Agregan datos
// const nuevaFecha = fechaJunio.plus({
//     hours: 14,
//     months: 8,
//     days: 30,
// });

// Restar datos
// const nuevaFecha = fechaJunio.minus({
//     hours: 14,
//     months: 14,
// });
//
// console.log(fechaJunio.toFormat('dd/LL/yyyy hh:mm:ss'));
// console.log(nuevaFecha.toFormat('dd/LL/yyyy hh:mm:ss'));

// const nuevaFecha = fechaJunio.set({
//     day: 10,
//     year: 2024,
// });
//
// console.log(fechaJunio.toFormat('dd/LL/yyyy hh:mm:ss'));
// console.log(nuevaFecha.toFormat('dd/LL/yyyy hh:mm:ss'));

/*
    DURATION
 */

// const Duration = luxon.Duration;
//
// const tiempo = Duration.fromObject({
//     hours: 22,
//     minutes: 30,
// });
//
// const nuevoTiempo = tiempo.plus({
//     hours: 4,
//     minutes: 60,
// });
//
// console.log(tiempo.toFormat('hh:mm:ss'))
// console.log(nuevoTiempo.toFormat('hh:mm:ss'))

// console.log(
//     tiempo.toString()
// )

/*
    INTERVAL
 */

const Interval = luxon.Interval;

const fecha1 = DateTime.fromObject({
    day: 10, month: 12, year: 2024,
})
const fecha2 = DateTime.fromObject({
    day: 5, month: 11, year: 2024,
});

const interval = Interval.fromDateTimes(fecha2, fecha1);

console.log(interval.length('days'))
