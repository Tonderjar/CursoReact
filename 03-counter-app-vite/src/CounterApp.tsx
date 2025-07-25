import { useState } from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)
 
    const handleAdd = (event: React.MouseEvent): void => {
        setCounter((c: number) => c + 1);
    }

    const handleSubstract = (): void => setCounter(counter - 1);   

    const handleReset = (): void => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubstract}> -1 </button>
            <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps ={
    value: 0,
}

export default CounterApp;