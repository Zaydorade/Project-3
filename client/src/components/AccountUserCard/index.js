import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input, Row
} from 'reactstrap';
import AccountInfoCard from '../AccountInfoCard';
import ImageUpload from '../ImageUpload'


const AccountUserCard = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Card className="mx-1 mt-1 shadow">
      <CardImg className="border rounded shadow" top width="100%" src={props.value.avatar} alt="Profile Picture" />
      <ImageUpload value={props.value} imageSelect={props.imageSelect} updateAvatar={props.updateAvatar} />
      <CardBody className="text-center bg-light border rounded shadow my-2 mx-2">
        <CardTitle><b>{props.value.username}</b></CardTitle>
        <CardSubtitle>-{user.platforms.map(platform => { return <span>{platform} - </span> })}</CardSubtitle>
        <CardText>{props.value.bio}</CardText>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="text-center" toggle={toggle}>Update Your Info</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="platform">Select your Primary Platform:</Label>
              <Input type="select" name="platform" onChange={props.handleChange}
                value={props.value.platform}>
                <option>PC</option>
                <option>Xbox</option>
                <option>Playstation</option>
                <option>Nintendo Switch</option>
                <option>Mobile</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="platforms">Select your other Platforms:</Label>
              <p className="tinywords muted">(CTRL+Click to select multiple)</p>
              <Input type="select" name="platforms" multiple onChange={props.handleMultiChange}
                value={props.value.platforms}>
                <option>PC</option>
                <option>Xbox</option>
                <option>Playstation</option>
                <option>Nintendo Switch</option>
                <option>Mobile</option>
              </Input>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2">
              <Label for="bio" className="mr-sm-2">Bio:</Label>
              <Input type="textarea" name="bio" placeholder="Enter a short bio or tagline"
                onChange={props.handleChange}
                value={props.value.bio}
                 />
            </FormGroup>
            <FormGroup>
              <Label for="region">Region</Label>
              <Input type="select" name="region" onChange={props.handleChange}
                value={props.value.region}>
                <option>Americas</option>
                <option>Europe/Asia</option>
                <option>Oceania</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="availability">Gaming Schedule:</Label>
              <Input type="select" name="availability" onChange={props.handleChange}
                value={props.value.availability}>
                <option>1 hr/wk</option>
                <option>5 hrs/wk</option>
                <option>10 hrs/wk</option>
                <option>20 hrs/wk</option>
                <option>40 hrs/wk</option>
                <option>60 hrs/wk</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="style">Gaming Style:</Label>
              <Input type="select" name="style"
                onChange={props.handleChange}
                value={props.value.style}>
                <option>Social</option>
                <option>Competitive</option>
                <option>Casual</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="micUser">Are you a mic user?</Label>
              <Input type="select" name="micUser"
                onChange={props.handleChange}
                value={props.value.micUser}>
                <option>Yes</option>
                <option>No I'm shy</option>
              </Input>
            </FormGroup>
            <Button className='my-2' onClick={event => props.submitClick(event)}>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
      <AccountInfoCard value={props.value} />
      <Row>
      <Button className="mb-3 mt-1 ml-auto mr-1 border rounded shadow" color="transparent" onClick={toggle}>Update your info</Button>
      <Button className="mb-3 mt-1 mr-auto ml-1 border rounded shadow" color="transparent" onClick={() => props.viewProfile(props.value.username)}>View your Profile</Button>
      </Row>
    </Card>
  );
}

export default AccountUserCard;