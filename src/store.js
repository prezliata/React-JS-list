import { createStore } from 'redux';

import allReducer from './reducers';
import initialState from './reducers/initialState';





const store = createStore(
	allReducer,/* preloadedState, */
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
