import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardSubtitle, Row, Container, Button
} from 'reactstrap';
import BrowseBar from '../BrowseBar';


const Browse = (props) => {

    return (
        <div className="spacer purple">
            <BrowseBar value={props.value} handleChange={props.handleDropdown} />
            <Row>
                {props.value.users.map(user => {
                    if (props.value.regionSearch.includes(user.region)) {
                        if (props.value.platformSearch.includes(user.platform)) {
                            if (props.value.styleSearch.includes(user.style)) {
                                if (!props.value.username) {
                                    return <div key={user._id} className="col-lg-3 my-4">
                                        <Card tag='a' onClick={() => props.viewProfile(user.username)} className="mx-3 cardHeight shadow">
                                            <CardImg top className="border rounded shadow" width="100%" src={user.avatar} alt="Profile Picture" />
                                            <CardBody className="d-flex flex-column text-center">
                                                <CardSubtitle className="mb-1 mt-auto"><b>{user.username}</b></CardSubtitle>
                                                <CardSubtitle className="smallwords">- {user.platforms.map(platform => { return <span>{platform} - </span> })}</CardSubtitle>
                                                <CardText className="tinywords mb-auto">{user.bio}</CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                } else {
                                    return <div key={user._id} className="col-lg-3 my-4">
                                        <Card tag='a' onClick={() => props.viewProfile(user.username)} className="mx-3 cardHeight shadow">
                                            <CardImg top className="border rounded shadow" width="100%" src={user.avatar} alt="Profile Picture" />
                                            <CardBody className="d-flex flex-column text-center">
                                                <CardSubtitle className="mb-1 mt-auto"><b>{user.username}</b></CardSubtitle>
                                                <CardSubtitle className="smallwords">- {user.platforms.map(platform => { return <span>{platform} - </span> })}</CardSubtitle>
                                                <CardText className="tinywords mb-auto">{user.bio}</CardText>
                                            </CardBody>
                                        </Card>
                                        {!props.value.username ? null :
                                            <Container className="py-2 text-center">
                                                <Button key={'add' + user._id} color="transparent" className="border border-dark rounded shadow textshadow"
                                                    name={user.username} onClick={event => props.addFriend(event)}>Add</Button>
                                            </Container>}
                                    </div>
                                }
                            } return null
                        } return null
                    } return null
                }

                )}
            </Row>
        </div>
    );
}

export default Browse;