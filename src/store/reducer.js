const initialState = {
	age: 21
}

const reducer = (state=initialState,action) => {
    const newState = {...state};
    
    switch (action.type){
        case "AGE_UP":
            newState.age++;
            break;
        case "AGE_DOWN":
            newState.age--;
            break;
    }
    // if(action.type === 'CHANGE_NA{ME'){
    //     return{
    //         ...state,
    //         name:action.payload
    //     }
    // }
    return newState;
}

export default reducer;