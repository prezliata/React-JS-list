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

// const counterReduser = (state = 0, action) =>  {
//     // const newState = {...state};
//     switch (action.type) {
//       case "INCREMENT":
//         return state + action.payload;
//       case "DECREMENT":
//         return state - action.payload;
//       default:
//         return state;
//     }
//   };

//   export default counterReduser;
