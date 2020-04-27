import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import UserInfoCard from '../UserInfoCard';


const UserCard = (props) => {
  console.log(props.value.platforms)


  return (

    <Card className="mx-1 mt-1 shadow">
      <CardImg top className="border rounded shadow" width="100%" src={props.value.avatar} alt="Profile Picture" />
      <CardBody className='text-center border rounded shadow my-2 mx-2'>
        <CardTitle><b>{props.value.username}</b></CardTitle>
        <CardSubtitle>-{props.value.platform}-
        </CardSubtitle>
        <CardText>{props.value.bio}</CardText>
      </CardBody>
      <UserInfoCard value={props.value}/>
    </Card>

  );
}

export default UserCard;