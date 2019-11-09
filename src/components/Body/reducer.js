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