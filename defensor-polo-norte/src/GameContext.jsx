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

        else if (action.type == 'BUY_MULTIPLIER' && state.caramels >= state.multiplierPrice) {
           



        }

         else if (action.type == 'NEXT_WAVE' && state.caramels >= state.multiplierPrice) {
            outputState = {
                ...state,
                damagePerShot: state.damagePerShot + 1,
                caramels: state.caramels - state.multiplierPrice,
                multiplierPrice: Math.round(state.multiplierPrice * 1.2)
            }



        }

    }


        const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE)


        return (
            <GameContext.Provider value={{ state, dispatch }}>
                {children}
            </GameContext.Provider>
        );


    }

