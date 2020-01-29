import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  Card,
  CardBlock,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@bootstrap-styled/v4";
import Alert from "@bootstrap-styled/v4/lib/Alert";
import { EDITING_STATE_CHANGE } from "../reducers";
import { killFriends } from "../actions/FriendsApiCall";

const Friends = props => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
        background: "#c2c3b8ab",
        fontWeight: "bold"
      }}>
      <Modal isOpen={modal} toggle={toggle} backdrop={true}>
        <ModalHeader toggle={toggle}>
          <Alert color='danger' style={{ textAlign: "center" }}>
            ARE YOU SURE YOU WANT TO "DELETE" {props.friend.name}
          </Alert>
        </ModalHeader>
        <ModalBody>
          <img className='savethefriend' alt='' />
        </ModalBody>
        <ModalFooter>
          <Button
            color='danger'
            onClick={() => dispatch(killFriends(props.friend.id)) & toggle}>
            Kill {props.friend.name}
          </Button>
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Card width='15rem'>
        <CardBlock>
          <CardTitle style={{ fontWeight: "bold" }}>
            {props.friend.name}
          </CardTitle>
          <CardText>age: {props.friend.age}</CardText>
          <CardText>Email: {props.friend.email} </CardText>
          <Button
            color='warning'
            size='sm'
            onClick={() =>
              dispatch({
                type: EDITING_STATE_CHANGE,
                name: props.friend.name,
                age: props.friend.age,
                email: props.friend.email,
                id: props.friend.id
              })
            }>
            EDIT
          </Button>
          &nbsp; &nbsp;
          <Button size='sm' color='danger' onClick={toggle}>
            Delete
          </Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Friends;