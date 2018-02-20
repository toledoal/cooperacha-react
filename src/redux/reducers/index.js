import { combineReducers } from 'redux'
import { sessions } from './sessions';
import { users }  from './users';

export default combineReducers({
    sessions,
    users
});