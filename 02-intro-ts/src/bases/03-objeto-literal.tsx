import React from 'react';

const persona = {
    nombre: 'Diego',
    apellido: 'Lezama',
    edad: 25,
    direccion: {
        ciudad: 'Caracas',
        zip: 1080,
        lat: 11111,
        lng: 22222,
    },
};


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);