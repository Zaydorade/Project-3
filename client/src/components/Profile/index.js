import React from 'react';
import {
  CardGroup, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import XboxInfo from '../XboxInfo';
import SteamInfo from '../SteamInfo';
import PsInfo from '../PsInfo';
import RiotInfo from '../RiotInfo'

const Profile = () => {

  return (
    <div>
      <CardGroup>
          <Card className="mr-1 shadow">
            <CardImg top width="100%" src="/images/profilepic.jpg" alt="Profile Picture" />
            <CardBody className="text-center">
              <CardTitle>Zaydorade</CardTitle>
              <CardSubtitle>PC, Xbox</CardSubtitle>
              <CardText>Best gamer around.</CardText>
            </CardBody>
          </Card>
          <Card className="ml-1 shadow">
          <Card>
            <CardBody className="text-center bg-secondary">
            <CardSubtitle>Style: Competitive</CardSubtitle>
            <CardSubtitle>Region: USA</CardSubtitle>
            <CardSubtitle>Schedule: 10 hrs/wk</CardSubtitle>
            </CardBody>
          </Card>
          <XboxInfo />
          <PsInfo />
          <SteamInfo />
          <RiotInfo />
          </Card>
          </CardGroup>
    </div>
  );
}

export default Profile;