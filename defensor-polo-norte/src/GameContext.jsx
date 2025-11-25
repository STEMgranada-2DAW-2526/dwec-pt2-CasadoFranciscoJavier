import { createContext, useEffect, useReducer } from 'react';

export const GameContext = createContext();

const INITIAL_STATE = {
    damageDealt: 0,
    waveGoal: 100,
    numeroOleada: 1,
    caramels: 20,
    damagePerShot: 1,
    autoShotsPerSecond: 1,
    upgrades: [],

    multiplierPrice: 10
};

export function GameProvider({ children }) {

    function gameReducer(state, action) {
        let outputState = state;

        if (action.type == 'CLICK_SHOOT') {
            const newDamageDealt = state.damageDealt + state.damagePerShot;
            outputState = { ...state, damageDealt: newDamageDealt };
            if (newDamageDealt <= state.waveGoal) {
                outputState = { ...state, caramels: state.caramels + 10, damageDealt: waveGoal };
            }
        }

        else if (action.type == 'AUTO_SHOOT') {
            const newDamageDealt = state.damageDealt + state.autoShotsPerSecond;
            outputState = { ...state, damageDealt: newDamageDealt };
            if (newDamageDealt <= state.waveGoal) {
                outputState = { ...state, caramels: state.caramels + 10, damageDealt: waveGoal };
            }
        }

        else if (action.type == 'BUY_MULTIPLIER' && state.caramels >= state.multiplierPrice) {
            outputState = {
                ...state,
                damagePerShot: state.damagePerShot + 1,
                caramels: state.caramels - state.multiplierPrice,
                multiplierPrice: Math.round(state.multiplierPrice * 1.2)
            }
        }

        else if (action.type == 'BUY_DAMAGE:UPGRADE' && state.caramels >= state.multiplierPrice) {
           
             outputState = {
                ...state,
                numeroOleada: state.numeroOleada + 1,
                enemigosRestantes: cantidadEnemigos,
                tiempoRestante: 20
            }



        }

         else if (action.type == 'NEXT_WAVE' && state.caramels >= state.multiplierPrice) {
            outputState = {
                ...state,
                damagePerShot: state.damagePerShot + 1,
                waveGoal: state.waveGoal * 1.10
            }

        }

        return outputState;
    }

    


        const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE)

          useEffect(() => {
        let timer = setInterval(() => {
            dispatch({ type: 'AUTO_SHOOT' })
          
        }, 1000);

        return () => clearInterval(timer)
    }, []);

    useEffect(() => {
      
        if (state.damageDealt >= waveGoal ) {
            dispatch({ type: 'NEXT_WAVE' })
        }
    }, [state.damageDealt]);


        return (
            <GameContext.Provider value={{ state, dispatch }}>
                {children}
            </GameContext.Provider>
        );


    }

