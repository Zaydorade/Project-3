import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardSubtitle, Row, Container, Button
} from 'reactstrap';


const Friends = (props) => {

    return (
            <div><Row className="border rounded border-light shadow mx-5 mt-2"><h1 className="logoshadow mx-auto">Friends</h1></Row>
            <Row className="border rounded border-light mx-5 my-2 pb-2">
                {props.value.friends.map(user => {
                    return <div key={user._id} className="col-lg-3 my-3">
                        <Card tag='a' onClick={() => props.viewProfile(user.username)} className="mx-3 cardHeight shadow">
                            <CardImg top className="border rounded shadow" width="100%" src={user.avatar} alt="Profile Picture" />
                            <CardBody className="d-flex flex-column text-center">
                                <CardSubtitle className="mb-1 mt-auto"><b>{user.username}</b></CardSubtitle>
                                <CardSubtitle className="smallwords">- {user.platforms.map(platform => {return <span>{platform} - </span>})}</CardSubtitle>
                                <CardText className="tinywords mb-auto">{user.bio}</CardText>
                            </CardBody>
                        </Card>
                        <Container className="py-2 text-center">
                            <Button key={'remove' + user._id} color="transparent" className="border border-dark rounded shadow textshadow"
                                name={user.username} onClick={event => props.addFriend(event)}>Remove</Button>
                        </Container>
                    </div>
                }
                )}
            </Row>
            </div>
    );
}

export default Friends;