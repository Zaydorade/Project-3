import React from 'react';
import {
  CardBody, CardSubtitle, Button, FormGroup, Input, Form
} from 'reactstrap';

const AccountNintendoInfo = (props) => {

  if (!props.value.ninID) {
    return (
      <CardBody className="d-flex flex-column text-center text-light border shadow rounded bg-danger mx-2 my-1">
        <CardSubtitle className="my-auto mx-auto">Enter your Nintendo Friend ID:</CardSubtitle>
        <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="ninID" placeholder="Enter Nintendo ID"
            onChange={props.handleChange}
            value={props.value.ninID} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 text-light border rounded shadow" onClick={event => props.updateNin(event)}>Submit</Button>
        </Form>
      </CardBody>
    );
  }
  else return (
    <CardBody className="d-flex flex-column text-center text-light border rounded shadow bg-danger mx-2 my-1">
      <CardSubtitle className="my-auto mx-auto">Nintendo FriendID: <b>{props.value.ninID}</b></CardSubtitle>
      <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="ninID" placeholder="Update Nintendo ID"
            onChange={props.handleChange}
            value={props.value.ninID} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 text-light border rounded shadow" onClick={event => props.updateNin(event)}>Update</Button>
      </Form>
    </CardBody>
  )
}

export default AccountNintendoInfo;