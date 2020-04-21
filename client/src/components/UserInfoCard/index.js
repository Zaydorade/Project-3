import React from 'react';
import {
    Card, CardBody, CardSubtitle
} from 'reactstrap';

const UserInfoCard = (props) => {

    return (
        <CardBody className="text-center bg-secondary">
            <CardSubtitle>Style: Competitive</CardSubtitle>
            <CardSubtitle>Region: USA</CardSubtitle>
            <CardSubtitle>Schedule: 10 hrs/wk</CardSubtitle>
        </CardBody>
    );
}

export default UserInfoCard;