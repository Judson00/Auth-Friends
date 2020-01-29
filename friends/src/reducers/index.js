export const DATA_START = "FETCHING_DATA_START";
export const DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const EDITING_STATE = "EDITING_STATE";
export const FORM_STATE = "FORM_STATE";
export const RESET_FORM = "RESET_FORM";
export const EDITING_STATE_CHANGE = "EDITING_STATE_CHANGE";

const uuidv4 = require("uuid/v4");

const initialState = {
  friend: {
    id: uuidv4(),
    name: "",
    age: "",
    email: ""
  },
  editing: false,
  isloading: false,
  friends: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_START:
      return {
        ...state,
        isloading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        isloading: false,
        friends: action.payload
      };
    case DATA_FAILURE:
      return {
        ...state,
        isloading: false,
        friends: action.payload
      };

    case EDITING_STATE:
      return {
        ...state,
        editing: !state.editing,
        friend: {
          ...state.friend,
          id: action.id,
          name: action.name,
          age: action.age,
          email: action.email
        }
      };

    case EDITING_STATE_CHANGE:
      return {
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

    case FORM_STATE: {
      return {
        ...state,
        friend: {
          ...state.friend,
          [action.name]: action.value
        }
      };
    }

    case RESET_FORM: {
      return {
        ...state,
        friend: {
          id: uuidv4(),
          name: "",
          age: "",
          email: ""
        }
      };
    }

    default:
      return state;
  }
};