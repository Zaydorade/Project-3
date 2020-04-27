import React from 'react';
import {
  CardBody, CardSubtitle, Button, FormGroup, Input, Form
} from 'reactstrap';

const AccountXboxInfo = (props) => {
  if (!props.value.xboxgt) {
    return (
      <CardBody className="d-flex flex-column text-center text-light border shadow rounded bg-success mx-2 my-1">
        <CardSubtitle className="my-auto mx-auto">Enter your Xbox Live Gamertag:</CardSubtitle>
        <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="xboxgt" placeholder="Enter Xbox Gamertag"
            onChange={props.handleChange}
            value={props.value.xboxgt} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 text-light border rounded shadow" onClick={event => props.updateXbox(event)}>Submit</Button>
        </Form>
      </CardBody>
    );
  }
  else return (
    <CardBody className="d-flex flex-column text-center text-light border rounded shadow bg-success mx-2 my-1">
      <CardSubtitle className="my-auto mx-auto">Xbox Live Gamertag: <b>{props.value.xboxgt}</b></CardSubtitle>
      <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="xboxgt" placeholder="Update Xbox Gamertag"
            onChange={props.handleChange}
            value={props.value.xboxgt} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 text-light border rounded shadow" onClick={event => props.updateXbox(event)}>Update</Button>
      </Form>
    </CardBody>
  )
}

export default AccountXboxInfo;