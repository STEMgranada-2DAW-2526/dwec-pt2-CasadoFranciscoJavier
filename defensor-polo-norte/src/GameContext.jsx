import { createContext, useEffect, useReducer } from 'react';

import arbol_laser from "./assets/arbol_laser.png";
import canion_turron from "./assets/canion_turron.png";
import caramelo_sangriento from "./assets/caramelo_sangriento.png";
import multiplicador from "./assets/multiplicador.png";
import reno_lanza_cohetes from "./assets/reno_lanza_cohetes.png";
import torre from "./assets/torre.png";

export const GameContext = createContext();

const INITIAL_STATE = {
    damageDealt: 0,
    waveGoal: 100,
    numeroOleada: 1,
    caramels: 20,
    damagePerShot: 1,
    autoShotsPerSecond: 1,
    upgrades: [],

    multiplierPrice: 10,
    PriceTurron: 15,
    PriceRenoExplosivo: 30,
    PriceNavidadLaser: 50,


    arbol_laser,
    canion_turron,
    caramelo_sangriento,
    multiplicador,
    reno_lanza_cohetes,
    torre

};

export function GameProvider({ children }) {

    function gameReducer(state, action) {
        let outputState = state;

        if (action.type == 'CLICK_SHOOT') {
            const newDamageDealt = state.damageDealt + state.damagePerShot;
            outputState = { ...state, damageDealt: newDamageDealt };
            if (newDamageDealt >= state.waveGoal) {
                outputState = { ...state, caramels: state.caramels + 10, damageDealt: state.waveGoal };
            }
        }

        else if (action.type == 'AUTO_SHOOT') {
            const newDamageDealt = state.damageDealt + state.autoShotsPerSecond;
            outputState = { ...state, damageDealt: newDamageDealt };
            if (newDamageDealt >= state.waveGoal) {
                outputState = { ...state, caramels: state.caramels + 10, damageDealt: state.waveGoal };
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

        else if (action.type == 'BUY_DAMAGE:TURRON' && state.caramels >= state.PriceTurron) {
           
             outputState = {
                ...state,
                autoShotsPerSecond: state.autoShotsPerSecond + 2,
                caramels: state.caramels - state.PriceTurron,
               
            }

        



        }

        else if (action.type == 'BUY_DAMAGE:RENO' && state.caramels >= state.PriceRenoExplosivo) {
           
             outputState = {
                ...state,
                autoShotsPerSecond: state.autoShotsPerSecond + 5,
                caramels: state.caramels - state.PriceRenoExplosivo,
               
            }


        }

        else if (action.type == 'BUY_DAMAGE:LASER' && state.caramels >= state.PriceNavidadLaser) {
           
             outputState = {
                ...state,
                autoShotsPerSecond: state.autoShotsPerSecond + 10,
                caramels: state.caramels - state.PriceNavidadLaser,
               
            }


        }


         else if (action.type == 'NEXT_WAVE' && state.caramels >= state.multiplierPrice) {
            outputState = {
                ...state,
                damagePerShot: state.damagePerShot + 1,
                waveGoal: Math.round(state.waveGoal * 1.10),
                numeroOleada: state.numeroOleada + 1,
                damageDealt: 0
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
      
        if (state.damageDealt >= state.waveGoal ) {
            dispatch({ type: 'NEXT_WAVE' })
        }
    }, [state.damageDealt]);


        return (
            <GameContext.Provider value={{ state, dispatch }}>
                {children}
            </GameContext.Provider>
        );


    }

