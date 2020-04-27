import React from 'react';
import {
  CardGroup, Card, Button, Container
} from 'reactstrap';
import AccountUserCard from '../AccountUserCard';
import AccountXboxInfo from '../AccountXboxInfo';
import AccountSteamInfo from '../AccountSteamInfo';
import AccountPsInfo from '../AccountPsInfo';
import AccountRiotInfo from '../AccountRiotInfo';
import AccountNintendoInfo from '../AccountNintendoInfo';
import Friends from '../Friends'

const Account = (props) => {


  return (
    <div className="spacer purple pb-5 pt-1">
      {props.value.username ?
        <div>
          <CardGroup>
            <AccountUserCard value={props.value} handleChange={props.handleChange} handleMultiChange={props.handleMultiChange}
              submitClick={props.updateUser} imageSelect={props.imageSelect} updateAvatar={props.updateAvatar} viewProfile={props.viewProfile} />
            <Card className="rounded mt-1 mx-1 shadow">
              <AccountSteamInfo value={props.value} handleChange={props.handleChange} updateSteam={props.updateSteam} />
              <AccountXboxInfo value={props.value} handleChange={props.handleChange} updateXbox={props.updateXbox} />
              <AccountPsInfo value={props.value} handleChange={props.handleChange} updatePSN={props.updatePSN} />
              <AccountNintendoInfo value={props.value} handleChange={props.handleChange} updateNin={props.updateNin} />
              <AccountRiotInfo value={props.value} handleChange={props.handleChange} updateRiot={props.updateRiot} />
            </Card>
          </CardGroup>
          <Container fluid className="text-center">
            <Button className="ml-1 my-3" color="danger" onClick={event => props.submitDelete(event)}>Delete Your Account</Button>
          </Container>
          {props.value.friends.length > 0 ?
            <Friends value={props.value} viewProfile={props.viewProfile} addFriend={props.addFriend} /> :
            <Container className='text-center mx-auto py-2 my-3 border bg-light rounded shadow'>
              <h1>No friends to display. Go add some!</h1>
            </Container>}
        </div> :
        <Container className='text-center mx-auto py-2 mt-5 border bg-light rounded shadow'>
          <h1>You must be logged in to do view this page</h1>
        </Container>}
    </div>
  );
}

export default Account;