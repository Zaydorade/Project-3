import React from 'react';
import {
    CardBody, CardSubtitle
} from 'reactstrap';

const UserInfoCard = (props) => {
    return (
        <CardBody className="text-center bg-light border rounded shadow mb-2 mx-2">
            {/* <CardSubtitle>-Friendly mic clip-</CardSubtitle> */}
            <CardSubtitle>Region: {props.value.region}</CardSubtitle>
            <CardSubtitle>Schedule: {props.value.availability}</CardSubtitle>
            <CardSubtitle>Style: {props.value.style}</CardSubtitle>
        </CardBody>
    );
}

export default UserInfoCard;