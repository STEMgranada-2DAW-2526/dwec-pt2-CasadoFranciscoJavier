import { useContext } from 'react';
import { GameContext } from './GameContext';


export default function UpgradesBoard() {
        const { state, dispatch } = useContext(GameContext);

     return (
         

    <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='col-12 '>{Math.round(state.cookies)} 🍪</h1>
          <button className='col-5 btn btn-transparent' onClick={() => dispatch({ type: 'CLICK_SHOOT' })}>
            <img className='img-fluid' src={state.torre} />
          </button>
        </div>
    </div>
    )
}