import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FriendForm = (props) => {
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

      <Button>Submit</Button>
    </Form>
  );
}

export default FriendForm;