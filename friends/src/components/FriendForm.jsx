import React from "react";
import { Form, Input, Label, Button, FormGroup } from "@bootstrap-styled/v4";
import { useSelector, useDispatch } from "react-redux";
import { FORM_STATE, RESET_FORM, EDITING_STATE } from "../reducers";
import {
  sendFriends,
  editFriends,
  killFriends
} from "../actions/FriendsApiCall";

const FriendForm = () => {
  const friend = useSelector(state => state.friend);

  const checkname = useSelector(state => state.friends);
  const editing = useSelector(state => state.editing);
  const dispatch = useDispatch();
  let doesIdExist = checkname.map(ele => ele.id);
  let doesnameExist = checkname.map(ele => ele.name);

  const handlechange = e => {
    dispatch({ type: FORM_STATE, name: e.target.name, value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (doesnameExist.includes(friend.name)) {
      return alert("Name already exist");
    } else {
      return dispatch(sendFriends(friend)) & dispatch({ type: RESET_FORM });
    }
  };

  const handleformEdit = e => {
    e.preventDefault();

    console.log(doesIdExist.includes(Number(friend.id)), "INCLUDES TEST ID");

    if (doesIdExist.includes(Number(friend.id)) === true) {
      return (
        dispatch(editFriends(friend, friend.id)) &
        dispatch({ type: EDITING_STATE }) &
        dispatch({ type: RESET_FORM })
      );
    } else {
      return alert("ID Doesnt exist, please try again");
    }
  };

  const handleformDelete = e => {
    e.preventDefault();

    console.log(doesIdExist.includes(Number(friend.id)), "INCLUDES TEST ID");

    if (doesIdExist.includes(Number(friend.id)) === true) {
      return (
        dispatch(killFriends(friend.id)) &
        document.getElementById("editForm").reset() &
        dispatch({ type: EDITING_STATE })
      );
    } else {
      return alert("ID Doesnt exist, please try again");
    }
  };

  return (
    <div className='formContainer'>
      {!editing ? (
        <Form id='bigForm' onSubmit={handleSubmit}>
          <FormGroup className='mr-2'>
            <Label hidden>
              friend name: &nbsp;
              {console.log(friend, "friend")}
              {console.log(doesnameExist, doesIdExist, "testing name - id")}
              <Input
                required
                minLength='2'
                type='text'
                name='name'
                onChange={handlechange}
                value={friend.name}
                placeholder='friend name'
              />
            </Label>
          </FormGroup>
          <FormGroup className='mr-2'>
            <Label hidden>
              friend age: &nbsp; &nbsp; &nbsp;
              <Input
                required
                minLength='1'
                type='number'
                name='age'
                onChange={handlechange}
                value={friend.age}
                placeholder='friend age'
              />
            </Label>
          </FormGroup>
          <FormGroup className='mr-2'>
            <Label hidden>
              friend email: &nbsp;
              <Input
                required
                minLength='1'
                type='text'
                name='email'
                onChange={handlechange}
                value={friend.email}
                placeholder='friend email'
              />
            </Label>
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </Form>
      ) : (
        <Form id='editForm'>
          <FormGroup className='mr-2'>
            <Label hidden>
              friend name: &nbsp;
              {console.log(friend, "friend")}
              <Input
                required
                minLength='2'
                type='text'
                name='name'
                value={friend.name}
                onChange={handlechange}
                placeholder='friend name'
              />
            </Label>
          </FormGroup>
          <FormGroup className='mr-2'>
            <Label hidden>
              friend age: &nbsp; &nbsp; &nbsp;
              <Input
                type='number'
                name='age'
                value={friend.age}
                onChange={handlechange}
                placeholder='friend age'
              />
            </Label>
          </FormGroup>
          <FormGroup className='mr-2'>
            <Label hidden>
              friend email: &nbsp;
              <Input
                type='text'
                name='email'
                value={friend.email}
                onChange={handlechange}
                placeholder='friend email'
              />
            </Label>
          </FormGroup>

          <Button color='danger' onClick={handleformDelete}>
            Delete
          </Button>
          <Button type='submit' onClick={handleformEdit}>
            Submit
          </Button>
          <Button
            color='warning'
            onClick={() =>
              dispatch({
                type: EDITING_STATE,
                name: "",
                age: "",
                email: "",
                id: 0
              })
            }>
            Cancel
          </Button>
        </Form>
      )}
    </div>
  );
};
export default FriendForm;