import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}:{onNewCategory:(newCategory: string) => void}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}:{target:HTMLInputElement}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        // onAddCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value = {inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
