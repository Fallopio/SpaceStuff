
import { GET_PICS_OF_MARS } from './../actions/action-types';

const initialState = []

export const marsGetter = (state = initialState, action) => {
    
    switch (action.type) {
        case (GET_PICS_OF_MARS): {
            return [...action.payload]
        }
        default:
            return state
    }
}