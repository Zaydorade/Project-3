import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText
} from 'reactstrap';

const GsnNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="shadow" color="dark" dark expand="md">
        <NavbarBrand className="logoshadow" href="/"><span className="logo">GameNation</span></NavbarBrand>
        <NavbarText className="textshadows mr-auto text-secondary">Connect with other gamers</NavbarText>
        <NavbarToggler className="shadow" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {props.username ?
            <Nav className="ml-auto text-center" navbar>
              <NavLink className='text-light textshadows' href='/'>Find Gamers</NavLink>
              <NavLink className='text-light textshadows' href='/account'>{props.username}</NavLink>
              <NavLink className='text-light textshadows' href='/login' onClick={() => props.logout()}>Logout</NavLink>
            </Nav> :
            <Nav className="ml-auto text-center" navbar>
              <NavLink className='text-light textshadows' href='/login'>Login</NavLink>
              <NavLink className='text-light textshadows' href='/signup'>Sign Up</NavLink>
            </Nav> }
        </Collapse>
      </Navbar>
    </div>

  );
}

export default GsnNavbar;