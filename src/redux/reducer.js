const initialState = { location: "" };

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOCATION": {
      return {
        ...state,
        location: action.payload,
      };
    }
  }
  return state;
};

export default locationReducer;
