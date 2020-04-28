import React, { useState } from 'react';
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavbarText
} from 'reactstrap';


const Account = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="footer bg-dark">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="textshadows" href="/about">About</NavbarBrand>
        <NavbarText className="mr-2 textshadows">Support</NavbarText>
        <NavbarText className="mr-auto textshadows">Feedback</NavbarText>
        <NavbarToggler className="shadow" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto text-center" navbar>
            <NavbarText className="mx-1 textshadows">Terms of Service</NavbarText>
            <NavbarText className="mx-1 textshadows">Privacy</NavbarText>
            <NavbarText className="mx-1 textshadows">Cookies</NavbarText>
            <NavbarText className="mx-1 textshadows">© 2020 GameNation</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Account;