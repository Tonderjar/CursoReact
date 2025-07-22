import React from 'react';

const nombre = 'Diego';
const apellido = 'Lezama';

const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`;

console.log(nombreCompleto);

function getSaludo(nombre: string): string{
    return 'Hola ' + nombre;
}

console.log(`este es un texto: ${getSaludo(nombre)}`);