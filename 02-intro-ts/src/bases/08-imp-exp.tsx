import React from 'react';
import heroes, {owners}  from '../data/heroes';

// console.log(owners);

export const getHeroeById = (id: number): string | undefined => {
    return heroes.find((heroe) => heroe.id === id)?.name;
}
// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner: string) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));