import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {


    const [error, setError] = useState(false);

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (busqueda.ciudad.trim() === '' || busqueda.ciudad.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setConsultar(true);


    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={busqueda.ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>

                <div className="input-field col s12">
                    <select
                        name="pais"
                        id="pais"
                        value={busqueda.pais}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione un País --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">Pais:</label>
                </div>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-blok yellow accent-4" value="Buscar Clima" />
            </div>
        </form>
    );
}


Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setConsultar: PropTypes.func.isRequired,
    setBusqueda: PropTypes.func.isRequired,
}


export default Formulario;