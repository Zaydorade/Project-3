import React from 'react';
import {
    CardBody, CardSubtitle
} from 'reactstrap';

const AccountInfoCard = (props) => {
    return (
            <CardBody className="text-center bg-light border shadow rounded shadow mb-2 mx-2">
                {/* <CardSubtitle>-Friendly Voice Clip-</CardSubtitle> */}
                <CardSubtitle>Region: {props.value.region}</CardSubtitle>
                <CardSubtitle>Schedule: {props.value.availability}</CardSubtitle>
                <CardSubtitle>Style: {props.value.style}</CardSubtitle>
            </CardBody>
    );
}

export default AccountInfoCard;