const initialState = {
    count: 0
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        console.log(action.payload)
        let num=action.payload==undefined?1:action.payload
        return { ...state, count: state.count + num };
      case "DEC":
        let num2=action.payload==undefined?1:action.payload
        return { ...state, count: state.count - num2 };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  