import { fireEvent, render, screen } from "@testing-library/react";
import {MultipleCustomHooks} from '../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch.ts');
jest.mock('../../src/hooks/useCounter.ts');

const mockUseCounter = useCounter as jest.Mock;
const mockUseFetch = useFetch as jest.Mock;

beforeAll(() => {
    mockUseCounter.mockImplementation(() => ({counter: 1, increment: mockIncrement, decrement: mockDecrement}));
    mockUseFetch.mockImplementation(() => ({data: {author: 'Diego', text: 'Hola Mundo'}, isLoading: false, hasError: null}));
});

describe('Pruebas en <MultipleCustomHooks/>', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: undefined,
            isLoading: true,
            hasError: null
        });

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 0,
            increment: mockIncrement,
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Random Famous Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();

    });

    test('debe de mostrar un Quote', () => {
        
        useFetch.mockReturnValue({
            data: [{author: 'Diego', text: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 0,
            increment: mockIncrement,
        });
 
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Diego')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe de llamar la funcion de incrementar', () => {

        const mockIncrement = jest.fn();

        useFetch.mockReturnValue({
            data: [{author: 'Diego', text: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        useCounter.mockReturnValue({
            counter: 0,
            increment: mockIncrement,
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);
        
        expect(mockIncrement).toHaveBeenCalled();
    });
});