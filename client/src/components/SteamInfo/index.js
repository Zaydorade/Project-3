import React from 'react';
import {
  Card, CardBody, CardSubtitle, Button
} from 'reactstrap';

const SteamInfo = (props) => {

  return (
    <div>
          <Card className='text-light'>
            <CardBody className="text-center bg-dark">
            <CardSubtitle>SteamID: Zaydorade#4298</CardSubtitle>
            <Button>View Stats</Button>
            </CardBody>
          </Card>
    </div>
  );
}

export default SteamInfo;