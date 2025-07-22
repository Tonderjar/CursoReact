import React from 'react';

const activo = true;

// let mensaje: string;

// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

// const mensaje = (activo) ? 'Activo' : 'Inactivo';

const mensaje = activo && 'Activo';

console.log(mensaje);