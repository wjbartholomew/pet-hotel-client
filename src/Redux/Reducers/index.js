import { combineReducers } from 'redux';
import petsReducer from './petsReducer';
import ownersReducer from './ownersReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    ownersReducer, // contains registrationMessage and loginMessage
    petsReducer, // will have a value of 'login' or 'registration' to control which screen is shown
   
});

export default rootReducer;