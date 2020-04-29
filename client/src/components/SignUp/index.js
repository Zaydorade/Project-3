import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateUser = (props) => {

  return (
    <div className="pt-5 spacer purple">
      <Container className='border rounded bg-light shadow mb-3'>
        <h1 className='text-center mt-2'>Sign Up</h1>
        <Form>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="username" className="mr-sm-2">Username:</Label>
            <Input className="shadow-sm" type="text" name="username" placeholder="Enter your desired Username"
              onChange={props.handleChange}
              value={props.value.username} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="Password" className="mr-sm-2">Password:</Label>
            <Input className="shadow-sm" type="password" name="password" placeholder="Must contain 6 characters including both letters and numbers"
              onChange={props.handleChange}
              value={props.value.password} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="confirmPassword" className="mr-sm-2">Confirm Password:</Label>
            <Input className="shadow-sm" type="password" name="password2" placeholder="Re-enter Password"
              onChange={props.handleChange}
              value={props.value.password2} />
          </FormGroup>
          <p className="tinywords mt-3 mb-4 muted">Feel freel to skip through! It can be updated later.</p>
          <FormGroup>
            <Label for="platform">Select your Primary Platform:</Label>
            <Input className="shadow-sm" type="select" name="platform"
              onChange={props.handleChange}
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
              <Input className="shadow-sm" type="select" name="platforms" multiple onChange={props.handleMultiChange}
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
            <Input className="shadow-sm" type="textarea" name="bio" placeholder="Enter a short bio or tagline"
              onChange={props.handleChange}
              value={props.value.bio} />
          </FormGroup>
          <FormGroup>
            <Label for="region">Region:</Label>
            <Input className="shadow-sm" type="select" name="region"
              onChange={props.handleChange}
              value={props.value.region}>
              <option>Americas</option>
              <option>Europe/Asia</option>
              <option>Oceania</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="availability">Gaming Schedule:</Label>
            <Input className="shadow-sm" type="select" name="availability"
              onChange={props.handleChange}
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
            <Input className="shadow-sm" type="select" name="style"
              onChange={props.handleChange}
              value={props.value.style}>
              <option>Social</option>
              <option>Competitive</option>
              <option>Casual</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="micUser">Are you a mic user?</Label>
            <Input className="shadow-sm" type="select" name="micUser"
              onChange={props.handleChange}
              value={props.value.micUser}>
              <option>Yes</option>
              <option>No I'm shy</option>
            </Input>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="steamID" className="mr-sm-2">SteamID:</Label>
            <Input className="shadow-sm" type="text" name="steamID" placeholder="Enter 64-bit SteamID"
              onChange={props.handleChange}
              value={props.value.steamID} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="riotID" className="mr-sm-2">League of Legends/Valorant Username:</Label>
            <Input className="shadow-sm" type="text" name="riotID" placeholder="Enter your Riot ID"
              onChange={props.handleChange}
              value={props.value.riotID} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="xboxgt" className="mr-sm-2">Xbox Live Gamertag:</Label>
            <Input className="shadow-sm" type="text" name="xboxgt" placeholder="Enter Xbox Live Gamertag"
              onChange={props.handleChange}
              value={props.value.xboxgt} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="psn" className="mr-sm-2">Playstation Network Name:</Label>
            <Input className="shadow-sm" type="text" name="psn" placeholder="Enter Playstation Network Name"
              onChange={props.handleChange}
              value={props.value.psn} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2">
            <Label for="ninID" className="mr-sm-2">Nintendo FriendID:</Label>
            <Input className="shadow-sm" type="text" name="ninID" placeholder="Enter Nintendo FriendID"
              onChange={props.handleChange}
              value={props.value.ninID} />
          </FormGroup>
          <Button className='my-2 border rounded border-dark shadow' color="transparent" onClick={event => props.submitClick(event)}>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateUser;