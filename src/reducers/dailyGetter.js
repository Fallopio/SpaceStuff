import { GET_DAILY } from "../actions/action-types"

const initialState = {}

export const dailyGetter = (state = initialState, action) => {
    switch (action.type) {
        case (GET_DAILY): {
            return action.payload
        }
        default: {
            return state
        }

    }
}