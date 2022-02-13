import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (number = 1) => { // accepting number as parameter 
    return {
        type : BUY_CAKE,
        payload: number
    }}
