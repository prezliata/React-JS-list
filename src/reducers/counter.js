const counterReduser = (state = 0, action) =>  {
    // const newState = {...state};
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state - action.payload;
      default:
        return state;
    }
  }; 

  export default counterReduser;
// const initialState = {
// 	age: 21
// }

// const reducer = (state=initialState,action) => {
//     const newState = {...state};

//     switch (action.type){
//         case "AGE_UP":
//             newState.age++;
//             break;
//         case "AGE_DOWN":
//             newState.age--;
//             break;
//     }
//     return newState;
// }

// export default reducer;