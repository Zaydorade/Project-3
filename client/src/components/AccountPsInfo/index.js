import React from 'react';
import {
 CardBody, CardSubtitle, Button, FormGroup, Input, Form
} from 'reactstrap';

const AccountPsInfo = (props) => {
  if (!props.value.psn) {
    return (
      <CardBody className="d-flex flex-column text-center border shadow rounded bg-primary mx-2 my-1">
        <CardSubtitle className="my-auto mx-auto">Enter your Playstation Network Name:</CardSubtitle>
        <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="psn" placeholder="Enter Playstation Name"
            onChange={props.handleChange}
            value={props.value.psn} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 border rounded shadow" onClick={event => props.updatePSN(event)}>Submit</Button>
        </Form>
      </CardBody>
    );
  }
  else return (
    <CardBody className="d-flex flex-column text-center border rounded shadow bg-primary mx-2 my-1">
      <CardSubtitle className="my-auto mx-auto">Playstation Network Name: <b>{props.value.psn}</b></CardSubtitle>
      <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="psn" placeholder="Update Playstation Name"
            onChange={props.handleChange}
            value={props.value.psn} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 border rounded shadow" onClick={event => props.updatePSN(event)}>Update</Button>
      </Form>
    </CardBody>
  )
}

export default AccountPsInfo;