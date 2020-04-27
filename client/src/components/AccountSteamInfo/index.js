import React from 'react';
import {
  CardBody, CardSubtitle, Button, Input, FormGroup, Form
} from 'reactstrap';

const AccountSteamInfo = (props) => {
  if (!props.value.steamID) {
    return (
      <CardBody className="d-flex flex-column text-center text-light border shadow rounded bg-dark mx-2 my-1">
        <CardSubtitle className="mt-auto mb-1 mx-auto">Enter your 64-bit Steam ID:</CardSubtitle>
        <a href='/' className="text-light mb-2 tinywords muted">Where do I find my SteamID?</a>
        <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="steamID" placeholder="Enter Steam ID"
            onChange={props.handleChange}
            value={props.value.steamID} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 text-light border rounded shadow" onClick={event => props.updateSteam(event)}>Submit</Button>
        </Form>
      </CardBody>
    );
  }
  else return (
    <CardBody className="d-flex flex-column text-center text-light border rounded shadow bg-dark mx-2 my-1">
      <CardSubtitle className="mt-auto mb-1 mx-auto">SteamID: <b>{props.value.steamID}</b></CardSubtitle>
      <a href='/' className="text-light mb-2 tinywords muted">Where do I find my SteamID?</a>
      <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="steamID" placeholder="Update Steam ID"
            onChange={props.handleChange}
            value={props.value.steamID} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 text-light border rounded shadow" onClick={event => props.updateSteam(event)}>Update</Button>
      </Form>
    </CardBody>
  )
}

export default AccountSteamInfo;