import React from 'react';
import {
  CardBody, CardSubtitle, Button
} from 'reactstrap';

const XboxInfo = (props) => {

  return (
    <CardBody className="d-flex flex-column text-center bg-success text-light shadow border rounded my-1 mx-2">
      <CardSubtitle className="mx-auto mt-auto">Xbox Live Gamertag: <b>{props.value.xboxgt}</b></CardSubtitle>
      <Button className="mx-auto mt-1 mb-auto text-light border rounded" color="transparent">View Stats</Button>
    </CardBody>
  );
}

export default XboxInfo;