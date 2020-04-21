import React from 'react';
import {
  Card, CardBody, CardSubtitle, Button
} from 'reactstrap';

const RiotInfo = (props) => {

  return (
    <div>
          <Card>
            <CardBody className="text-center bg-light">
            <CardSubtitle>Riot Games: CapnZap</CardSubtitle>
            <Button>View Stats</Button>
            </CardBody>
          </Card>
    </div>
  );
}

export default RiotInfo;