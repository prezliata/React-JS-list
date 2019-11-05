export const increment = (numb) =>{
    return{
        type: "INCREMENT",
        payload: numb
    };
};

export const decrement = (numb) =>{
    return{
        type: "DECREMENT",
        payload: numb
    };
};