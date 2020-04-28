import React from 'react';
import {
    CardBody, CardSubtitle
} from 'reactstrap';

const UserInfoCard = (props) => {
    return (
        <CardBody className="text-center bg-light border rounded shadow mb-2 mx-2">
            {/* <CardSubtitle>-Friendly mic clip-</CardSubtitle> */}
            <CardSubtitle>Region: {props.value.userProfile.region}</CardSubtitle>
            <CardSubtitle>Schedule: {props.value.userProfile.availability}</CardSubtitle>
            <CardSubtitle>Style: {props.value.userProfile.style}</CardSubtitle>
        </CardBody>
    );
}

export default UserInfoCard;