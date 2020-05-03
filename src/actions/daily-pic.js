
import { dayImgUrl, API_KEY, fetchHeader } from './../constants';
import { GET_DAILY } from './action-types';

export const getDaily = () => {
    return async dispatch => {
        try {
            const response = await fetch(dayImgUrl + API_KEY, fetchHeader)
            const result = await response.json()
            dispatch({
                type: GET_DAILY,
                payload: result
            })
        }
        catch (e) {
            console.error(e)
        }
    }
}