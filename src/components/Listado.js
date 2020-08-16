import React from 'react';
import Gasto from './Gasto';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => ( 
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Gasto 
                key={shortid.generate()}
                gasto={gasto} 
            />
        ))}
    </div>
);

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado

