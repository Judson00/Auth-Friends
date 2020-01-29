import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import {
  addFriend,
  editFriend,
  deleteFriend
} from '../actions/FriendsApiCall';

const FriendForm = (props) => {

  const friend = useSelector(state => state.friend);
  const checkName = useSelector(state => state.friends);
  const editing = useSelector(state => state.editing);
  const dispatch = useDispatch();
  let doesIdExist = checkName.map(ele => ele.id);
  let doesNameExist = checkName.map(ele => ele.name);

  const handleChange = e => {
    dispatch({ type: "FORM_STATE", name: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    //e.preventDefault();

    if (doesNameExist.includes(friend.name)) {
      return alert("Name already Exists")
    }else{
      return dispatch(addFriend(friend) & dispatch({ type: "RESET_FORM" }))
    }
  }

  return (
    <Form>
      <FormGroup>
        <Label>name</Label>
        <Input type="text" name="Name"  placeholder="Enter name" />
      </FormGroup>

      <FormGroup>
        <Label>Age</Label>
        <Input type="number" name="Age" placeholder="Enter Age" />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="email" placeholder="Enter Email" />
      </FormGroup>

      <Button onClick={() => handleSubmit()}>Submit</Button>
    </Form>
  );
}

export default FriendForm;