import React from 'react';
import {
  CardBody, CardSubtitle, Button, FormGroup, Input, Form
} from 'reactstrap';

const AccountRiotInfo = (props) => {
  if (!props.value.riotID) {
    return (
      <CardBody className="d-flex flex-column text-center border shadow rounded bg-light mx-2 my-1">
        <CardSubtitle className="my-auto mx-auto">Enter your League of Legends/Valorant ID:</CardSubtitle>
        <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="riotID" placeholder="Enter Riot ID"
            onChange={props.handleChange}
            value={props.value.riotID} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 border rounded shadow" onClick={event => props.updateRiot(event)}>Submit</Button>
        </Form>
      </CardBody>
    );
  }
  else return (
    <CardBody className="d-flex flex-column text-center border rounded shadow bg-light mx-2 my-1">
      <CardSubtitle className="my-auto mx-auto">League of Legends/Valorant ID: <b>{props.value.riotID}</b></CardSubtitle>
      <Form className="mb-auto mx-auto" inline>
        <FormGroup className="mt-1">
          <Input type="text" name="riotID" placeholder="Update Riot ID"
            onChange={props.handleChange}
            value={props.value.riotID} />
        </FormGroup>
        <Button color="transparent" className="ml-1 mb-auto mt-1 border rounded shadow" onClick={event => props.updateRiot(event)}>Update</Button>
      </Form>
    </CardBody>
  )
}

export default AccountRiotInfo;