import { useContext } from 'react';
import { GameContext } from './GameContext';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Game() {
        const { state, dispatch } = useContext(GameContext);

     return (
         

    <div className='container'>
        <div className='row justify-content-center'>
                <h3 className='col-12'>Daño de oleada:</h3>
                <info>{state.damageDealt}/{state.waveGoal}</info>
            </div>
            <div className='row justify-content-center'>
                <h2 className='col-12'>Mejoras</h2>
            </div>
            <div className='row justify-content-center'>
                <h2 className='col-12'>Mejoras</h2>
            </div>
        <div className='row justify-content-center'>
          <button className='col-5 btn btn-transparent' onClick={() => dispatch({ type: 'CLICK_SHOOT' })}>
            <img className='img-fluid' src={state.torre} />
          </button>
        </div>
    </div>
    )
}