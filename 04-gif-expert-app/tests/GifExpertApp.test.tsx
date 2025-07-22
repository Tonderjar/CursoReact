import {describe, expect, jest, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import {GifExpertApp, categories} from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('debe cargar correctamente el estado inicial', () => {
        render(<GifExpertApp/>);
        expect(screen.getByText('GifExpertApp'));
    });
});