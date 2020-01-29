const uuidv4 = require("uuid/v4");

const initialState = {
  friend: {
    id: uuidv4(),
    name: "",
    age: null,
    email: ""
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
    case "FORM_STATE":
      return{
        ...state,
        friend: {
          ...state.friend,
          [action.name]: action.value
        }
      }
    case "EDIT_FORM":
    return{
      ...state,
      editing:
        state.editing === false ? !state.editing : (state.editing = true),
        friend: {
          ...state.friend,
          id: action.id,
          name: action.name,
          age: action.age,
          email: action.email
        }
    };
    case "RESET_FORM":
      return{
        ...state,
        friend: {
          id: uuidv4(),
          name: "",
          age: null,
          email: ""
        }
      }
    default:
      return state;
  }
};

