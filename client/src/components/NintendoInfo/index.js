import React from 'react';
import {
  CardBody, CardSubtitle
} from 'reactstrap';

const NintendoInfo = (props) => {

  return (
    <CardBody className="d-flex text-light bg-danger border rounded align-items-center shadow my-1 mx-2">
      <CardSubtitle className="mx-auto textshadows">Nintendo FriendID: <b>{props.value.ninID}</b></CardSubtitle>
    </CardBody>
  );
}

export default NintendoInfo;