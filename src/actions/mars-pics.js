import { marsApiData } from "../constants"
import { API_KEY } from './../constants';
import { GET_PICS_OF_MARS } from './action-types';



export const getMarsPics = () => {
    return async dispatch => {
        const page = Math.ceil(Math.random() * 10)
        try {
            const response = await fetch(marsApiData.url + page + API_KEY)
            const result = await response.json()
            dispatch({
                type: GET_PICS_OF_MARS,
                payload: result.photos,
            })
        }
        catch (e) {
            console.error(e)
        }
    }
}