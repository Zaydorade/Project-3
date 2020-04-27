import React from 'react';
import {
  CardBody, CardSubtitle, Button
} from 'reactstrap';

const SteamInfo = (props) => {

  return (
    <CardBody className="d-flex flex-column text-center text-light bg-dark border rounded shadow mx-2 my-2">
      <CardSubtitle className="mx-auto mt-auto">SteamID: <b>{props.value.steamID}</b></CardSubtitle>
      <Button className="mb-auto mx-auto mt-1 text-light border rounded" color="transparent">View Details</Button>
    </CardBody>
  );
}

export default SteamInfo;