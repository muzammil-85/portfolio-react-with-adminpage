const aboutReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_ABOUT":
        return action.payload;
  
      case "ADD_ABOUT":
        return [...state, action.payload];
  
      case "DELETE_ABOUT":
        return state.filter((exp) => exp._id !== action.payload);
  
      case "UPDATE_ABOUT":
        return state.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        );
      default:
        return state;
    }
  };
  
  export default aboutReducer;
  