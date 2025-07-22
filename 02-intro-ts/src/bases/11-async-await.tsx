import React from 'react';

const getImage = async() => {
    try{
        const apiKey = 'wQbKJLIxrZzYR4BGdIlZ3fK8XTOa5IuI';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //Manejo del eror
    }
    
}   

getImage();