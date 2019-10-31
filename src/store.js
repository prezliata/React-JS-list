import { createStore } from 'redux';

import allReducer from './reducers';

const store = createStore(
	allReducer /* preloadedState, */,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
