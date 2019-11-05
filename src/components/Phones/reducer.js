let initialState = {
	phonesArr: [],
	name: 'ss'
};

const mainReducer = (state = initialState, action) => {
	console.log(action);
	if (action.type === 'GET_PHONES') {
		return {
			...state,
			phonesArr: action.payload
		};
	}
	return state;
};

export default mainReducer;

