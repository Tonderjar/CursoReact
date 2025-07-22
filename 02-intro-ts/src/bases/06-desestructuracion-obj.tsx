import React from 'react';

const persona = {
    nombre: 'Diego',
    edad: 25,
    clave: 'HarryPotter',
    rango: 'Soldado',
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

type Usuario = {
    nombre: string;
    edad: number;
    clave:string;
    rango?: string;
};

const UseContext = ({nombre, edad, clave, rango = 'Capitan'}: Usuario) => {
    // console.log(edad, clave, nombre, rango);
    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 12.123,
            lng: 32.321,
        }
    }
}

const avenger = UseContext(persona);

const {nombreClave, años, latlng:{lat, lng}} = avenger;
console.log(nombreClave, años);
console.log(lat, lng);