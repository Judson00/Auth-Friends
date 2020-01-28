import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { friendsFetch } from "../actions/FriendsApiCall";
import Friends from "./Friends";
import FriendForm from "./FriendForm";

const FriendsGrid = () => {
  const friends = useSelector(state => state.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(friendsFetch());
  }, [dispatch]);

  return (
    <div>
      <FriendForm />
      {friends.map(friend => (
        <Friends friend={friend} />
      ))}
    </div>
  );

};

export default FriendsGrid;