import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('Pruebas en 11-async-await', () => { 

    test('getImage debe retornar un error si no tenemos api key ', async() => {
        const response = await getImagen();

        expect( response).toBe('No se encontro la imagen');
    });

})