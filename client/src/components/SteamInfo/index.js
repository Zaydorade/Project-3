import React, { useState } from 'react';
import {
  CardBody, CardSubtitle, Button, Collapse, Card, CardImg, CardTitle, Nav, NavLink
} from 'reactstrap';

const SteamInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <CardBody className="d-flex flex-column text-center text-light bg-dark border rounded shadow mx-2 my-2">
      <CardSubtitle className="mx-auto mt-auto textshadows">SteamID: <b>{props.value.steamID}</b></CardSubtitle>
      <Button className="mb-auto mx-auto mt-1 text-light border rounded shadow" onClick={toggle} color="transparent">View Details</Button>
      <Collapse className="mb-auto mt-2" isOpen={isOpen}>
        {!props.value.steamInfo ? null :
          <Card className="bg-dark border rounded cardHeight shadow">
            <CardBody>
              <CardTitle><b>{props.value.steamInfo.personaname}</b></CardTitle>
            </CardBody>
            <CardImg src={props.value.steamInfo.avatarfull} />
            <CardBody>
              <Nav>
                <NavLink className="text-light mx-auto" href={props.value.steamInfo.profileurl}>View profile on Steam</NavLink>
              </Nav>
            </CardBody>
          </Card>}
      </Collapse>
    </CardBody>
  );
}

export default SteamInfo;