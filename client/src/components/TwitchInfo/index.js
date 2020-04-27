import React from 'react';
import {
  CardBody, CardSubtitle, Button
} from 'reactstrap';

const TwitchInfo = (props) => {

  return (
    <CardBody className="d-flex flex-column text-light text-center purple border rounded shadow mt-1 mb-2 mx-2">
      <CardSubtitle className="mx-auto mt-auto">Twitch ID: <b>{props.value.twitchID}</b></CardSubtitle>
      <Button className="mx-auto mb-auto text-light border rounded mt-1" color="transparent">Visit Stream</Button>
    </CardBody>
  );
}

export default TwitchInfo;