import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Button
} from 'reactstrap';
import UserInfoCard from '../UserInfoCard';


const UserCard = (props) => {
  if (!props.value.username) {
    return (<Card className="mx-1 mt-1 shadow">
      <CardImg top className="border rounded shadow" width="100%" src={props.value.userProfile.avatar} alt="Profile Picture" />
      <CardBody className='text-center border rounded shadow my-2 mx-2'>
        <CardTitle className="textshadows"><b>{props.value.userProfile.username}</b></CardTitle>
        <CardSubtitle>-{props.value.userProfile.platforms.map(platform => { return <span>{platform} - </span> })}
        </CardSubtitle>
        <CardText>{props.value.userProfile.bio}</CardText>
      </CardBody>
      <UserInfoCard value={props.value} />
    </Card>)
  } else {
    return (<Card className="mx-1 mt-1 shadow">
      <CardImg top className="border rounded shadow" width="100%" src={props.value.userProfile.avatar} alt="Profile Picture" />
      <CardBody className='text-center border rounded shadow my-2 mx-2'>
        <CardTitle className="textshadows"><b>{props.value.userProfile.username}</b></CardTitle>
        <CardSubtitle>-{props.value.userProfile.platforms.map(platform => { return <span>{platform} - </span> })}
        </CardSubtitle>
        <CardText>{props.value.userProfile.bio}</CardText>
      </CardBody>
      <UserInfoCard value={props.value} />
      {props.value.userProfile.username !== props.value.username ?
        <Container className="py-2 text-center">
          <Button className="mb-2 mx-auto border rounded shadow" color="transparent"
            name={props.value.userProfile.username} onClick={event => props.addFriend(event)}>Add</Button>
        </Container> : null}
    </Card>)
  }

}

export default UserCard;