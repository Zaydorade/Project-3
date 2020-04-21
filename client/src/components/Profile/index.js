import React from 'react';
import {
  CardGroup, Card
} from 'reactstrap';
import UserCard from '../UserCard';
import UserInfoCard from '../UserInfoCard';
import XboxInfo from '../XboxInfo';
import SteamInfo from '../SteamInfo';
import PsInfo from '../PsInfo';
import RiotInfo from '../RiotInfo'

const Profile = (props) => {

  return (
    <div>
      <CardGroup>
        <UserCard />
        <Card className="ml-1 shadow">
          <UserInfoCard />
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