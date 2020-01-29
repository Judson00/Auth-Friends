import { axiosWithAuth } from "../utils/axiosWithAuth";
import { DATA_FAILURE, DATA_START, DATA_SUCCESS } from "../reducers";

export const friendsFetch = () => dispatch => {
  dispatch({ type: DATA_START });

  axiosWithAuth()
    .get("/api/friends")
    .then(
      res =>
        console.log(res, "res data") &
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    )
    .catch(
      err =>
        console.log(err, "ERROR") &
        dispatch({ type: DATA_FAILURE, payload: err })
    );
};

export const sendFriends = friend => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .post("/api/friends", friend)
    .then(res => {
      console.log(res, "friend data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const editFriends = (friend, id) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .put(
      `/api/friends/${id}`,
      friend
      //   id: Date.now()
    )
    .then(res => {
      console.log(res, "friend data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const killFriends = id => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .delete(`/api/friends/${id}`)
    .then(res => {
      console.log(res, "friend data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};