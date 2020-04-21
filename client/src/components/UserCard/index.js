import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
const UserCard = (props) => {

  return (
          <Card className="mr-1 shadow">
            <CardImg top width="100%" src="/images/profilepic.jpg" alt="Profile Picture" />
            <CardBody className="text-center">
              <CardTitle>Zaydorade</CardTitle>
              <CardSubtitle>PC, Xbox</CardSubtitle>
              <CardText>Best gamer around.</CardText>
            </CardBody>
          </Card>
  );
}

export default UserCard;