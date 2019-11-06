let initialState = {
	phonesArr: [],
	name: 'ss'
};

const mainReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case 'GET_PHONES':
			return {
				...state,
				phonesArr: action.payload
			};
		case 'ON_CHANGE_NAME':
			return {
				name: action.payload
			};
		default:
			return state;
	}
};

export default mainReducer;
