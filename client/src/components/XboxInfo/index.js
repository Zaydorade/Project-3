import React from 'react';
import {
  Card, CardBody, CardSubtitle, Button
} from 'reactstrap';

const XboxInfo = (props) => {

  return (
    <div>
          <Card>
            <CardBody className="text-center bg-success">
            <CardSubtitle>Xbox Gamertag: Zaydorade</CardSubtitle>
            <Button>View Stats</Button>
            </CardBody>
          </Card>
    </div>
  );
}

export default XboxInfo;