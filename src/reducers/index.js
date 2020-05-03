import { combineReducers } from "redux";
import { marsGetter } from './marsGetter';
import { dailyGetter } from './dailyGetter';


export const rootReducer = combineReducers({
    mars: marsGetter,
    daily: dailyGetter,
})