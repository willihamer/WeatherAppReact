import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    });
    const [consultar, setConsultar] = useState(false);
    const [resultado, setResultado] = useState({});
    const [error, setError] = useState(false);

    const { ciudad, pais } = busqueda;


    useEffect(() => {

        if (consultar) {
            const consultarApi = async () => {

                const appId = '';
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

                const response = await fetch(url);
                const result = await response.json();

                setResultado(result);
                setConsultar(false);

                console.log(response.status);

                if (response.status === 404) {
                    setError(true);
                } else {
                    setError(false);
                }
            }
            consultarApi();

        }
        // eslint-disable-next-line
    }, [consultar]);

    let componente;
    if (error) {
        componente = <Error mensaje="No hay Resultados" />;
    } else {
        componente = <Clima
            resultado={resultado}
        />;
    }


    return (
        <Fragment>
            <Header
                titulo="Clima React App"
            />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Formulario
                                busqueda={busqueda}
                                setBusqueda={setBusqueda}
                                setConsultar={setConsultar}
                            />
                        </div>
                        <div className="col m6 s12">
                            {componente}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
