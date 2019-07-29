import { combineReducers } from 'redux';
import friendsReducer from './friendsReducer';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';


const rootReducer = combineReducers({
    loginReducer, 
    homeReducer,
    friendsReducer
});

export default rootReducer;

