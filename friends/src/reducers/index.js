const uuidv4 = require("uuid/v4");

const initialState = {
  friend: {
    id: uuidv4(),
    name: "Joe",
    age: 24,
    email: "joe@lambdaschool.com"
  },

  isloading: false,
  friends: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DATA_START":
      return {
        ...state,
        isloading: true
      };
    case "DATA_SUCCESS":
      return {
        ...state,
        isloading: false,
        friends: action.payload
      };
    case "DATA_FAILURE":
      return {
        ...state,
        isloading: false,
        friends: action.payload
      };
    default:
      return state;
  }
};