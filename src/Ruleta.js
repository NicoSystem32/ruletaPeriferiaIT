import React, { useState } from 'react';
import logo from './assets/periferia-it-logo.png'
import logoDerecha from './assets/periferia-it-logo.png'

function Ruleta({ personas }) {
    const [ganadores, setGanadores] = useState([]);
    const [ganadorTemporal, setGanadorTemporal] = useState(null);

    const obtenerPosiblesGanadores = () => {
        return personas.filter(persona => persona.ganador === 1 && !ganadores.includes(persona.nombre.toUpperCase()));
    }

    const girarRuleta = () => {
        if (ganadores.length < 9) {
            let vecesGiradas = 0;

            const girar = () => {
                
                setGanadorTemporal(personas[Math.floor(Math.random() * personas.length)].nombre);
                vecesGiradas++;

                if (vecesGiradas < 50) { 
                    setTimeout(girar, 100);
                } else {
                    
                    const candidatos = obtenerPosiblesGanadores();
                    if (candidatos.length > 0) {
                        const seleccionado = candidatos[Math.floor(Math.random() * candidatos.length)];
                        setGanadores([...ganadores, seleccionado.nombre.toUpperCase()]);
                        setGanadorTemporal(null);
                    }
                }
            };

            girar();
        }
    }

    return (
        <>
            <div className="miContenedor">
                <h1 className="tituloRuleta">Ruleta de ganadores Periferia IT</h1>
                <img src={logo} alt="Logo de la Empresa" className="miLogo"/>
                <img src={logoDerecha} alt="Segundo Logo" className="miLogoDerecha"/>
    
                <div className="contenedorPrincipal">
                    <div className="seccionRuleta">
                        <button onClick={girarRuleta} className="miBoton">Girar</button> 
                        <div className="flecha"></div>
                        <div className={`ruletaVisual ${ganadorTemporal ? 'girando' : ''}`}>
                            <div className="sector"></div>
                            <div className="sector"></div>
                            <div className="sector"></div>
                            <div className="sector"></div>
                            <div className="sector"></div>
                            <div className="sector"></div>
                        </div>
                        {ganadorTemporal && <p className="miTextoDestacado">{ganadorTemporal}</p>}
                    </div>
                    <div className="seccionGanadores">
                    <h2 className={ganadorTemporal ? 'parpadeo' : ''}>Ganadores...</h2>
                        <ul className="miLista">
                            {ganadores.map((ganador, index) => (
                                <li key={ganador} className="miItemLista">{index + 1}. {ganador} 🎉🥳🎉</li>
                            ))}
                        </ul>
                        {ganadores.length === 9 && <p className="felicitaciones">🎉🥳¡¡¡Felicitaciones a los ganadores!!!🥳🎉</p>}
                    </div>
                </div>
            </div>
        </>
    );
    
    
}

export default Ruleta;
