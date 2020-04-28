import React, { useState } from 'react';
import {
  CardGroup, Card, Button, Container, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import AccountUserCard from '../AccountUserCard';
import AccountXboxInfo from '../AccountXboxInfo';
import AccountSteamInfo from '../AccountSteamInfo';
import AccountPsInfo from '../AccountPsInfo';
import AccountRiotInfo from '../AccountRiotInfo';
import AccountNintendoInfo from '../AccountNintendoInfo';
import Friends from '../Friends'

const Account = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
            <Button className="ml-auto my-3" color="light" onClick={toggle}>Update Password</Button>
            <Button className="mr-auto my-3" color="danger" onClick={event => props.submitDelete(event)}>Delete Your Account</Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader className="text-center" toggle={toggle}>Update Your Password</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup className="mb-2 mr-sm-2">
                    <Label for="Password" className="mr-sm-2">New Password:</Label>
                    <Input className="shadow-sm" type="password" name="password" placeholder="Must contain 6 characters including both letters and numbers"
                      onChange={props.handleChange}
                      value={props.value.password} />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2">
                    <Label for="confirmPassword" className="mr-sm-2">Confirm New Password:</Label>
                    <Input className="shadow-sm" type="password" name="password2" placeholder="Re-enter Password"
                      onChange={props.handleChange}
                      value={props.value.password2} />
                  </FormGroup>
                  <Button className='my-2' onClick={event => props.updatePassword(event)}>Submit</Button>
                </Form>
              </ModalBody>
            </Modal>
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