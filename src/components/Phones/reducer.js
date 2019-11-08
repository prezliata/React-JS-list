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
		case 'GET_SORT_PHONES':
			let phones = [ ...action.payload ];
			return {
				...state,
				phonesArr: phones
			};
		default:
			return state;
	}
};

export default mainReducer;
