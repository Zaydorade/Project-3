import React from 'react';
import {
   CardBody, CardSubtitle
} from 'reactstrap';

const PsInfo = (props) => {

  return (
    <CardBody className="d-flex align-items-center text-center text-light bg-primary border rounded shadow my-1 mx-2">
      <CardSubtitle className="mx-auto">Playstation Network Name: <b>{props.value.psn}</b></CardSubtitle>
    </CardBody>
  );
}

export default PsInfo;