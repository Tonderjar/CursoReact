import {describe, expect, jest, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react'
import {AddCategory} from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
        // screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});