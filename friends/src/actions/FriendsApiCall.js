import { axiosWithAuth } from "../utils/axiosWithAuth";

export const friendsFetch = () => dispatch => {
  dispatch({ type: "DATA_START" });
  axiosWithAuth()
    .get("/api/friends")
    .then(
      res =>
        console.log(res, "res data") &
        dispatch({ type: "DATA_SUCCESS", payload: res.data })
    )
    .catch(
      err =>
        console.log(err, "ERROR") &
        dispatch({ type: "DATA_FAILURE", payload: err })
    );
};