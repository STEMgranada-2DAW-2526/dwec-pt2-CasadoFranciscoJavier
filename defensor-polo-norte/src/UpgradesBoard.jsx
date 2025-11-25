import { useContext } from 'react';
import { GameContext } from './GameContext';


export default function UpgradesBoard() {
    const { state, dispatch } = useContext(GameContext);

    return (


        <>
            <div className='row justify-content-center'>
                <h2 className='col-12'>Mejoras</h2>
            </div>

            <button
                    className='col-md-3 col-12 btn btn-warning'
                    onClick={() => dispatch({ type: 'BUY_MULTIPLIER' })}
                    disabled={state.caramels < state.multiplierPrice}>
                    <img className='img-fluid' src={state.multiplicador} />
                
                    Multiplicador
                    <br />
                    Nivel: {state.damagePerShot}
                    <br />
                    {state.multiplierPrice} caramelos
                    <br />
                    <small>(+1 daño por clic)</small>
                </button>

            

            <div className='row justify-content-center'>
                <button
                    className='col-md-3 col-12 btn btn-primary'
                    onClick={() => dispatch({ type: 'TURRON' })}
                    disabled={state.caramels < state.precioDanioClic}>
                    <img className='img-fluid' src={state.canion_turron} />
                
                    Cañón de turron explosivo
                    <br />
                    Nivel: {state.danioPorClick}
                    <br />
                    {state.precioDanioClic} caramels
                    <br />
                    <small>(+1 daño por clic)</small>
                </button>

                <button
                    className='col-md-3 col-12 btn btn-primary'
                    onClick={() => dispatch({ type: 'COMPRAR_DANIO_SEGUNDO' })}
                     disabled={state.caramels < state.precioDanioClic}>
                    <img className='img-fluid' src={state.reno_lanza_cohetes} />

                    Renos lanzamisiles
                    <br />
                    Nivel: {state.danioPorSegundo}
                    <br />
                    {state.precioDanioSegundo} caramels
                    <br />
                    <small>(+1 daño/segundo)</small>
                </button>

                <button
                    className='col-md-3 col-12 btn btn-primary'
                    onClick={() => dispatch({ type: 'COMPRAR_MEGA_CLIC' })}
                     disabled={state.caramels < state.precioDanioClic}>
                    <img className='img-fluid' src={state.arbol_laser} />

                   Árbol de Navidad Láser
                    <br />
                    50 caramels
                    <br />
                   
                    {state.megaClicActivo && (
                        <>
                            <br />
                            <strong>ACTIVO: {state.megaClicDuracion}s</strong>
                        </>
                    )}
                </button>
            </div>
        </>
    )
}