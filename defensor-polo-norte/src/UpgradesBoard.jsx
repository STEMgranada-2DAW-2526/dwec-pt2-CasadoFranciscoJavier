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
                    onClick={() => dispatch({ type: 'BUY_DAMAGE:TURRON' })}
                    disabled={state.caramels < state.PriceTurron}>
                    <img className='img-fluid' src={state.canion_turron} />
                
                    Cañón de turron explosivo
                    <br />
                 
                    {state.PriceTurron} caramels
                    <br />
                    <small>(+2 daño/segundo)</small>
                </button>

                <button
                    className='col-md-3 col-12 btn btn-primary'
                    onClick={() => dispatch({ type: 'BUY_DAMAGE:RENO' })}
                     disabled={state.caramels < state.PriceRenoExplosivo}>
                    <img className='img-fluid' src={state.reno_lanza_cohetes} />

                    Renos lanzamisiles
                    <br />
                    Nivel: {state.autoShotsPerSecond}
                    <br />
                    {state.PriceRenoExplosivo} caramels
                    <br />
                    <small>(+5 daño/segundo)</small>
                </button>

                <button
                    className='col-md-3 col-12 btn btn-primary'
                    onClick={() => dispatch({ type: 'BUY_DAMAGE:LASER' })}
                     disabled={state.caramels < state.PriceNavidadLaser}>
                    <img className='img-fluid' src={state.arbol_laser} />

                   Árbol de Navidad Láser 
                    <br />
                    Nivel: {state.autoShotsPerSecond}
                    <br />
                    {state.PriceNavidadLaser} caramels
                    <br />
                    <small>(+10 daño/segundo)</small>
                </button>
            </div>
        </>
    )
}