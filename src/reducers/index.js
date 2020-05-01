import { combineReducers } from "redux";
import { marsGetter } from './marsGetter';


export const rootReducer = combineReducers({
    mars: marsGetter,
})