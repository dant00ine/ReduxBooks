import { combineReducers } from 'redux';
import ClassesReducer from './classes';
import ActiveClass from './chosen_class';

// assign one reducer for each key
// responsible for that piece of application state
const rootReducer = combineReducers({

    classes: ClassesReducer,
    activeClass: ActiveClass

});

export default rootReducer;
