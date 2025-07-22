import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import {LoginPage} from '../../src/09-useContext/LoginPage'

describe('Pruebas en <LoginPage/>', () => {

    const user = {
        id: 1,
        name: 'Diego'
    }

    test('debe de mostrar el componente sin el usuario', () => {
    
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();

    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const buttonTag = screen.getByRole('button');
        fireEvent.click(buttonTag);
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Juan', email: 'juan@computron.com'});
    });

});