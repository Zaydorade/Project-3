import React from 'react';
import {
  CardGroup, Card, CardBody, CardSubtitle, Container
} from 'reactstrap';
import UserCard from '../UserCard';
import XboxInfo from '../XboxInfo';
import SteamInfo from '../SteamInfo';
import PsInfo from '../PsInfo';
import RiotInfo from '../RiotInfo';
import NintendoInfo from '../NintendoInfo';
import TwitchInfo from '../TwitchInfo';
import Friends from '../Friends'

const Profile = (props) => {

  return (
    <div className="medpurp spacer">
      <CardGroup className="mb-3">
        <UserCard value={props.value} addFriend={props.addFriend} />
        <Card className="mx-1 mt-1 shadow">
          {props.value.userProfile.steamID &&
            <SteamInfo value={props.value.userProfile} />}
          {props.value.userProfile.riotID &&
            <RiotInfo value={props.value.userProfile} />}
          {props.value.userProfile.xboxgt &&
            <XboxInfo value={props.value.userProfile} />}
          {props.value.userProfile.psn &&
            <PsInfo value={props.value.userProfile} />}
          {props.value.userProfile.ninID &&
            <NintendoInfo value={props.value.userProfile} />}
          {props.value.userProfile.twitchID &&
            <TwitchInfo value={props.value.userProfile} />}
          {!props.value.userProfile.steamID &&
            !props.value.userProfile.ninID &&
            !props.value.userProfile.psn &&
            !props.value.userProfile.xboxgt &&
            !props.value.userProfile.twitchID &&
            !props.value.userProfile.riotID ?
            <CardBody className="d-flex text-light bg-dark border rounded shadow mb-1 mx-2 align-items-center">
              <CardSubtitle className="mx-auto">{props.value.userProfile.username} is not a gamer!</CardSubtitle>
            </CardBody> : null
          }
        </Card>
      </CardGroup>
      {!props.value.userProfile.friends ? null :
      props.value.userProfile.friends.length > 0 ?
            <Friends value={props.value.userProfile} viewProfile={props.viewProfile} addFriend={props.addFriend} /> :
            <Container className='text-center mx-auto py-2 my-3 border bg-light rounded shadow'>
            <h1>No friends to display.</h1>
          </Container> }
    </div>
  );
}

export default Profile;