import React from 'react';

const saludar = function(nombre: string): string{
    return `Hola ${nombre}!`;
}

const saludar2 = (nombre: string): string =>{
    return `Hola ${nombre}!`;
}

const saludar3 = (nombre: string): string => `Hola ${nombre}!`;

console.log(saludar('Diego'));
console.log(saludar2('Diego'));
console.log(saludar3('Diego'));

const getUser = () => ({uid: 'ABC123', username: 'Goku'});


const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre: string) => ({uid: 'ABC456', username: nombre});

const usuarioActivo = getUsuarioActivo('Diego');
console.log(usuarioActivo);