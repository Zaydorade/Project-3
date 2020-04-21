import React from 'react';
import {
  Card, CardBody, CardSubtitle, Button
} from 'reactstrap';

const PsInfo = (props) => {

  return (
    <div>
          <Card>
            <CardBody className="text-center bg-primary">
            <CardSubtitle>PSN: Zaydorade</CardSubtitle>
            <Button>View Stats</Button>
            </CardBody>
          </Card>
    </div>
  );
}

export default PsInfo;