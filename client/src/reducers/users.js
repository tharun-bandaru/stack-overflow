const usersReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return action.payload;

    case "UPDATE_CURRENT_USER":
      console.log("reducer method exxecute")
      return states.map((state) =>
        state._id === action.payload._id ? action.payload : state
      );

    default:
      return states;
  }
};

export default usersReducer;
