import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignIn = (props) => {

  return (
    <div className="pt-5 purple spacer">
   <Container className='mt-3 border rounded bg-light shadow'> 
    <h1 className='text-center mt-2'>Login</h1>
    <Form className="mb-3">
      <FormGroup className="mb-2 mr-sm-2">
        <Label for="username" className="mr-sm-2">Username</Label>
        <Input className="shadow-sm" type="text" name="username"  placeholder="Enter your Username" 
          onChange={props.handleChange} 
          value={props.value.username}/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2">
        <Label for="Password" className="mr-sm-2">Password</Label>
        <Input className="shadow-sm" type="password" name="password" placeholder="Enter your Password" 
          onChange={props.handleChange} 
          value={props.value.password}/>
      </FormGroup>
      <Button className='my-2 ml-1 border rounded border-dark shadow' color="transparent" onClick={event => props.submitClick(event)}>Login</Button>
      <Button className='my-2 ml-3 border rounded border-dark shadow' color="transparent" onClick={() => window.location = '/signup'}>Sign Up</Button>
    </Form>
    </Container>
    </div>
  );
}

export default SignIn;