import React from 'react';

const personajes = ['Goku', 'vegeta', 'trunks'];
const [ , , p3] = personajes;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const _useState = ( valor: any ) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = _useState('Goku');

console.log(nombre);
setNombre();

