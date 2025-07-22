import PropTypes from 'prop-types';
import {memo} from 'react';

export const Small = memo(({value}: {value: number}) => {

    console.log('Me volvi a generar :(');

  return (
    <small>{value}</small>
  )
})

Small.propTypes = {
    value: PropTypes.number.isRequired,
}