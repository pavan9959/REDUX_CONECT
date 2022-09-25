const INCREMENT = (data) => (dispatch) => {
    dispatch({ type: "INCREMENT", payload:data });
  };
  
  export { INCREMENT };
  
  export const DEC = (data) => (dispatch) => {
    dispatch({ type: "DEC", payload:data });
  };
  
  