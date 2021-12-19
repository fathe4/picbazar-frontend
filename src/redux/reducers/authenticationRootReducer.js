import { combineReducers } from 'redux';
import userReducer from './authenticationReducer';

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;