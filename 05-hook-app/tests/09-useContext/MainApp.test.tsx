import { fireEvent, render, screen } from "@testing-library/react";
import {MainApp} from '../../src/09-useContext/MainApp'
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp/>', () => {
    
    test('debe mostrar el HomePage ', () => {
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('Home Page')).toBeTruthy();
    });

    test('debe mostrar el LoginPage ', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );
        
        expect(screen.getByText('Login Page')).toBeTruthy();
    });

    test('debe mostrar el AboutPage ', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );
        
        expect(screen.getByText('About Page')).toBeTruthy();
    });
});