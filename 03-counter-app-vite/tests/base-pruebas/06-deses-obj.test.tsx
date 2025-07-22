import {usContext} from '../../src/base-pruebas/06-deses-obj'

describe('Pruebas en 06-deses-obj', () => { 
    
    test('usContext debe retornar un objeto', () => {
        const testUser = {
            clave: 123,
            nombre: 'Diego',
            edad: 25,
            rango: 'Capitan'
        }

        const user = usContext(testUser);

        expect(user).toStrictEqual({
            nombreClave: 123,
            anios: 25,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    });

})