import counterReducer from './components/Body/reducer';
import loggedReducer from './reducers/isLogged';
import { combineReducers } from 'redux';

import mainReducer from './components/Phones/reducer';

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
	phonesArr: mainReducer
});

export default allReducers;
