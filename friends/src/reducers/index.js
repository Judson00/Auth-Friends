import { axiosWithAuth } from "../utils/axiosWithAuth";


const initialState = {
  url: "http://localhost:5000"
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
