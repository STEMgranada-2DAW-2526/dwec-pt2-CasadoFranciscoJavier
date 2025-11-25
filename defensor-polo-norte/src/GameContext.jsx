import { createContext, useEffect, useReducer } from 'react';

export const GameContext = createContext();

const INITIAL_STATE = {
    damageDealt: 0,
    waveGoal: 100,
    numeroOleada: 1,
    caramels: 20,
    damagePerShot: 1,
    autoShotsPerSecond: 1,
    upgrades: []
};

export function GameProvider({ children }) {

    function gameReducer(state, action) {
         let outputState = state;

        if (action.type == 'CLICK_SHOOT') {
         const newDamageDealt = state.damageDealt + state.damagePerShot;
         outputState = { ...state, damageDealt: newDamageDealt };
         if (newDamageDealt <= state.waveGoal) {
            outputState = { ...state, caramels: state.caramels + 10,  damageDealt: waveGoal };
         }
        }

         if (action.type == 'AUTO_SHOOT') {
         const newDamageDealt = state.damageDealt + state.autoShotsPerSecond;
         outputState = { ...state, damageDealt: newDamageDealt };
         if (newDamageDealt <= state.waveGoal) {
            outputState = { ...state, caramels: state.caramels + 10, damageDealt: waveGoal };
         }
        }

        if (action.type == 'BUY_MULTIPLIER' && state.caramels >= sta) {
         const newDamageDealt = state.damageDealt + state.autoShotsPerSecond;
         outputState = { ...state, damageDealt: newDamageDealt };
         if (newDamageDealt <= state.waveGoal) {
            outputState = { ...state, caramels: state.caramels + 10, damageDealt: waveGoal };
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

